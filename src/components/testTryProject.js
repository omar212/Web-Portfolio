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
                                        This project was more a self achieving assignment that I later on presented and tutored to a child in middle school. As well as taught how the implementation of how it works and the understanding of each concept using tKinter and Turtle.
                                        <div className = "flexRow">
                                            <Button variant = "contained" size = "large" color = "primary" style = {{ padding: "5px 5px", margin: "5px 5px", fontSize: "10px"}} href="" target = "_blank" rel = "noopener noreferrer">
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
                                            This project was a team project. Our goal was to help improve the course enrollment process within CUNY. We limited the total number of courses to just Computer Science courses available at my college to simplify things. After searching for a course, the user can choose which section of the course they want. Selecting a section will redirect the user to the section information page. Moreover, the user will then be able to see the rating of the professor. If the user chooses to enroll in that section, the total seat number will decrease.
                                            <div className = "flexRow">
                                            <Button variant = "contained" size = "large" color = "primary" style = {{ padding: "5px 5px", margin: "5px 5px", fontSize: "10px" }} href = "https://github.com/buenoluis007/CUNYFirst-RateMyProfessors-Hybrid" target = "_blank" rel = "noopener noreferrer">
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
                                  Paper to me is so 2000, imagine having a website that you could interact with at your choosing
                                  and actually have an aesthically good looking resume to look at other than that basic black and white.
                                  This is what inspired me to start developing a web portfolio. Which actually gave a small grasp of what
                                  web development could be like and that is nothing than amazing and truly what I want to do in my future.
                                <div className = "flexRow">
                                    <Button variant = "contained" size = "large" color = "primary" style={{ padding: "5px 5px", margin: "5px 5px", marginTop: "5px", fontSize: "10px"}} href = "" target = "_blank" rel = "noopener noreferrer">
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
