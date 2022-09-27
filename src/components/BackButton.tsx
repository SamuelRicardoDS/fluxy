export const BackButton = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <button
      onClick={() => handleClick()}
      className="bg-slate-400 text-white rounded-md p-2"
    >
      Voltar
    </button>
  );
};
