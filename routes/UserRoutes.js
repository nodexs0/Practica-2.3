import express from "express";
import User from "../models/user.js";
const router = express.Router();

router.get("/users", async (request, response) => {
    try {
        const users = await User.find({});
        response.status(200).send(users);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/users", async (request, response) => {
    const user = new User(request.body);

    try {
        await user.save();
        response.status(200).send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/users/:id", async (request, response) => {
    try {
        const user = await User.findOne({ _id: request.params.id });
        response.status(200).send(user);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.delete("/users/:id", async (request, response) => {
    try {
        const user = await User.findByIdAndDelete(request.params.id);
        if (!user) {
            return response.status(404).send({ error: "Usuario no encontrado" });
        }
        response.status(200).send({ message: "Usuario eliminado", user });
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;