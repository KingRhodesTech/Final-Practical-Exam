const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/censusDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define Schema
const censusSchema = new mongoose.Schema({
  year: Number,
  census_taker: String,
  num_people: Number,
  state: String,
  city: String,
});

// Define Model
const Census = mongoose.model("Census", censusSchema);

// Get all Census records
app.get("/api/census", async (req, res) => {
  try {
    const censusRecords = await Census.find();
    res.json(censusRecords);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add a new Census record
app.post("/api/census", async (req, res) => {
  const newRecord = new Census(req.body);
  try {
    await newRecord.save();
    res.json({ message: "Census record added successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a Census record
app.put("/api/census/:id", async (req, res) => {
  try {
    await Census.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Census record updated successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete a Census record
app.delete("/api/census/:id", async (req, res) => {
  try {
    await Census.findByIdAndDelete(req.params.id);
    res.json({ message: "Census record deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
