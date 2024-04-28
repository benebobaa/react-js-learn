import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return (
        <form action="">
        <InputForm label="Username" type="text" placeholder="beneboba" name="username"/>
        <InputForm label="Email" type="email" placeholder="bene@menuku.com" name="email"/>
        <InputForm label="Password" type="password" placeholder="********" name="password"/>
        <InputForm label="Confirm Password" type="password" placeholder="********" name="confirm"/>
        <Button classname="bg-slate-800 w-full">Register</Button>
      </form>
    )   
}

export default FormRegister;