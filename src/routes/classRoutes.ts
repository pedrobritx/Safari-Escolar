import { Router } from 'express';
import { createClass, getClasses, getClass } from '../controllers/classController';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.post('/', authenticate, authorize('TEACHER', 'COORDINATOR'), createClass);
router.get('/', authenticate, getClasses);
router.get('/:id', authenticate, getClass);

export default router;
