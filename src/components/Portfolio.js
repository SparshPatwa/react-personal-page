import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';


import hikefinder from "../assets/images/hike.jpg";
import healthtracker from "../assets/images/health.jpg";
import dory from "../assets/images/dory.jpg";
import githubrepo from "../assets/images/github.jpg";

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dory',
                    subTitle: 'A Q&A application deployed using full-stack technologies ',
                    imgSrc: dory,
                    link0: 'https://dory-polling.herokuapp.com/',
                    link1: 'https://github.com/SparshPatwa/dory',
                    selected: false
                },
                
                {
                    id: 1,
                    title: 'Hike Finder',
                    subTitle: 'A hike planner application deployed using front-end technologies',
                    imgSrc: hikefinder,
                    link0: 'https://jennifermulder.github.io/explore/',
                    link1: 'https://github.com/jennifermulder/explore',
                    selected: false
                },
                
                {
                    id: 2,
                    title: 'Health Tracker',
                    subTitle: 'A health focused application deployed using full-stack technologies ',
                    imgSrc: healthtracker,
                    link0: 'https://health-track-it.herokuapp.com/about',
                    link1: 'https://github.com/SparshPatwa/health-tracker',
                    selected: false
                },

                {
                    id: 3,
                    title: 'GitHub',
                    subTitle: 'My GitHub page with repositories and projects I\'ve worked on',
                    imgSrc: githubrepo,
                    link0: 'https://github.com/SparshPatwa',
                    link1: 'https://bit.ly/sparshpatwa-resume',
                    selected: false
                }
            ]
        }
    }
    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}
export default Portfolio;