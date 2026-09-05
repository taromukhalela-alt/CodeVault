import { createProject, getProjects, getProjectById, editProject, deleteProject } from '../services/projectService.js';
import { formatResponse, formatError, log, error } from '../utils/index.js';

export async function createProjectController(req, res) {
    try {
        const { title, techStack, description} = req.body;
        const userId = req.params;
        const newProject = await createProject(title, techStack, description, userId);

        log(`Project created successfully for user with ID: ${userId}`);
        return res.status(201).json(formatResponse(newProject, "Successfully created project."));
    } catch (caughtError) {
        error(`Error occurred while creating project for user with ID: ${userId}`);
        return res.status(500).json(formatError(caughtError, caughtError.message || "An error occurred while creating the project."));
    }
}

export async function editProjectController(req, res) {
    const { userId, projectId } = req.params;

    try {
        const { title, description } = req.body;
        const updatedProject = await editProject(
            title,
            description,
            userId,
            projectId
        );

        log(`Project with ID: ${projectId} updated successfully for user with ID: ${userId}`);

        return res
            .status(200)
            .json(formatResponse(updatedProject, 'Successfully updated project.'));
    } catch (caughtError) {
        error(`Error updating project ${projectId} for user ${userId}`);

        return res
            .status(500)
            .json(formatError(
                caughtError,
                caughtError.message || 'An error occurred while updating the project.'
            ));
    }
}

export async function getProjectsController(req, res) {
    try {
        const { userId } = req.params;
        const projects = await getProjects(userId);

        log(`Projects retrieved successfully for user.`);
        return res.status(200).json(formatResponse(projects, "Successfully retrieved projects."));
    } catch (caughtError) {
        error(`Error occurred while retrieving projects for user.`);
        return res.status(500).json(formatError(caughtError, caughtError.message || "An error occurred while retrieving the projects."));
    }
}

export async function deleteProjectController(req, res) {
    try {
        const { projectId, userId } = req.params;
        await deleteProject(projectId, userId);

        log(`Project with ID: ${projectId} deleted successfully for user with ID: ${userId}`);
        return res.status(200).json(formatResponse(null, "Successfully deleted project."));
    } catch (caughtError) {
        error(`Error occurred while deleting project with ID: ${projectId} for user with ID: ${userId}`);
        return res.status(500).json(formatError(caughtError, caughtError.message || "An error occurred while deleting the project."));
    }
}

export async function getProjectByIdController(req, res) {
    try {
        const { projectId, userId } = req.params;
        const project = await getProjectById(projectId, userId);

        log(`Project with ID: ${projectId} retrieved successfully for user with ID: ${userId}`);
        return res.status(200).json(formatResponse(project, "Successfully retrieved project."));
    } catch (caughtError) {
        error(`Error occurred while retrieving project with ID: ${projectId} for user with ID: ${userId}`);
        return res.status(500).json(formatError(caughtError, caughtError.message || "An error occurred while retrieving the project."));
    }
}