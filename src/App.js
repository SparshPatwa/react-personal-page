import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';

import Footer from "./components/Footer.js";
import WorkPage from "./pages/WorkPage.js";
import AboutPage from "./pages/AboutPage.js";
// import ContactPage from "./pages/ContactPage.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("My props: "+props);
    this.state = {
      title: 'Sparsh Patwa',
      headerLink: [
        { title: 'Work', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      work: {
        title: 'Hello and Welcome to my Page',
        subTitle: 'Here are some of my full-stack projects'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Title',
        subTitle: 'SubTitle',
        text: 'Text'
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          {/* Navbar Setup */}
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>🆂🅿🅰🆁🆂🅷 🅿🅰🆃🆆🅰</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Work</Link>
                <Link className="nav-link" to="/about">About</Link>
                {/* <Link className="nav-link" to="/contact">Contact</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* Navbar Link Router Setup */}
          {/* Work Page Setup */}
          <Route path="/" exact render={() => <WorkPage title={this.state.work.title} subTitle={this.state.work.subTitle} text={this.state.work.text} />} />
          {/* About Page Setup */}
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          {/* Contact Page Setup */}
          {/* <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} /> */}
          {/* Footer Setup */}
          <Footer />

        </Container>
      </Router>
   );
  }
}

export default App;
