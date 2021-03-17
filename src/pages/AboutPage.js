import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Content>
            <p>Hi, my name is Sparsh Patwa and i'm a hardware silicon engineer at Alphabet working on the bleeding edge of memory + compute for ambient computing and machine learning acceleration applications with a love for hardware-software co-design.</p>
            <p>I have a passion for fullstack software development and hope to look to create unique front end user experiences with a robust + scalable backend infrastructure.</p>
            </Content>
        </div>
    );
}
export default AboutPage;