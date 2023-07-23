import {z} from 'zod';
export const createCartSchema = z.object({
    quantity: z.number({
        string_error: 'Quantity must be a number',
        required_error: 'Quantity is required'
    }),
});