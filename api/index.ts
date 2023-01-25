import express = require("express");
import fileDb from "./fileDb";
import cardsRouter from "./routers/cards";
import cors = require("cors");

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use('/cards', cardsRouter);
app.use(express.static('public'));

const run = async () => {
    await fileDb.init();
    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
};

run().catch(console.error);