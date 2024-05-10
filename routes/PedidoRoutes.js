import express from "express";
import Order from "../models/pedido.js";

const router = express.Router();

router.get("/pedido", async (request, response) => {
    try {
        const orders = await Order.find({}).populate('player').populate('user').populate('producto');
        response.status(200).send(orders);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/pedido", async (request, response) => {
    const order = new Order(request.body);

    try {
        await order.save();
        response.status(200).send(order);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/pedido/:id", async (request, response) => {
    try {
        const order = await Order.findOne({ _id: request.params.id }).populate('player').populate('user').populate('producto');
        response.status(200).send(order);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;
