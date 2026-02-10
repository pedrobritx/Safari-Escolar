import { Response } from 'express';
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";
import { ok, fail } from "../utils/response";

export const getSchools = async (req: AuthRequest, res: Response) => {
	try {
		const schoolsData = await prisma.school.findMany({
      select: {
        id: true,
        name: true,
        coordinator: {
          select: {
            id: true,
            email: true,
            name: true
          }
        }
      }
    });

  	ok(res, schoolsData);
  } catch (error) {
  	console.error('Get class error:', error);
  	fail(res, 'Internal server error', 500);
  }

}

export const setSchoolCoordinator = async (req: AuthRequest, res: Response) => {
	try {
    const { coordinatorId } = req.body;
    const { schoolId } = req.params;

    if(!schoolId || !coordinatorId) {
      return fail(res, 'Escola e/ou Id do Coordenador não informado', 400);
    }

    const school = await prisma.school.findUnique({
      where: { id: schoolId as string },
    });

    if(!school) {
      return fail(res, 'Escola não Encontrada', 400);
    }

    const coordinator = await prisma.user.findUnique({
      where: { id: coordinatorId },
      include: {
        coordinatorSchool: true
      }
    })

    if(!coordinator) {
      return fail(res, 'Coordenador não encontrado', 400);
    } else if (coordinator.coordinatorSchool){
      return fail(res, 'Coordenador já vinculado a uma escola', 400);
    }

    const newSchoolCoordinator = await prisma.school.update({
      where: {id: school.id},
      data: {
        coordinatorId: coordinator.id
      },
      include: {
        coordinator: true
      }
    })

    ok(res, newSchoolCoordinator);
  } catch (error) {
	console.error('Get class error:', error);
	fail(res, 'Internal server error', 500);
  }
}

export const createSchool = async (req: AuthRequest, res: Response) => {
  try {
    const { name, coordinatorId } = req.body;

   if (!name || !coordinatorId) {
      return fail(res, 'Nome e/ou Id do Coordenador não informados', 400);
    }

    const school = await prisma.school.findFirst({
        where: { name: name as string },
      });

    if(school) {
      return fail(res, `Escola ${name} já cadastrada`, 400);
    }

    if(coordinatorId) {
      const coordinator = await prisma.user.findUnique({
        where: { id: coordinatorId, role: 'COORDINATOR' },
        include: {
          coordinatorSchool: true
        }
      })

      if(!coordinator) {
        return fail(res, 'Coordenador não encontrado', 400);
      }

      if(coordinator.coordinatorSchool) {
        return fail(res, 'Coordenador já vinculado em uma escola', 400);
      }
    }

    const newSchool = await prisma.school.create({
      data: {
        name,
        coordinatorId
      },
      select: {
        id: true,
        name: true,
        coordinator: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })

    ok(res, newSchool, 201);
  } catch (error) {
    console.error('Create class error:', error);
    fail(res, 'Internal server error', 500);
  }

}

export const updateSchool = async (req: AuthRequest, res: Response) => {
  try {
    const { name, coordinatorId, id } = req.body;

    if(!id)
      return fail(res, 'Id não informado', 400);

    const school = await prisma.school.findUnique({
      where: { id: id as string },
    });

    if(!school) {
      return fail(res, 'Escola não Encontrada', 400);
    }

    if(coordinatorId && coordinatorId !== school.coordinatorId) {
      const coordinator = await prisma.user.findUnique({
        where: { id: coordinatorId },
        include: {
          coordinatorSchool: true
        }
      })

      if(!coordinator) {
        return fail(res, 'Coordenador não encontrado', 400);
      } else if (coordinator.coordinatorSchool){
        return fail(res, 'Coordenador já vinculado a uma escola', 400);
      }
    }

    const updatedSchool = await prisma.school.update({
      where: {id: school.id},
      data: {
        name: name ? name : school.name,
        coordinatorId: coordinatorId ? coordinatorId : school.coordinatorId
      }
    })

    ok(res, updatedSchool)

  } catch (error) {
    console.error('Get class error:', error);
	  res.status(500).json({ error: 'Internal server error' });
  }
}

export const deleteSchool = async (req: AuthRequest, res: Response) => {
  try {
    const { schoolId } = req.params;

    const school = await prisma.school.findUnique({
      where: { id: schoolId as string },
    });

    if(!school) {
      return fail(res, 'Escola não Encontrada', 400);
    }

    await prisma.school.delete({
      where: {id: school.id}
    })

    ok(res, { message: 'Registro excluído com sucesso' })

  } catch (error) {
    console.error('Get class error:', error);
	  fail(res, 'Internal server error', 500);
  }
}
