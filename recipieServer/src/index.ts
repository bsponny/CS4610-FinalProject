import express from "express";
import {db} from "../lib/firebase";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("I got started!");
});

app.post("/users", async (req, res) => {
  try {
    const {firstName, lastName, email, password} = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    const userRef = await db.collection("users").add({
      firstName,
      lastName,
      email,
      passwordHash
    });

    res.status(201).json({id: userRef.id });
  }
  catch (error){
    console.error(error);
    res.status(500).send("Error creating user");
  }
});