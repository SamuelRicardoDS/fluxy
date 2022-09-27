import { BackButton } from "../components/BackButton";

export const Register = () => {
    return(
        <div> 
            <form className="flex flex-col">
                <label htmlFor="">nome</label>
                <input type="text" />
                <label htmlFor="">sobrenome</label>
                <input type="text" />
                <label htmlFor="">email</label>
                <input type="email" />
                <label htmlFor="">password</label>
                <input type="password" />
                <button>register</button>
            </form>
            <BackButton />
        </div>
    )
};