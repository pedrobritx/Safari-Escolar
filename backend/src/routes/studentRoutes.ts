import { Router } from 'express';
import { createStudent, getStudents, updateStudent, deleteStudent } from '../controllers/studentController';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.post('/', authenticate, authorize('TEACHER', 'COORDINATOR'), createStudent);
router.get('/', authenticate, getStudents);
router.put('/:id', authenticate, authorize('TEACHER', 'COORDINATOR'), updateStudent);
router.delete('/:id', authenticate, authorize('TEACHER', 'COORDINATOR'), deleteStudent);

export default router;
