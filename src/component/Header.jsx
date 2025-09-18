import React from 'react'

const Header = () => {
    return (
        <>
            <div>
                <div className=' ml-20 h-[100px] w-[80%] border-2 rounded-4xl flex items-center gap-10  '>
                    <img src="src\assets\logo.png" className='h-[100px] w-[100px]' alt="" />
                    <div>Home</div>
                    <div>Pages</div>
                    <div>Services</div>
                    <div>Case Studies</div>
                    <div>Blog</div>
                </div>
            </div>
        </>
    )
}

export default Header