import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getCartItems, addCartItem, deleteCartItem, deleteCartItems, getCartItem} from '../controllers/cart.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createCartSchema } from '../schemas/cart.schema.js';

const router = Router();

router.get('/cart', authRequired, getCartItems);
router.get('/cart/:id', authRequired, getCartItem);
router.post('/cart',addCartItem);
router.delete('/cart/:id', authRequired, deleteCartItem);
router.delete('/cart', authRequired, deleteCartItems);


export default router;