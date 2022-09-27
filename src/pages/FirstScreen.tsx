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
      <button onClick={() => handleClickLogin()} className="">login</button>
      <button onClick={() => handleClickRegister()} className="">register</button>
    </div>
  );
}