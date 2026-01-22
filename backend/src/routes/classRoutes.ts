import { Router } from 'express';
import { createClass, getClasses, getClass, updateClassTeacher } from '../controllers/classController';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.post('/', authenticate, authorize('TEACHER', 'COORDINATOR'), createClass);
router.get('/', authenticate, getClasses);
router.get('/:id', authenticate, getClass);
router.put('/:classId/teacher/:teacherId', authenticate, authorize('COORDINATOR'), updateClassTeacher);

export default router;
