import { Router } from 'express';
import { createStudent, getStudents } from '../controllers/studentController';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.post('/', authenticate, authorize('TEACHER', 'COORDINATOR'), createStudent);
router.get('/', authenticate, getStudents);

export default router;
