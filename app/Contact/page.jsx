import React from 'react'
import ContactInfo from '@/components/ContactInfo';
import WorkTogether from '@/components/WorkTogether';

const page = () => {
  return (
    <div className='container mx-auto min-h-[85vh] h-[85vh] max-h-[100vh] flex justify-center items-center lg:order-none order-1'>
        <div className='p-3 gap-y-16 w-full h-full flex flex-col lg:flex-row lg:justify-between lg:items-stretch items-center'>
            <WorkTogether/>
            <ContactInfo/>
        </div>
    </div>
  )
}

export default page