const express = require("express");

const Actions = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const actions = await Actions.get();
        res.status(200).json(actions);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting the action" });
    }
});

router.post("/", async (req, res) => {
    try {
        const action = await Actions.insert(req.body);
        res.status(201).json(action);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding the action" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const action = await Actions.update(req.params.id, req.body);
        if (action) {
            res.status(200).json(action);
        } else {
            res.status(404).json({ message: "The action could not be found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating the action" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const count = await Actions.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({ message: "The action has been removed" });
        } else {
            res.status(404).json({ message: "The action could not be found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error removing the action" });
    }
});

module.exports = router;