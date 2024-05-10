import express from "express";
import Player from "../models/player.js";
const router = express.Router();

router.get("/players", async (request, response) => {
    try {
        const players = await Player.find({});
        response.status(200).send(players);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/players", async (request, response) => {
    const player = new Player(request.body);

    try {
        await player.save();
        response.status(200).send(player);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/players/:id", async (request, response) => {
    try {
        const player = await Player.findOne({ _id: request.params.id });
        response.status(200).send(player);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;