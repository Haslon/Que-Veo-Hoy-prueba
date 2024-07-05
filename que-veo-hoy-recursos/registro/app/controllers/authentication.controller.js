import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import User from "./models/user.js";

dotenv.config();

async function login(req, res) {
  console.log(req.body);
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).send({ status: "Error", message: "Los campos están incompletos" });
  }

  try {
    const usuarioAResvisar = await User.findOne({ user });

    if (!usuarioAResvisar) {
      return res.status(400).send({ status: "Error", message: "Error durante login" });
    }

    const loginCorrecto = await bcryptjs.compare(password, usuarioAResvisar.password);

    if (!loginCorrecto) {
      return res.status(400).send({ status: "Error", message: "Error durante login" });
    }

    const token = jsonwebtoken.sign(
      { user: usuarioAResvisar.user },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );

    const cookieOption = {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Usar solo en producción con HTTPS
      path: "/login"
    };

    res.cookie("jwt", token, cookieOption);

    // Redirigir al usuario a la página index.html en el directorio cliente/html
    //res.redirect("../cliente/html/index.html");
    res.status(201).send({ status: "ok", message: "Login exitoso", redirect: "/cliente" });

  } catch (error) {
    console.error("Error durante el login:", error);
    res.status(500).send({ status: "Error", message: "Error durante el login" });
  }
}

async function register(req, res) {
  const { user, password, email } = req.body;

  if (!user || !password || !email) {
    return res.status(400).send({ status: "Error", message: "Los campos están incompletos" });
  }

  try {
    const usuarioAResvisar = await User.findOne({ user });

    if (usuarioAResvisar) {
      return res.status(400).send({ status: "Error", message: "Este usuario ya existe" });
    }

    const salt = await bcryptjs.genSalt(5);
    const hashPassword = await bcryptjs.hash(password, salt);

    const nuevoUsuario = new User({
      user, email, password: hashPassword
    });

    await nuevoUsuario.save();
    console.log(nuevoUsuario);

    // Redirigir al usuario a la página de inicio de sesión
    res.status(201).send({ status: "ok", message: `Usuario ${nuevoUsuario.user} agregado`, redirect: "/login" });

  } catch (error) {
    console.error("Error durante el registro:", error);
    res.status(500).send({ status: "Error", message: "Error durante el registro" });
  }
}

export const methods = {
  login,
  register
};
