import { Label, FileInput, TextInput, Button } from "flowbite-react";


const Register = () => {
   
   
    return (
        <>
            <div className="w-[100%] flex flex-col items-center py-12">
                <h1 className="text-3xl font-bold mb-4">Register</h1>
                </div>
                <form className="w-[100%] flex flex-col items-center py-12" >
                    {/* upload file - avatar */}
                    <div className="mb-4 w-3/5">
                        <div>
                            <Label htmlFor="avatar" value="Upload Your Avatar" />
                        </div>
                        <FileInput id="avatar" sizing="lg" />
                    </div>

                    {/* First name*/}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="First name" value="Your First name" />
                        </div>
                        <TextInput id="First name" type="text" placeholder="First Name"  />
                    </div>


                     {/* Last name*/}
                     <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="Last name" value="Your Last name" />
                        </div>
                        <TextInput id="Last name" type="text" placeholder="Last Name"  />
                    </div>


                    {/* User name */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="username" value="Your Username (Unique)" />
                        </div>
                        <TextInput id="username" type="text" placeholder="Sakshi123"  />
                    </div>

                    {/* Email */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your Email" />
                        </div>
                        <TextInput id="email" type="email" placeholder="abc@abc.com" required />
                    </div>

                    {/* Password */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your Password" />
                        </div>
                        <TextInput id="password" type="password" placeholder="Must Include (!@#$%^&*())" required  />
                    </div>

                    {/* Confirm Password */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="confirmPassword" value="Your Confirm Password" />
                        </div>
                        <TextInput id="confirmPassword" type="password" placeholder="Must Be same as upper" required  />
                    </div>

                    {/* Submit Button */}
                    <div className="w-3/5">
                    <Button  gradientDuoTone="purpleToPink" type="submit" >
                     Register
                       </Button>
                    </div>
                </form>
            
        </>
    );
};

export { Register };