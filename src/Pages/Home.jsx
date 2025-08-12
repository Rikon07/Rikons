import React from 'react';
import Menu from '../Components/Hero/Menu';
import Skills from '../Components/Skills';
import About from '../Components/About';
const Home = () => {
    return (
        <>
            <div className='min-h-[150vh]'>
                <Menu />
                <About />
                <Skills />
            </div>
        </>
        
    );
};

export default Home;