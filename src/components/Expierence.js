import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Expierence extends Component {
  render() {
    return(
      <Grid>
        <Cell  col={4}>
          <p style={{fontSize:'20px'}}>{this.props.startYear}-{this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop: '8px'}}>{this.props.jobName}</h4>
          <h4>{this.props.jobLocation}</h4>
          <h5>{this.props.jobRole}</h5>
          <ul>
              <li>{this.props.JobDescription1}</li>
              <li>{this.props.JobDescription2}</li>
          </ul>
        </Cell>
      </Grid>
    )
  }
}

export default Expierence;
