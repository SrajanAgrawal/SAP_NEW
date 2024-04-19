import { Button, Navbar } from "flowbite-react";

const Header = ()=>
 {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="">
        <img src="/icons8-student-30.png" className="mr-3 h-6 sm:h-9" alt="" />
     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CareerCorps Student Ambassdor</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <Button gradientDuoTone="purpleToPink">Log IN</Button>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
 export {Header}