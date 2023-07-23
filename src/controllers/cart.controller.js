import Cart from '../models/cart.model.js';

export const addCartItem = async (req, res) => {
    const {name,quantity,price,product,user} = req.body;
    try {
        const newProduct = new Cart({
            name,
            quantity,
            price,
            product,
            user
        });
        const cartSaved = await newProduct.save();
        res.json(cartSaved);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCartItems = async (req, res) => {
    try {
        const cart = await Cart.find({
            user: req.user.id,
        }).populate("user", ["username"]);
        res.json(cart);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteCartItem = async (req, res) => {
    try {
        const product = await Cart.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Product not found" });
    }
}

export const deleteCartItems = async (req, res) => {
    try {
        for (const item of req.body) {
            await Cart.findByIdAndDelete(item._id);
        }
        res.sendStatus(204);
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getCartItem = async (req, res) => {
    try {
        const product = await Cart.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        return res.status(404).json({ message: "Product not found" });
    }
}