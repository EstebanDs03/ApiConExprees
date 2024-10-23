import express from "express";

const app = express();

const PORT = process.env.PORT ?? 2345;

app.get("/", (req, res) => {
  res.send("<h1>Mi pagina</h1>");
});

app.post("/pokemon", (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = JSON.parse(body);
    res.status(201).json(data);
  });
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
