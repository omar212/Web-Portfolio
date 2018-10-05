import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Expierence from './Expierence';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
              <div style={{textAlign:'center'}}>
                <img
                  src={require("../images/linkedinPic.png")}
                  alt="profile"
                  style={{paddingTop:'1em', height:'400px', borderRadius: '50%'}} />
              </div>
              <h2 style={{paddingTop:'1em', textAlign:'center',fontFamily: 'Gravitas One, cursive'}}> Omar Elnagdy </h2>
              <h4 style={{color: 'black'}}>Web Developer</h4>
              <hr style={{borderTop: '5px solid #833fb2',width:'50%'}} />
              <p></p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
              <h5>Address</h5>
            <h5>122 Hacker Place</h5>
              <h5>Phone</h5>
            <h5>(347) 429 2283</h5>
              <h5>Web</h5>
            <h5>www.omarelnagdy.com</h5>
              <h5>Email</h5>
            <h5>omarelnagdy16@gmail.com</h5>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2 style={{fontFamily: 'Gravitas One, cursive'}}>Education</h2>

          <Education
            startYear={"Fall 2015"}
            endYear={"Fall 2019"}
            schoolName={"City College"}
            schoolPlace={"Grove School of Engineering"}
            schoolMajor={"Computer Science"}
            schoolMinor={"Mathematics"}/>

          <hr style={{borderTop: "3px solid silver"}}/>

        <h2 style={{fontFamily: 'Gravitas One, cursive'}}>Experience</h2>
          <Expierence
            startYear={"June 2018"}
            endYear={"Present"}
            jobName={"LAUNCH Math and Science Internship"}
            jobLocation={"New York,NY"}
            jobRole={"Team Coding/Engineering Leader"}
            JobDescription1={"Teach mechanical, biomedical, and architectural engineering to students and incorporate learned material in building hands on projects that require understanding the importance of stability and precision."}
            JobDescription2={"Teach children about algorithms and coding languages, such as Scratch and Python. Build projects to supplement curriculum, such as mBots, using Scratch/Arduino to code actions for the robot."}
            schoolMinor={"Mathematics"}/>

            <Expierence
              startYear={"June 2018"}
              endYear={"Present"}
              jobName={"Department of Education"}
              jobLocation={"New York,NY"}
              jobRole={"Substitute TA at John W. Lavelle Charter School "}
              JobDescription1={" Provide one on one tutoring on all subjects to students."}
              schoolMinor={"Mathematics"}/>

            <hr style={{borderTop: "3px solid silver"}}/>

          <h2 style={{fontFamily: 'Gravitas One, cursive'}}> Skills</h2>
          <Skills
            skill={"JavaScript"}
            progress={90}
          />
          <Skills
            skill={"Java"}
            progress={50}
          />
          <Skills
            skill={"Python"}
            progress={50}
          />
          <Skills
            skill={"React"}
            progress={75}
          />
          <Skills
            skill={"MySQL"}
            progress={60}
          />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
