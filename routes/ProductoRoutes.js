import express from "express";
import Product from "../models/producto.js";

const router = express.Router();

router.get("/productos", async (request, response) => {
    try {
        const products = await Product.find({}).populate('pedido');
        response.status(200).send(products);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/productos", async (request, response) => {
    const product = new Product(request.body);

    try {
        await product.save();
        response.status(200).send(product);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/productos/:id", async (request, response) => {
    try {
        const product = await Product.findOne({ _id: request.params.id }).populate('pedido');
        response.status(200).send(product);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;
