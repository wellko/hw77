import express = require("express");
import fileDb from "../fileDb";
import {Card} from "../types";
import {imagesUpload} from "../multer";

const cardsRouter = express.Router();

cardsRouter.get('/', (async (req, res) => {
    const allCards = await fileDb.getItems();
    res.send(allCards);
}))

cardsRouter.post('/', imagesUpload.single('image'),async (req, res) => {
    if (req.body.message.length < 1) {
        const errorText = {error: 'message must be present in the request'};
        res.status(400).send(errorText)
    } else {
        let message: Card
        if (req.body.author.length > 0) {
            message = {
                author: req.body.author,
                message: req.body.message,
                image: req.file ? req.file.filename : null,
            }
        } else {
            message = {
                author: 'Anonymous',
                message: req.body.message,
                image: req.file ? req.file.filename : null,
            }
        }
        const response = await fileDb.addItem(message);
        res.send(response);
    }
})

export default cardsRouter;


