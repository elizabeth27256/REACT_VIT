import { useState } from "react";
import { auth } from "../configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Se Inicio sesion correctamente");
    } catch (err) {
      alert("Error al iniciar sesion");
    }
  };
   return (
      <form onSubmit={login}>
        <h2>Iniciar Sesion</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <button type="submit">Ingresar</button>
      </form>
    );
}

export default Login;