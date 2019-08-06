const express = require("express");

const Projects = require("../data/helpers/projectModel");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting the projects" });
    }
});

router.get("/:id/actions", async (req, res) => {
    try {
        const actions = await Projects.getProjectActions(req.params.id);
        res.status(200).json(actions);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting the actions for this project" });
    }
});

router.post("/", async (req, res) => {
    try {
        const project = await Projects.insert(req.body);
        res.status(201).json(project);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding the project" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const project = await Projects.update(req.params.id, req.body);
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: "The project could not be found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating the project" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const count = await Projects.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({ message: "The project has been removed" });
        } else {
            res.status(404).json({ message: "The project could not be found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error removing the project" });
    }
});

module.exports = router;