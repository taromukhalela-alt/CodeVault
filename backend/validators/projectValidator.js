import Joi from 'joi';

export const createProjectSchema = Joi.object({
    title: Joi.string().trim().min(1).max(100).required(),
    techStack: Joi.array().items(Joi.string().trim()).default([]),
    description: Joi.string().trim().max(2000).allow(''),
});

export const updateProjectSchema = Joi.object({
    title: Joi.string().trim().min(1).max(100),
    techStack: Joi.array().items(Joi.string().trim()),
    description: Joi.string().trim().max(2000).allow(''),
}).min(1);

export const projectIdSchema = Joi.object({
    id: Joi.string().hex().length(24).required(),
});