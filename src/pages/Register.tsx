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
        <div> 
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div>
                    <label htmlFor="">nome</label>
                    <input id="nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label id="sobrenome" htmlFor="">sobrenome</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <label id="email" htmlFor="">email</label>
                <input type="email" value={email} onChange={(e => setEmail(e.target.value))}/>
                <label id="senha" htmlFor="">password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">cadastrar</button>
            </form>
            <BackButton />
        </div>
    )
};