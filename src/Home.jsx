import React from 'react';
import Header from './Header.jsx';
import Slider from './Slider.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import Box from './Box.jsx'

function Home() {
    return (
        <>
            <Header />
            <Slider />
            <Content />
            <Box />
            <Footer />
        </>
    );
}

export default Home;
