import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';


class App extends Component {
  render() {
    return (
        <div style={{ backgroundImage: "url(./images/Hollywood.jpg)", height: '300px'}}>
          <Layout fixedHeader>
            <Header className="header-color" title={<Link style={{textDecoration: 'none',color:'white'}} to ="/"> My Portfolio</Link>} scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/testTryProject">Projects</Link>
                    {/* <Link to="/gotgames">Got Games on Your Phone ?</Link> */}
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
              </Header>
              <Drawer title="Title" style={{textDecoration: 'none',color:'white'}}>
                <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/Something Cool">Want to see something cool?</Link>
                </Navigation>
              </Drawer>
              <Content>
                <div className = "page-content">
                <Main />
                </div>
              </Content>
          </Layout>
        </div>

    );
  }
}

export default hot(module)(App);
