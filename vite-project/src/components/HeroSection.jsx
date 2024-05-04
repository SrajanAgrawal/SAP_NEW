import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";


const HeroSection = () => {
  return (
    <div>
      <div className='min-h-screen'>
        <div className='flex mx-auto md:flex-row md:items-center hero-section '>
          {/* left */}
          <div className=' text-white w-[45%] mx-10' >
            <h1 className='text-2xl font-semibold '> STUDENT AMBASSDOR'S PROGRAM</h1>
            <p className='mt-10 text-lg'> A Student Ambassador Program fosters leadership among students, empowering them
              to represent their school or institution. These ambassadors serve as liaisons
              between students, faculty, and administration, facilitating communication and
              fostering a sense of community. Through various initiatives, they promote school
              spirit, engagement, and involvement in extracurricular activities. </p>
            <div className=" mt-5 flex flex-row ">
              <Button outline gradientDuoTone="purpleToBlue">
                Apply Now
              </Button>

              <Button className="mx-5">
                See Benefits
                <HiOutlineArrowRight className="ml-2 h-5 w-5 " />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
      </div>
    </div>
  )
}

export default HeroSection