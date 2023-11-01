import express from "express";
const router=express.Router();
import  * as jokesController from "../controllers/jokesControllers.js"

router.get("/api/jokes", jokesController.getJoke)
router.post("/api/jokes/create", jokesController.createJoke)
router.put("/api/jokes/update/:idJoke", jokesController.updateJoke)
router.delete("/api/jokes/delete/:idJoke", jokesController.deleteJoke)
router.get("/api/getOnejoke/:idJoke", jokesController.getOneJoke)

export{router}