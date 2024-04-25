import { CollabImg, rightArrow } from '@/assets'
import React from 'react'

const Collaborator = () => {
    return (
        <div className='w-11/12 mx-auto py-8'>
        <div className=' flex justify-between '>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <p>AI Collaborative Campaign</p>
                    <p>Nike</p>
                </div>
                <div>
                    <p className='text-65 leading-76'>Enhancing creative concepts through AI</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div>Project Details</div>
                    <div>
                        <img src={rightArrow.src} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-[745px] '>
                <img className='' src={CollabImg.src} alt="" />
            </div>

        </div>
        </div>
    )
}

export default Collaborator
