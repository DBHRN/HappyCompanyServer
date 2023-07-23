import Product from "../models/product.model.js";


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock, image} = req.body;
        const newProduct = new Product({
            name,
            description,
            price,
            stock,
            image
        });
        const productSaved = await newProduct.save();
        res.json(productSaved);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        return res.status(404).json({ message: "Product not found" });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Product not found" });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name,
                description,
                price,
                stock
            },
        );
        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
        res.json(updatedProduct);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}