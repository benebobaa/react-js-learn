import FormLogin from "@/components/Fragments/FormLogin";
import AuthLayout from "@/components/Layouts/AuthLayout";
import { Link } from "react-router-dom";


const LoginPage = () => {
    return (
        <AuthLayout title="Login" description="Welcome, Login first please.">
            <FormLogin/>
            <p className="text-sm mt-4 text-center">Don't have an account?{" "}
                <Link to="/register" className="font-bold text-slate-700">Register</Link>
            </p>
        </AuthLayout>
    )
}

export default LoginPage;