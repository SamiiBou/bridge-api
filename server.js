import express from "express";
import fetch from "node-fetch"; // Import ES Module
const app = express();
const PORT = process.env.PORT || 3002;

app.get("/monapi", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) {
      throw new Error(`Erreur réseau: ${response.statusText}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
