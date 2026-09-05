import { User, Project } from '../models/index.js';

export async function createProject(title, techStack, description, userId) {
    try {
        // A project can only be created for an existing user.
        const userExists = await User.findOne({ _id: userId });
        if (!userExists) {
            throw new Error("Can't create a project coz user doesn't exist.");
        }

        if (!title) {
            throw new Error("Can't create a project without a title.");
        }

        const project = new Project({
            title,
            techStack,
            description,
            userId,
        });

        await project.save();

        return {
            _id: project._id,
            title: project.title,
            description: project.description,
            userId: project.userId,
        };
    } catch (error) {
        throw error;
    }
}

export async function editProject(title, description, userId, projectId) {
    try {
        // Matching both IDs prevents a user from editing someone else's project.
        const project = await Project.findOne({
            userId,
            _id: projectId,
        });

        if (!project) {
            throw new Error('Project not found or user is not authorized.');
        }

        if (!title) {
            throw new Error("Can't edit a project without a title.");
        }

        return await Project.findOneAndUpdate(
            { userId: userId, _id: projectId },
            { title, description },
            { new: true }
        );
    } catch (error) {
        throw error;
    }
}

export async function getProjects(userId) {
    try {
        const projects = await Project.find({ userId });

        return projects;
    } catch (error) {
        throw error;
    }
}

export async function deleteProject(projectId, userId) {
    try {
        // The ownership filter prevents deleting another user's project.
        const project = await Project.findOneAndDelete({
            _id: projectId,
            userId,
        });

        

        if (!project) {
            throw new Error("Project not found.");
        }

        await User.findByIdAndUpdate(userId, {
            $pull: { projects: projectId },
        });

        return project;
    } catch (error) {
        throw error;
    }
}

export async function getProjectById(projectId, userId) {
    try {
        // Return the project only when both its ID and owner match.
        const project = await Project.findOne({
            _id: projectId,
            userId,
        });

        if (!project) {
            throw new Error('Cannot find project with the given ID and user ID.');
        }

        return project;
    } catch (error) {
        throw error;
    }
}
