import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { getTeachers } from '../controllers/usersController';

const router = Router();

router.get('/teachers', authenticate, authorize('COORDINATOR'), getTeachers);

export default router;