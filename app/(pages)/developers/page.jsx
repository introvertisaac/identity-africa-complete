
import Footer from '@/app/components/Footer/Footer'
import Navbar from '@/app/components/Navbar/Navbar'
import DevelopersForm from '@/app/Forms/Developers/DevelopersForm'
import React from 'react'

const Developers = () => {
    return (
        <div className='pt-28 w-full flex flex-col items-center bg-[#FFFBF8]'>
    <div className='text-center max-w-[80%] md:max-w-full mb-8 '>
        <h2 className="text-4xl font-extrabold max-w-6xl font-recoleta">
            We empower you with <span className="text-[#E76C21]">seamless API Integrations </span>for optimal efficiency
        </h2>
    </div>

    <DevelopersForm />
</div>
    )
}

export default Developers