import { Router } from 'express';
import { createFeedbackEvent, getFeedbackEvents, deleteFeedbackEvent } from '../controllers/feedbackController';
import { authenticate } from '../middleware/auth';

const feedbackRoutes = Router();

feedbackRoutes.use(authenticate);

feedbackRoutes.post('/', createFeedbackEvent);
feedbackRoutes.get('/:studentId', getFeedbackEvents);
feedbackRoutes.delete('/:id', deleteFeedbackEvent);

export default feedbackRoutes;
