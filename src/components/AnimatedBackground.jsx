import React from 'react'

const AnimatedBackground = () => {
    return (
        <div className='fixed inset-0 z-0 overflow-hidden pointer-events-none'>
        <div className='absolute w-64 h-64 rounded-full top-1/4 left-1/4 md:w-80 md:h-80 bg-gradient-to-r from-emerald-400 to-yellow-400 opacity-20 filter blur-3xl animate-blob'></div>

        <div className='absolute rounded-full top-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-cyan-400 to-yellow-400 opacity-15 filter blur-3xl animate-blob animation-delay-4000'></div>

        <div className='absolute w-48 h-48 rounded-full bottom-1/4 left-1/2 md:w-64 md:h-64 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-10 filter blur-3xl animate-blob animation-delay-8000'></div>
    </div>

    )
}

export default AnimatedBackground