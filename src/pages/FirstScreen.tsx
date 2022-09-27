import { redirect } from "react-router-dom";

export const FirstScreen = () => {

  const handleClickLogin = () => {
    window.location.href = "/login";
  }

  const handleClickRegister = () => {
    window.location.href = "/cadastro";
  }

  return (
    <div className="flex flex-col">
      <button onClick={() => handleClickLogin()}>login</button>
      <button onClick={() => handleClickRegister()}>register</button>
    </div>
  );
}