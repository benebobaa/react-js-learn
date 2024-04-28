

const AuthLayout = (props) => {
    const {children, title, description} = props;
    return (
      <div className="flex justify-center min-h-screen items-center">
          <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-slate-900">{title}</h1>
          <p className="font-medium text-slate-400 mb-10">{description}</p>
          {children}
          </div>
      </div>
    )
}

export default AuthLayout;