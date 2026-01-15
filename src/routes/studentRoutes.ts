import { Router } from 'express';
import { createStudent, getStudents, updateStudent } from '../controllers/studentController';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.post('/', authenticate, authorize('TEACHER', 'COORDINATOR'), createStudent);
router.get('/', authenticate, getStudents);
router.put('/:id', authenticate, authorize('TEACHER', 'COORDINATOR'), updateStudent);

export default router;
