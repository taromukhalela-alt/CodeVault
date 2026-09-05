import express from 'express';
import { 
    getProjectByIdController,
    getProjectsController,
    editProjectController,
    createProjectController,
    deleteProjectController 
} from '../controllers/projectController';

const router = express.Router();

router.post('/:userId', createProjectController);
router.get('/:userId', getProjectsController);
router.get('/:userId/:projectId', getProjectByIdController);
router.put('/:userId/:projectId', editProjectController);
router.delete('/:userId/:projectId', deleteProjectController);

export default router;