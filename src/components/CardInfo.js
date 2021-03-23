import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});
    if(props.title == "GitHub") {
        return(
            <animated.div className="mycard-info" style={style}>
                <p className="mycard-title">{props.title}</p>
                <p className="mycard-sub-title">{props.subTitle}</p>
                <a href={props.link0} target="_blank" rel="noopener noreferrer">Github</a>
                <br></br>
                <a href={props.link1} target="_blank" rel="noopener noreferrer">Resume</a>
            </animated.div>
        );
    } else {
        return(
            <animated.div className="mycard-info" style={style}>
                <p className="mycard-title">{props.title}</p>
                <p className="mycard-sub-title">{props.subTitle}</p>
                <a href={props.link0} target="_blank" rel="noopener noreferrer">Deployed Application</a>
                <br></br>
                <a href={props.link1} target="_blank" rel="noopener noreferrer">Github Repository</a>
            </animated.div>
        );
    }

}
export default CardInfo;