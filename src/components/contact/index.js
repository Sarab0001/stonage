'use client'
import {  DownArrow, SliderGif } from '@/assets'
import React, { useState } from 'react'

const Index = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
       message:''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
           
        });
    };

    return (
        <div className='bg-primary md:h-1100'>
            <div className='md:flex  w-11/12 mx-auto   '>
                <div className=''>
                    <div className=''>
                    <a href="mailto:hello@stoneageromeo.com">

                        <h1 className='text-contact font-Roboto xl:text-60  md:text-45 text-[25px] xs:text-28 font-semibold'>hello@stoneageromeo.com </h1>
                    </a>
                    </div>
                    <a href="tel:61420812633"> 

                    <p className='text-2xl font-InstrumentSerif mt-8'>+61 420 812 633</p>
                    </a>
                    <form className='py-24 flex flex-col' onSubmit={handleSubmit}>
                        <label className="py-5  text-md text-contact font-Roboto  font font-medium" htmlFor="name">Name*</label>
                        <input
                            className="px-6 lg:w-full xl:w-1/2 py-4 text-black rounded-md placeholder:text-sm "
                            type='text'
                            placeholder='Full Name*'
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label className="py-5 text-md text-contact font-Roboto font font-medium" htmlFor="email">Email address*</label>
                        <input
                            className="px-6 lg:w-full xl:w-1/2 py-4 text-black rounded lg placeholder:text-sm"
                            type='text'
                            placeholder='example@gmail.com*'
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                         <label className="py-5 text-md text-contact font-Roboto font font-medium" htmlFor="email">Message*</label>
                        <textarea
                            className="px-6 lg:w-full xl:w-1/2 py-4 text-black rounded lg placeholder:text-sm"
                            type='text'
                            placeholder='Your message*'
                            rows={4}
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />

                       

                     
                        <div className='bg-contact lg:w-full xl:w-1/2 py-2 mt-7 rounded-md text-center'>
                            <button className='py-2 text-button' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className=" hidden xl:block   md:absolute  top-0 right-0  ">
                    <div className='xl:w-[462px] lg:w-370 xl:h-1100  lg:h-1000 '>
                        <img className='w-full h-full object-none' src={SliderGif.src} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
