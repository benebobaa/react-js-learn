import FormRegister from "@/components/Fragments/FormRegister";
import AuthLayout from "@/components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register" type="register">
            <FormRegister/>
        </AuthLayout>
    )
}

export default RegisterPage;