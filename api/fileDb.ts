import {promises as fs} from 'fs';
import {Card} from "./types";

const filename = './db.json';
let data: Card[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(filename);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            data = [];
        }
    },
    async getItems() {
        return data;
    },
    async addItem(item: Card) {
        data.push(item);
        await this.save();
        return item
    },
    async save() {
        return fs.writeFile(filename, JSON.stringify(data));
    }
};

export default fileDb;