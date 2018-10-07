import React, { Component } from 'react';
import { Typography, Grid, Paper, Button } from '@material-ui/core';
import ReactRevealText from 'react-reveal-text';
import './testTryProject.css';
import './aboutme.css';


class testTryProject extends Component {
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
        return (
            <div className = "flexCenter">
              <div className="bgStyles">
                <div className="textStyles">
                    <ReactRevealText show={this.state.show} text="PROJECTS" />
                </div>
              </div>
                    <Grid container spacing = {8} className = "flexRow" style = {{ marginTop: "15px", width: "100%" }}>
                        <Grid item xs = "auto" sm = "auto" md = "auto" lg = "auto" xl = "auto">
                            <Paper className = "projects">
                                    <img id = "projectimg" src = {require("../images/spaceinvaders.gif")} alt = "Space spaceinvaders" />
                                    <Typography className = "flexRow " variant = "display1" style = {{ color: "black", padding: "10px 0" }}>
                                        Space Invaders
                                    </Typography>
                                    <div className = "overlay flexCenter">
                                        <div className = "text">
                                            This project was more of a self-achieveing assignment that I later
                                            presented to a middle school student that I was tutoring. I
                                            demonstrated the implementation of how it works and the
                                            understanding of each concept using tKinter and Turtle.
                                        <div className = "flexRow">
                                            <Button variant = "contained" size = "large" color = "primary" style = {{ padding: "5px 5px", margin: "5px 5px", fontSize: "10px"}} href="https://github.com/omar212/Space-Invaders" target = "_blank" rel = "noopener noreferrer">
                                            GitHub
                                            </Button>
                                        </div>
                                        </div>
                                    </div>
                            </Paper>
                        </Grid>
                        <Grid item xs = "auto" sm = "auto" md = "auto" lg = "auto" xl = "auto">
                                <Paper className="projects">
                                        <img id = "projectimg" src = {require("../images/CunyFirstProj.jpg")} alt = "cuny" />
                                        <Typography className = "flexRow" variant = "display1" style = {{ color: "black", padding: "10px 0" }}>
                                        CUNYfirst-RateMyProfessor Hybrid
                                        </Typography>
                                        <div className = "overlay flexCenter">
                                        <div className = "text">
                                          Implemented a combination of CunyFirst and RateMyProfessor using MySQL to create the database of factual information with Triggers & Procedures, NodeJS and HTML/CSS, to assemble the web page aspect.
                                            Designed functionalities that can take in an input and search for that specific class and allow the user to add the class to an array, called the shopping cart. Each class has a summary of all the specifics of the course such as PreReqs, ratings, difficulty, professors, etc.
                                            <div className = "flexRow">
                                            <Button variant = "contained" size = "large" color = "primary" style = {{ padding: "5px 5px", margin: "5px 5px", fontSize: "10px" }} href = "https://github.com/omar212/CUNYFirst-RateMyProfessors-Hybrid" target = "_blank" rel = "noopener noreferrer">
                                                GitHub
                                            </Button>
                                            </div>
                                        </div>
                                        </div>
                                </Paper>
                        </Grid>
                        <Grid item xs = "auto" sm = "auto" md = "auto" lg = "auto" xl = "auto">
                            <Paper className="projects">
                                <img id = "projectimg" src = {require("../images/MyWebPortfolio.gif")} alt = "web" />
                                <Typography className = "flexRow " variant = "display1" style = {{ color: "black", padding: "10px 0" }}>
                                Web Portfolio
                                </Typography>
                                <div className = "overlay flexCenter">
                                <div className = "text">

                                            Paper is so 2000; imagine having a resume that not only is interactive, but also aesthecically pleasing! This is
                                            what inspired me to start developing a web portfolio and the expeirence has really enhanced what I know about web development.
                                            Creating my web portfolio solidified that web development is what I want to pursue with my career.

                                  <div className = "flexRow">
                                    <Button variant = "contained" size = "large" color = "primary" style={{ padding: "5px 5px", margin: "5px 5px", marginTop: "5px", fontSize: "10px"}} href = "https://github.com/omar212/Web-Portfolio" target = "_blank" rel = "noopener noreferrer">
                                    GitHub
                                    </Button>
                                </div>
                                </div>
                              </div>
                            </Paper>
                        </Grid>
                        <Grid item xs = "auto" sm = "auto" md = "auto" lg = "auto" xl = "auto">
                                <Paper className="projects">
                                        <img id = "projectimg" src = {require("../images/DrizzyBird.gif")} alt = "drizzy" />
                                        <Typography className = "flexRow" variant = "display1" style = {{ color: "black", padding: "10px 0" }}>
                                        Drizzy Bird App
                                        </Typography>
                                        <div className = "overlay flexCenter">
                                        <div className = "text">

                                            "Drizzy Bird" was one of my first projects on swift. I was obessed with the game
                                            "Flappy Bird" and as a computer programmer, I wondered why not just make my own game to play? So, I built a semi-functional app
                                             on Xcode that simulated similar elements that were in "Flappy Bird" to create my very own "Drizzy Bird" app.

                                            <div className = "flexRow">
                                            <Button variant = "contained" size = "large" color = "primary" style = {{ padding: "5px 5px", margin: "5px 5px", fontSize: "10px" }} href = "https://github.com/omar212/" target = "_blank" rel = "noopener noreferrer">
                                                GitHub
                                            </Button>
                                            </div>
                                        </div>
                                        </div>
                                </Paper>
                        </Grid>
                    </Grid>
          </div>
        )
    }
}
export default testTryProject;
