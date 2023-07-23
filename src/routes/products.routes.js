import {Router} from 'express';
import {getProducts, getProduct, createProduct, updateProduct, deleteProduct} from '../controllers/products.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createProductSchema } from '../schemas/product.schema.js';

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.post('/products', validateSchema(createProductSchema), createProduct);
router.put('/products/:id', validateSchema(createProductSchema), updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;