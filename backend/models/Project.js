
import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    techStack: [{
        type: String,
    }],

    description: {
        type: String,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, 
{ 
    timestamps: true 
}); 

const Project = mongoose.model('Project', projectSchema);
export default Project;
