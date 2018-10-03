import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Education extends Component {
  render(){
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <p style={{fontSize:'20px'}}>{this.props.startYear}-{this.props.endYear}</p>
          </Cell>

          <Cell col={8}>
            <h4 style={{marginTop: '8px'}}>{this.props.schoolName}</h4>
            <h5 style={{marginTop: '6px'}}>{this.props.schoolPlace}</h5>
            <p>Major: {this.props.schoolMajor} Minor: {this.props.schoolMinor}</p>
        </Cell>
        </Grid>

      </div>
    );
  }
}

export default Education;
