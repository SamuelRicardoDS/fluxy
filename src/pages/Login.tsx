export const Login = () => {
  return (
    <div className="flex flex-col bg-slate-400 w-1/2 h-screen items-center">
      <form className="flex flex-col">
        <label htmlFor="">Usuário</label>
        <input type="text" />
        <label htmlFor="">Senha</label>
        <input type="password" />
        <button>login</button>
      </form>
    </div>
  );
}