import React from 'react'

const Header = () => {
    return (
        <>
            <div className='flex cursor-pointer'>
                <div className=' ml-30 mt-4 h-[70px] w-[80%] border-2 rounded-4xl flex items-center gap-10  '>
                    <div className='w-[20%]'>
                    <img src="src\assets\logo.png" className='h-[100px] w-[100px]' alt="" />
                    </div>
                    <div className='flex w-[45%] gap-10'>
                    <div>Home</div>
                    <div>Pages</div>
                    <div>Services</div>
                    <div>Case Studies</div>
                    <div>Blog</div>
                    </div>
                    <div className='w-[25%] flex gap-10'>
                    <div>852452622</div>
                    <div>Schedule an Appointment </div>
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default Header