import React from 'react';
import Menu from '../Components/Hero/Menu';
import Skills from '../Components/Skills';
import About from '../Components/About';
import Projects from '../Components/Projects/Projects';
import Education from '../Components/Education';
import ContactMe from '../Components/Contact';
const Home = () => {
    return (
        <>
            <div className='min-h-[150vh]'>
                <Menu />
                <About />
                <Skills />
                <Projects />
                <Education />
                <ContactMe />
            </div>
        </>
        
    );
};

export default Home;