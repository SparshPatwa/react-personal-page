import React from 'react';
import CardInfo from '../components/CardInfo';

function Card(props) {

    return(
        <div className="d-inline-block mycard" onClick={(e) => props.click(props.item)}>
            <img className="mycard-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link0={props.item.link0} link1={props.item.link1} /> }
        </div>
    );

}
export default Card;