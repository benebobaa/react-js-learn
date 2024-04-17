import { Label } from "@radix-ui/react-label"
import { Form } from "react-hook-form"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"


function App() {
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className='w-full max-w-xs'>
        <h1 className='text-3xl font-bold text-slate-900'>Login</h1>
        <p className='font-medium text-slate-200 mb-6'>
          Welcome, Please login first.
        </p>
        <form action="" >
          <div className="mb-6">
            <Label htmlFor="email" className="block mb-2">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="mb-6">
            <Label htmlFor="password" className="block mb-2">Password</Label>
            <Input type="password" id="password" placeholder="*****" />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </div>
    </div>
  )
}

export default App
