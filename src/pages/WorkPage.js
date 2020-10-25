// Lib import
import React from 'react';
// Custom import
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

function WorkPage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Portfolio />
        </div>
    );

}
export default WorkPage;