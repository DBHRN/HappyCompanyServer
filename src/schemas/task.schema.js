import {z} from 'zod';
export const createTaskSchema = z.object({
    title: z.string({
        string_error: 'Title must be a string',
        required_error: 'Title is required'
    }),
    description: z.string({
        string_error: 'Description must be a string',
        required_error: 'Description is required'
    }),
    date: z.string().datetime().optional()
});