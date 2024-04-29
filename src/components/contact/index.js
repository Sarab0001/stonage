import { ContactImg } from '@/assets'
import React from 'react'

const index = () => {
    return (
        <div className='bg-primary '>
            <div className='md:flex  w-11/12 mx-auto md:px-8  '>
                <div className=''>
                    <div className=''>
                    <h1 className='text-contact font-Roboto xl:text-65 lg:text-[55px] md:text-[45px] text-2xl font-semibold '>hello@stoneageromoeo.xyz</h1>
                    </div>
                    <p className='text-2xl font-InstrumentSerif mt-8'>+61450034</p>
                    <form className='py-24 flex flex-col' action="">
                        <label className="py-2  text-md text-contact font-Roboto  font font-medium" htmlFor="">Name*</label>
                        <input
                            className="px-3 md:w-1/2 py-2 rounded-md text-black border-black/30 placeholder:text-sm text-placeholdecolor "
                            type='text'
                            placeholder='Full Name*'


                        />
                        <label className="py-2  text-md text-contact font-Roboto  font font-medium" htmlFor="">Email adddress*</label>
                        <input
                            className="px-3 md:w-1/2 py-2   text-black  rounded-md border-black/30 placeholder:text-sm  "
                            type='text'
                            placeholder='exampl@gmail.com*'


                        />
                        <textarea className='mt-4 rounded-md px-3 md:w-1/2 ' placeholder='Your message' name="message" id="message" rows="4" cols="50"></textarea>

                        <label
                            className='py-2  text-md text-contact font-Roboto  font font-medium hidden md:block'
                            htmlFor="mySelect">Department*
                        </label>
                        <select id="mySelect" className='md:w-1/2 px-3 py-3 rounded-md text-placeholdecolor hidden md:block'>
                            <option className='' value="">Please select</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <label
                            className='py-2  text-md text-contact font-Roboto  font font-medium hidden md:block'
                            htmlFor="mySelect">Time*
                        </label>
                        <select id="mySelect" className='md:w-1/2 px-3 py-3 rounded-md text-placeholdecolor hidden md:block'>
                            <option className='' value="">4.00 available</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <div className='bg-contact md:w-1/2 py-1 mt-4 rounded-md text-center'>
                            <button className='py-2  text-button '>Submit</button>
                        </div>
                    </form>
                </div>
                <div className=" hidden md:block   md:absolute  top-0 right-0 ">
                    <div className=''>
                        <img className='w-[510px] md:h-[1003px] ' src={ContactImg.src} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
