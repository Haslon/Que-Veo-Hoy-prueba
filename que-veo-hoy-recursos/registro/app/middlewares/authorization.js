import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import User from '../controllers/models/user.js';
  // Importa el modelo de usuario

dotenv.config();

async function soloAdmin(req, res, next) {
  const logueado = await revisarCookie(req);
  if (logueado) return next();
  return res.redirect("/login");
}

async function soloPublico(req, res, next) {
  const logueado = await revisarCookie(req);
  if (!logueado) return next();
  return res.redirect("/admin");
}

async function revisarCookie(req) {
  try {
    console.log(req.headers)
    const cookieJWT = req.headers.cookie.split("=")[0];
    const decodificada = jsonwebtoken.verify(cookieJWT, process.env.JWT_SECRET);
    console.log(decodificada);

    const usuarioAResvisar = await User.findOne({ user: decodificada.user });
    console.log(usuarioAResvisar);

    if (!usuarioAResvisar) {
      return false;
    }
    return true;
  } catch (err) {
    console.error("Error revisando cookie:", err);
    return false;
  }
}

export const methods = {
  soloAdmin,
  soloPublico,
};
