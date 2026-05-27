const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");
    } catch (err) {
        console.error("Error connecting to the database", err);
        process.exit(1);
    }
}

const initDB = async () => {
    try {
        await Listing.deleteMany({});
        initData.data = initData.data.map((obj) => ({
            ...obj,
            owner: "668c165f328921fa5a04f6f2",
            image: obj.image.url // Adjust the data to fit the schema
        }));
        await Listing.insertMany(initData.data);
        console.log("Data was initialized");
    } catch (err) {
        console.error("Error initializing data", err);
    }
};

main().then(() => {
    return initDB();
}).catch(err => {
    console.error(err);
});
