import {z} from 'zod';
export const createProductSchema = z.object({
    name: z.string({
        string_error: 'Name must be a string',
        required_error: 'Name is required'
    }),
    description: z.string({
        string_error: 'Description must be a string',
        required_error: 'Description is required'
    }),
    price: z.number({
        string_error: 'Price must be a number',
        required_error: 'Price is required'
    }),
    stock: z.number({
        string_error: 'Stock must be a number',
        required_error: 'Stock is required'
    })
});