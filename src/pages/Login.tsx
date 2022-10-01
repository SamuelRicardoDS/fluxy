import { BackButton } from "../components/BackButton";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const auth = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (email && password) {
      const isLogged = await auth.signIn(email, password);
      if (isLogged) {
        navigate('/home')
      } else {
        alert("Usuário ou senha inválidos");
      }
    }
    window.location.href = "/home";
  }  

  return (
    <div className="flex flex-col bg-slate-400 w-1/2 h-screen items-center">
      <form className="flex flex-col">
        <label htmlFor="">Usuário</label>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="">Senha</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      </form>
        <button onClick={() => handleSubmit()}>login</button>
      <BackButton />
    </div>
  );
}