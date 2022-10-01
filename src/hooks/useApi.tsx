import axios from "axios";

  const api = axios.create({
    baseURL: "http://localhost:5000",
  });

//requisições para o backend
export const useApi = () => ({

    validateToken: async (token: string) => {
        const response = await api.post("/auth/validate-token", { token });
        return response.data;
    },

    signIn: async (email: string, password: string) => {

      return {
        user: { id: 1, name: "jorge", email: "jorge@jorge" },
        token: "123456"
      }
        const response = await api.post("/signin", { email, password });
        return response.data;   
    },

    logOut: async () => {
        const response = await api.post("/logout");
        return response.data;
    }
})