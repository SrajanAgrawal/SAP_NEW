import React from 'react'

const Home = () => {
    return (
        <div>
        <div className='min-h-screen mt-20'>
        <div className='flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
          {/* left */}
          <div className='flex-1'>
            <h1 className='text-xl self-center font-semibold '> STUDENT AMBASSDOR's PROGRAM</h1>
            <p className='mt-10 '> A Student Ambassador Program fosters leadership among students, empowering them
                 to represent their school or institution. These ambassadors serve as liaisons
                 between students, faculty, and administration, facilitating communication and 
                 fostering a sense of community. Through various initiatives, they promote school
                 spirit, engagement, and involvement in extracurricular activities. They often assist 
                 with campus tours, orientation programs, and recruitment efforts, showcasing the
                  institution's culture and values. Additionally, they provide support to new students,
                 helping them navigate academic and social aspects of campus life. Ultimately, the Student 
                 Ambassador Program cultivates a vibrant and inclusive environment, enriching the overall
                  student experience.</p>
          </div>
          {/* right */}
  
          <div className='flex-1'>

            <img src="/hero sec.png"></img>

        
           </div>
        </div>
      </div>


    <div className=''>
   
    </div>


</div>
        )
}

export default Home;