import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ReactRevealText from 'react-reveal-text';



class LandingPage extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }

  render() {
    return(
      <div>
          <Grid  className="landing-grid">
            <Cell col={12}>
              <div style={{height:'436px'}}>

              </div>
              {/* <img
                src="https://purepng.com/public/uploads/large/fortnite-new-galaxy-skin-gm0.png"
                alt = "fortnite"
                className = "fortnite-img"/> */}

              <div className= "banner-text">
                <div style={{ textAlign: 'center' }}>
                    <h1>
                        <ReactRevealText style={{textShadow: '2px 2px 4px #000000'}} show={this.state.show}>
                            You Made it !
                        </ReactRevealText>
                    </h1>
                </div>

                    <p> HTML/CSS| React | JavaScript | NodeJS | Express | MySQL | Java </p>
                      <div className="social-links">
                          <a href = "http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-twitter-square" aria-hidden="true"></i>
                          </a>
                          <a href = "https://github.com/omar212" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true"></i>
                          </a>
                          <a href = "http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook-square" aria-hidden="true"/>
                          </a>
                          <a href = "https://www.linkedin.com/in/omar-elnagdy-350b4116a" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                          </a>
                      </div>
                </div>
              </Cell>
          </Grid>
      </div>
    );
  }
}

export default LandingPage;
