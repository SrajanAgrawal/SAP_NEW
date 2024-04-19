import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
//import { useNavigate} from "react-router-dom"
//import { useDispath} from "react-redux"

const Login = () =>

{
  //const dispatch = useDispath();

  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginUser = async (e) => {
    e.preventDefault()
    if (email === "" || password === "" || username === "") {
      setError("Please fill all fields")
     }

     else {
      const user = {
        username : username,
        email : email,
        password : password
      }

      setError("Loading....")

     }
  }

  return (
    <form className="w-[100%] flex flex-col items-center py-12">
      <div className="w-3/5 mb-4">
      <div className="mb-2 block">
          <Label htmlFor="Username" value="Username" />
        </div>
        <TextInput id="Username" type="text" placeholder="Usernsmr" required onChange = {(e) => {
          setUsername(e.target.value) } } />
      </div>


        
        <div className="w-3/5 mb-4">
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required onChange = {(e) => {
          setEmail(e.target.value) } }  />
      </div>

      
      <div className="w-3/5 mb-4">
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required  onChange = {(e) => {
          setPassword(e.target.value) } } />
      </div>
      <div className="flex items-center gap-2 w-3/5 mb-4">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>

      <div className="">
     <Button  gradientDuoTone="purpleToPink" type="submit"  onClick = {handleLoginUser}>
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