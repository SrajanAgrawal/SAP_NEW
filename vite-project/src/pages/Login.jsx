import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Login = () =>

{
  return (
    <form className="w-[100%] flex flex-col items-center py-12">
      <div className="w-3/5 mb-4">
      <div className="mb-2 block">
          <Label htmlFor="Username" value="Username" />
        </div>
        <TextInput id="Username" type="text" placeholder="Usernsmr" required />
      </div>


        
        <div className="w-3/5 mb-4">
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>

      
      <div className="w-3/5 mb-4">
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2 w-3/5 mb-4">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>

      <div className="">
     <Button  gradientDuoTone="purpleToPink" type="submit" >
     Log In
    </Button>
    </div>
       <div className="text-xl" >
                    Don't have an account? <a href="/register" className="text-blue-500">Register Here</a>
                </div>
    </form>
  );
}


export {Login};