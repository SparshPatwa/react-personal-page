import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Content>
            <p>Hi, my name is Sparsh Patwa. I'm currently a hardware silicon engineer at Alphabet working on the bleeding edge of memory and compute for Ambient Computing and Machine Learning Acceleration with a love for hardware-software co-design.</p>
            <p>I have recently ventured into the world of fullstack software development and hope to bring the same passion and innovating thinking that I do to hardware silicon engineering.</p>
            </Content>
        </div>
    );
}
export default AboutPage;