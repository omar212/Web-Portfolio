import React, { Component } from 'react';
import { List, ListItem, ListItemContent, Grid, Cell } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2> Omar Elnagdy</h2>
            <img
              src={require('../images/BitMoji.png')}
              alt="BitMoji"
              className="contactAvator"/>
            <p style={{lineHeight: '1.6', fontSize:'30px',margin: 'auto', paddingTop:'20px',paddingBottom: '20px', fontFamily: 'Concert One, cursive', textAlign:'center',}}>
              I'm available at all times, so please don't hesitate to contact me for any services, internships, jobs,
              or even just a hello !
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'K2D'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/> 347-429-2283
                </ListItemContent>
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'K2D'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/> omarelnagdy16@gmail.com
                </ListItemContent>
              </ListItem>
            </List>

            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
// src=  {require("../images/footerTwitter.png")}
