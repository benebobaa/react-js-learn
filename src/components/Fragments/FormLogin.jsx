import Button from "../Elements/Button";
import InputForm from "../Elements/Input";


const FormLogin = () => {

    const handleLogin = (event) => {
      event.preventDefault();
      console.log(event.target.email.value);
      console.log("Hello Login");
      localStorage.setItem('email', event.target.email.value);
      window.location.href = "/product";
    }   

    return (
        <form onSubmit={handleLogin}>
          <InputForm label="Email" type="email" placeholder="bene@menuku.com" name="email"/>
          <InputForm label="Password" type="password" placeholder="********" name="password"/>
          <Button classname="bg-slate-800 w-full" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin;