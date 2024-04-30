import { Link } from "react-router-dom";


const AuthLayout = (props) => {
    const {children, title, type} = props;
    return (
      <div className="flex justify-center min-h-screen items-center">
          <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-slate-900">{title}</h1>
          <p className="font-medium text-slate-400 mb-10">
            {type === "login" ? "Welcome back! Please login to your account."
            : "Create an account to get started."} 
          </p>
          {children}
          <Navigation type={type}/>
          </div>
      </div>
    )
}

const Navigation = ({type}) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold text-slate-700">Register</Link>
      </p>
    )
  } else {
    return (
      <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-slate-700">Login</Link>
      </p>
    )
  }
}

export default AuthLayout;