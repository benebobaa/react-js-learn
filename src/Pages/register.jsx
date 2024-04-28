import FormRegister from "@/components/Fragments/FormRegister";
import AuthLayout from "@/components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register" description="Hello, lets register your account.">
            <FormRegister/>
            <p className="text-sm mt-4 text-center">Have an account?{" "}
                <Link to="/login" className="font-bold text-slate-700">Login</Link>
            </p>
        </AuthLayout>
    )
}

export default RegisterPage;