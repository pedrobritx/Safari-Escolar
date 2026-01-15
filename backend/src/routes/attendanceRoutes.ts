import { Router } from 'express';
import { markAttendance, getTodayAttendance } from '../controllers/attendanceController';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.post('/', authenticate, authorize('TEACHER'), markAttendance);
router.get('/today/:classId', authenticate, getTodayAttendance);

export default router;
