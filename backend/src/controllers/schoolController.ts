import { Response } from 'express';
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";

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

  	res.json(schoolsData);
  } catch (error) {
  	console.error('Get class error:', error);
  	res.status(500).json({ error: 'Internal server error' });
  }

}

export const setSchoolCoordinator = async (req: AuthRequest, res: Response) => {
	try {
    const { coordinatorId } = req.body;
    const { schoolId } = req.params;

    if(!schoolId || !coordinatorId) {
      return res.status(400).json({ error: 'Escola e/ou Id do Coordenador não informado' });
    }

    const school = await prisma.school.findUnique({
      where: { id: schoolId as string },
    });

    if(!school) {
      return res.status(400).json({ error: 'Escola não Encontrada' });
    }

    const coordinator = await prisma.user.findUnique({
      where: { id: coordinatorId },
      include: {
        coordinatorSchool: true
      }
    })

    if(!coordinator) {
      return res.status(400).json({ error: 'Coordenador não encontrado' });
    } else if (coordinator.coordinatorSchool){
      return res.status(400).json({ error: 'Coordenador já vinculado a uma escola' });
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

    res.json(newSchoolCoordinator);
  } catch (error) {
	console.error('Get class error:', error);
	res.status(500).json({ error: 'Internal server error' });
  }
}

export const createSchool = async (req: AuthRequest, res: Response) => {
  try {
    const { name, coordinatorId } = req.body;

   if (!name || !coordinatorId) {
      return res.status(400).json({ error: 'Nome e/ou Id do Coordenador não informados' });
    }

    const school = await prisma.school.findFirst({
        where: { name: name as string },
      });

    if(school) {
      return res.status(400).json({ error: `Escola ${name} já cadastrada` });
    }

    if(coordinatorId) {
      const coordinator = await prisma.user.findUnique({
        where: { id: coordinatorId, role: 'COORDINATOR' },
        include: {
          coordinatorSchool: true
        }
      })

      if(!coordinator) {
        return res.status(400).json({ error: 'Coordenador não encontrado' });
      }

      if(coordinator.coordinatorSchool) {
        return res.status(400).json({ error: 'Coordenador já vinculado em uma escola' });
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

    res.status(201).json(newSchool);
  } catch (error) {
    console.error('Create class error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

}

export const updateSchool = async (req: AuthRequest, res: Response) => {
  try {
    const { name, coordinatorId, id } = req.body;

    if(!id)
      return res.status(400).json({ error: 'Id não informado' });

    const school = await prisma.school.findUnique({
      where: { id: id as string },
    });

    if(!school) {
      return res.status(400).json({ error: 'Escola não Encontrada' });
    }

    if(coordinatorId && coordinatorId !== school.coordinatorId) {
      const coordinator = await prisma.user.findUnique({
        where: { id: coordinatorId },
        include: {
          coordinatorSchool: true
        }
      })

      if(!coordinator) {
        return res.status(400).json({ error: 'Coordenador não encontrado' });
      } else if (coordinator.coordinatorSchool){
        return res.status(400).json({ error: 'Coordenador já vinculado a uma escola' });
      }
    }

    const updatedSchool = await prisma.school.update({
      where: {id: school.id},
      data: {
        name: name ? name : school.name,
        coordinatorId: coordinatorId ? coordinatorId : school.coordinatorId
      }
    })

    res.status(200).json(updatedSchool)

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
      return res.status(400).json({ error: 'Escola não Encontrada' });
    }

    await prisma.school.delete({
      where: {id: school.id}
    })

    res.status(200).json({
      success: true,
      message: 'Registro excluído com sucesso'
    })

  } catch (error) {
    console.error('Get class error:', error);
	  res.status(500).json({ error: 'Internal server error' });
  }
}