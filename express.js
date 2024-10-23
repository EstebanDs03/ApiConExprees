import express from "express"; // Importa el módulo express para crear aplicaciones web

const app = express(); // Crea una instancia de la aplicación Express

const PORT = process.env.PORT ?? 2345; // Define el puerto en el que el servidor escuchará (usando una variable de entorno o 2345 por defecto)

// Ruta GET que responde con un mensaje HTML simple
app.get("/", (req, res) => {
  res.send("<h1>Mi pagina</h1>"); // Envía un HTML con un encabezado al cliente
});

// Ruta POST para recibir datos en /pokemon
app.post("/pokemon", (req, res) => {
  let body = ""; // Inicializa una variable para almacenar el cuerpo de la solicitud

  req.on("data", (chunk) => {
    body += chunk.toString(); // Concatenar los datos recibidos en cada fragmento
  });

  req.on("end", () => {
    const data = JSON.parse(body); // Parsea el cuerpo de la solicitud como JSON
    res.status(201).json(data); // Responde con un código 201 y los datos recibidos
  });
});

// Hace que el servidor escuche en el puerto definido y muestra un mensaje en la consola cuando está listo
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`); // Muestra un mensaje en la consola indicando que el servidor está escuchando
});
