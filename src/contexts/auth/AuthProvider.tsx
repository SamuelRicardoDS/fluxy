//utiliza o contexto para liberar o acesso a todas aos dados.
import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

//da o contexto de autenticação, por isso foi importado para main.tsx
export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

const signIn = async (email: string, password: string) => {
  const data = await api.signIn(email, password);
  if (data.user && data.token) {
    setUser(data.user);
    return true;
  }
  return false;
     
}

const signOut = async () => {
  await api.logOut()
  setUser(null)
}

  return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
