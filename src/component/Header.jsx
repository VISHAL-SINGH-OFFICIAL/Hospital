import React from 'react'

const Header = () => {
    return (
        <>
            <div className=' mx-auto mt-[30px] h-[100px] w-[80%]  rounded-4xl flex items-center gap-10 fixed bg-white '>
                <img src="src\assets\logo.png" className='h-[100px] w-[100px]' alt="" />
                <div>Home</div>
                <div>Pages</div>
                <div>Services</div>
                <div>Case Studies</div>
                <div>Blog</div>
            </div>
        </>
    )
}

export default Header;