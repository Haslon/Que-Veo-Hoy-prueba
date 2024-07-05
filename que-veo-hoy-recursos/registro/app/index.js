import express from "express";
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import connectDB from './config/database.js';  // Importa la configuración de la base de datos
import { methods as authentication } from "./controllers/authentication.controller.js";
import { methods as authorization } from "./middlewares/authorization.js"; // Asegúrate de importar authorization

dotenv.config();

// Conectar a la base de datos
connectDB();
console.log(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Server
const app = express();
const PORT = process.env.PORT || 4000;

app.set("port", PORT);
app.listen(app.get("port"), () => {
  console.log("Servidor corriendo en puerto", app.get("port"));
});

// Configuración
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookieParser());

// Rutas
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "pages", "login.html")));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "pages", "login.html")));
app.get("/cliente", (req, res) => res.sendFile(path.join(__dirname, "pages", "/html/index.html")));
app.get("/trailer", (req, res) => res.sendFile(path.join(__dirname, "pages", "/html/trailer.html")));
app.get("/actores", (req, res) => res.sendFile(path.join(__dirname, "pages", "/html/actores.html")));
app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "pages", "register.html")));
app.get("/admin", authorization.soloAdmin, (req, res) => res.sendFile(path.join(__dirname, "pages", "admin", "admin.html")));

app.post("/api/login", authentication.login);
app.post("/api/register", authentication.register);
