import { Router } from 'express';
import { createBehaviorEvent, getBehaviorEvents, deleteBehaviorEvent } from '../controllers/behaviorController';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.post('/', authenticate, authorize('TEACHER'), createBehaviorEvent);
router.get('/', authenticate, getBehaviorEvents);
router.delete('/:id', authenticate, authorize('TEACHER'), deleteBehaviorEvent);

export default router;
