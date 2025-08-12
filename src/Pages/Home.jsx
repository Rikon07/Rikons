import React from 'react';
import Menu from '../Components/Hero/Menu';
import Skills from '../Components/Skills';

const Home = () => {
    return (
        <>
            <div className='min-h-[150vh]'>
                <Menu />
                <Skills />
            </div>
        </>
        
    );
};

export default Home;