import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import { exportStudents, exportHistory } from '../controllers/exportController';

const router = Router();

router.get('/students', authenticate, exportStudents);
router.get('/history', authenticate, exportHistory);

export default router;
