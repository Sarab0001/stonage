'use client'
import { ContactImg, DownArrow, SliderGif } from '@/assets'
import React, { useState } from 'react'

const Index = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        time: ''
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
            department: '',
            time: ''
        });
    };

    return (
        <div className='bg-primary md:h-[1100px]'>
            <div className='md:flex  w-11/12 mx-auto   '>
                <div className=''>
                    <div className=''>
                        <h1 className='text-contact font-Roboto xl:text-[60px] lg:text-[45px] md:text-[45px] text-2xl font-semibold'>hello@stoneageromoeo.xyz</h1>
                    </div>
                    <p className='text-2xl font-InstrumentSerif mt-8'>+61450034</p>
                    <form className='py-24 flex flex-col' onSubmit={handleSubmit}>
                        <label className="py-5  text-md text-contact font-Roboto  font font-medium" htmlFor="name">Name*</label>
                        <input
                            className="px-6 lg:w-full xl:w-1/2 py-4 rounded-md placeholder:text-sm text-placeholdecolor"
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

                        <label className='py-5 text-md text-contact font-Roboto font font-medium' htmlFor="department">Department*</label>
                        <select id="department" name="department" className='lg:w-full xl:w-1/2 px-6 py-4 rounded-md text-placeholdecolor appearance-none relative' value={formData.department} onChange={handleChange}>
                            <option value="">Please select</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <img className='absolute top-[838px] left-[320px] xl:top-[694px] lg:top-[694px] lg:left-[290px] xl:left-[420px] md:top-[929px] md:left-[570px] z-50 w-8 h-8' src={DownArrow.src} alt="" />

                        <label className='py-5 text-md text-contact font-Roboto font font-medium' htmlFor="time">Time*</label>
                        <select id="time" name="time" className='lg:w-full xl:w-1/2 px-6 py-4 rounded-md text-placeholdecolor appearance-none relative' value={formData.time} onChange={handleChange}>
                            <option value="">4.00 available</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <img className='absolute top-[958px] left-[320px] xl:top-[812px]  xl:left-[420px] md:top-[809px] md:left-[570px] lg:top-[817px] lg:left-[290px] w-8 h-8' src={DownArrow.src} alt="" />
                        <div className='bg-contact lg:w-full xl:w-1/2 py-2 mt-7 rounded-md text-center'>
                            <button className='py-2 text-button' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className=" hidden xl:block   md:absolute  top-0 right-0  ">
                    <div className=''>
                        <img className='xl:w-[570px] lg:w-[370px] xl:h-[1100px]  lg:h-[1000px]' src={SliderGif.src} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
