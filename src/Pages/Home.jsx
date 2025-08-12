import React from 'react';
import Menu from '../Components/Hero/Menu';
import Skills from '../Components/Skills';
import About from '../Components/About';
import Projects from '../Components/Projects/Projects';
const Home = () => {
    return (
        <>
            <div className='min-h-[150vh]'>
                <Menu />
                <About />
                <Skills />
                <Projects />
            </div>
        </>
        
    );
};

export default Home;