const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const mongoose = require("mongoose");
const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_LOCAL_URI)
  .then(() => {
    console.log("Successfully connected to mongodb");
  })
  .catch((err) => {
    console.error("Mongodb connection error: ", err);
  });

const Schema = mongoose.Schema;

const verseSchema = new Schema({
  book: String,
  chapter: Number,
  verse: String,
  text: { type: String, trim: true },
});

const Verse = mongoose.model("Verse", verseSchema);

app.route("/").get(async (req, res) => {
  const randomVerses = await Verse.aggregate([{ $sample: { size: 1 } }]); //randomly select one verse from the collection

  if (randomVerses.length === 0) {
    return res.status(404).json({ error: "No verses found" });
  }

//   res.status(200).json(randomVerses[0]); //successfully return the random verse
  res.render("index.ejs", { verse: randomVerses[0] });
});

//protect this route via middleware or other means in production
app.get("/seed", async (req, res) => {
  //use native filesysytem to read the json file
  try {
    const filePath = path.join(__dirname, "sample-verses.json");
    const data = fs.readFileSync(filePath, "utf8");
    const verses = JSON.parse(data);

    for (const verseData of verses) {
      const newVerse = new Verse(verseData);
      await newVerse.save();
    }

    res.status(200).json({ message: "Verses imported successfully" });
  } catch (error) {
    console.error("Error importing verses:", error);
    res.status(500).json({ error: "Failed to import verses" });
  }
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.listen(port, () => {
  console.log(`BibleAPI is live at port ${port}`);
});

// BIBLE verse API
// -sends a random bible verse when called
// -persist a verse for a whole day -- verse of the day
