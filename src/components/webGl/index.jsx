import Script from 'next/script'
import React from 'react'

export default function index() {
    return (
        <>
            <div className='w-full relative md:h-[500px] h-[300px]'>
        
                <canvas id="c"  ></canvas>

               

                <Script src="/script.js" strategy="lazyOnload" />
                <Script src="/dat.gui.min.js" strategy="lazyOnload" />
            </div>
        </>
    );
}
