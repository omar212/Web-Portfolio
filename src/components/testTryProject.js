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
                                            This project was more a self-achieveing assignment that I later
                                            presented to a middle school student that I was tutoring. I
                                            demonstrated the implementation of how it works and the
                                            understanding of each concept using tKinter and Turtle.
                                        <div className = "flexRow">
                                            <Button variant = "contained" size = "large" color = "primary" style = {{ padding: "5px 5px", margin: "5px 5px", fontSize: "10px"}} href="https://github.com/omar212/My-Web-Portfolio" target = "_blank" rel = "noopener noreferrer">
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
                                  Paper to me is so 2000; imagine having a resume that not only is interactive, but also aesthecically pleasing! This is
                                  what inspired me to start developing a web portfolio and the expierence has really enhanced what I know about web development.
                                  Creating my web portfolio solidified that web development is what I want to pursue with my career.
                                <div className = "flexRow">
                                    <Button variant = "contained" size = "large" color = "primary" style={{ padding: "5px 5px", margin: "5px 5px", marginTop: "5px", fontSize: "10px"}} href = "../images/MyWebPortfolio.gif" target = "_blank" rel = "noopener noreferrer">
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
                                            This project was one of my first projects in Swift.
                                            I used to be so obsessed with the game Flappy Bird that I just
                                            felt as a computer programmer, why can't I play my own game. So I built a
                                            semi-functional app on xcode that simulated similar elements such as the Flappy Bird.
                                            Which took me quick a while. I hope to one day deploy an orginial idea but for an app,
                                            but for now i prefer to learn the concepts.
                                            <div className = "flexRow">
                                            <Button variant = "contained" size = "large" color = "primary" style = {{ padding: "5px 5px", margin: "5px 5px", fontSize: "10px" }} href = "https://github.com/omar212" target = "_blank" rel = "noopener noreferrer">
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
