import { BackButton } from "../components/BackButton";
import { useState } from "react";

export const Register = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("cadastrando...", { name, lastName, email, password });
    }

    return(
        <div className="bg-neutral-600 p-5 h-screen w-screen"> 
            <form onSubmit={handleSubmit} className="flex flex-col w-1/2">
                <div className="flex">
                    <div className="flex flex-col p-5">
                        <label htmlFor="">nome</label>
                        <input id="nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col p-5">
                        <label id="sobrenome" htmlFor="">sobrenome</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                <div className="p-5 flex flex-col">
                    <label id="email" htmlFor="">email</label>
                    <input type="email" value={email} onChange={(e => setEmail(e.target.value))}/>
                </div>
                <div className="p-5 flex flex-col">
                    <label id="senha" htmlFor="">password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="bg-slate-500">cadastrar</button>
            </form>
            <BackButton />
        </div>
    )
};