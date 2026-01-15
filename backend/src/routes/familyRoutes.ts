import { Router } from 'express';
import { getFamilyView } from '../controllers/familyController';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.get('/', authenticate, authorize('FAMILY'), getFamilyView);

export default router;
