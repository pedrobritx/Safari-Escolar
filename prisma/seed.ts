import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const ANIMAL_AVATARS = [
  'Leão', 'Tigre', 'Elefante', 'Girafa', 'Zebra', 'Macaco',
  'Urso', 'Lobo', 'Raposa', 'Coelho', 'Panda', 'Koala',
];

async function main() {
  console.log('Starting seed...');

  // Clear existing data
  await prisma.behaviorEvent.deleteMany();
  await prisma.attendance.deleteMany();
  await prisma.student.deleteMany();
  await prisma.family.deleteMany();
  await prisma.class.deleteMany();
  await prisma.school.deleteMany();
  await prisma.user.deleteMany();

  const hashedPassword = await bcrypt.hash('password123', 10);

  // 1. Create Admin
  const admin = await prisma.user.create({
    data: {
      email: 'admin@safariescolar.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'ADMIN',
    },
  });
  console.log('Created admin');

  // 2. Create Coordinator
  const coordinator = await prisma.user.create({
    data: {
      email: 'coordenador@escola.com',
      password: hashedPassword,
      name: 'Maria Coordenadora',
      role: 'COORDINATOR',
    },
  });
  console.log('Created coordinator');

  // 3. Create School
  const school = await prisma.school.create({
    data: {
      name: 'Escola Municipal Safari',
      coordinatorId: coordinator.id,
    },
  });
  console.log('Created school');

  // 4. Create 2 Teachers
  const teacher1 = await prisma.user.create({
    data: {
      email: 'joao.professor@escola.com',
      password: hashedPassword,
      name: 'João Professor',
      role: 'TEACHER',
    },
  });

  const teacher2 = await prisma.user.create({
    data: {
      email: 'ana.professora@escola.com',
      password: hashedPassword,
      name: 'Ana Professora',
      role: 'TEACHER',
    },
  });
  console.log('Created 2 teachers');

  // 5. Create 2 Classes
  const class1 = await prisma.class.create({
    data: {
      name: 'Turma A - 1º Ano',
      schoolId: school.id,
      teacherId: teacher1.id,
    },
  });

  const class2 = await prisma.class.create({
    data: {
      name: 'Turma B - 2º Ano',
      schoolId: school.id,
      teacherId: teacher2.id,
    },
  });
  console.log('Created 2 classes');

  // 6. Create 4 Families
  const family1User = await prisma.user.create({
    data: {
      email: 'familia.silva@email.com',
      password: hashedPassword,
      name: 'Família Silva',
      role: 'FAMILY',
    },
  });
  const family1 = await prisma.family.create({
    data: { userId: family1User.id },
  });

  const family2User = await prisma.user.create({
    data: {
      email: 'familia.santos@email.com',
      password: hashedPassword,
      name: 'Família Santos',
      role: 'FAMILY',
    },
  });
  const family2 = await prisma.family.create({
    data: { userId: family2User.id },
  });

  const family3User = await prisma.user.create({
    data: {
      email: 'familia.oliveira@email.com',
      password: hashedPassword,
      name: 'Família Oliveira',
      role: 'FAMILY',
    },
  });
  const family3 = await prisma.family.create({
    data: { userId: family3User.id },
  });

  const family4User = await prisma.user.create({
    data: {
      email: 'familia.costa@email.com',
      password: hashedPassword,
      name: 'Família Costa',
      role: 'FAMILY',
    },
  });
  const family4 = await prisma.family.create({
    data: { userId: family4User.id },
  });
  console.log('Created 4 families');

  // 7. Create 12 Students (6 per class)
  const students = [
    // Class 1 students
    { name: 'Pedro Silva', animalAvatar: ANIMAL_AVATARS[0], classId: class1.id, familyId: family1.id },
    { name: 'Lucas Silva', animalAvatar: ANIMAL_AVATARS[1], classId: class1.id, familyId: family1.id },
    { name: 'Maria Santos', animalAvatar: ANIMAL_AVATARS[2], classId: class1.id, familyId: family2.id },
    { name: 'Julia Santos', animalAvatar: ANIMAL_AVATARS[3], classId: class1.id, familyId: family2.id },
    { name: 'Carlos Oliveira', animalAvatar: ANIMAL_AVATARS[4], classId: class1.id, familyId: family3.id },
    { name: 'Ana Oliveira', animalAvatar: ANIMAL_AVATARS[5], classId: class1.id, familyId: family3.id },
    // Class 2 students
    { name: 'Rafael Costa', animalAvatar: ANIMAL_AVATARS[6], classId: class2.id, familyId: family4.id },
    { name: 'Beatriz Costa', animalAvatar: ANIMAL_AVATARS[7], classId: class2.id, familyId: family4.id },
    { name: 'Gabriel Souza', animalAvatar: ANIMAL_AVATARS[8], classId: class2.id, familyId: null },
    { name: 'Larissa Pereira', animalAvatar: ANIMAL_AVATARS[9], classId: class2.id, familyId: null },
    { name: 'Mateus Lima', animalAvatar: ANIMAL_AVATARS[10], classId: class2.id, familyId: null },
    { name: 'Sofia Alves', animalAvatar: ANIMAL_AVATARS[11], classId: class2.id, familyId: null },
  ];

  const createdStudents = [];
  for (const studentData of students) {
    const student = await prisma.student.create({ data: studentData });
    createdStudents.push(student);
  }
  console.log('Created 12 students');

  // 8. Create some sample attendance for today
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < 6; i++) {
    await prisma.attendance.create({
      data: {
        studentId: createdStudents[i].id,
        date: today,
        present: i % 3 !== 0, // Some students absent
      },
    });
  }
  console.log('Created sample attendance');

  // 9. Create some sample behavior events
  await prisma.behaviorEvent.create({
    data: {
      studentId: createdStudents[0].id,
      type: 'positive',
      description: 'Ajudou colega com tarefa',
      date: new Date(),
    },
  });

  await prisma.behaviorEvent.create({
    data: {
      studentId: createdStudents[1].id,
      type: 'positive',
      description: 'Participou ativamente da aula',
      date: new Date(),
    },
  });

  await prisma.behaviorEvent.create({
    data: {
      studentId: createdStudents[2].id,
      type: 'negative',
      description: 'Conversou durante a explicação',
      date: new Date(),
    },
  });
  console.log('Created sample behavior events');

  console.log('Seed completed successfully!');
  console.log('\nTest credentials:');
  console.log('Admin: admin@safariescolar.com / password123');
  console.log('Coordinator: coordenador@escola.com / password123');
  console.log('Teacher 1: joao.professor@escola.com / password123');
  console.log('Teacher 2: ana.professora@escola.com / password123');
  console.log('Family 1: familia.silva@email.com / password123');
  console.log('Family 2: familia.santos@email.com / password123');
  console.log('Family 3: familia.oliveira@email.com / password123');
  console.log('Family 4: familia.costa@email.com / password123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
