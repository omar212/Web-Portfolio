import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardActions, CardText, Button, CardTitle, CardMenu, IconButton } from 'react-mdl';
// import { Typography, Paper, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import './projects';

class projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5}
          style={{
            minWidth: '450',
            margin: 'auto 45px',
            top: '0',
            height: '100%'}}>
          <CardTitle style={{color: 'white',height:'176px',
            background: 'url(https://cdn-images-1.medium.com/max/900/1*EntHChgUyirgbZ9A3zTxkA.png) center / cover'}}>
            ReactProject #1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam dolor, malesuada at arcu ultrices, maximus laoreet lectus. Nam sapien est, auctor id iaculis et, ornare vitae ipsum. Aliquam pharetra nisl massa, rutrum consectetur massa auctor et. Maecenas lectus enim, mollis eget rutrum id, faucibus id arcu. Suspendisse vulputate risus elit, in sagittis nisl tristique sit amet. Vivamus porta vel urna sed malesuada. Sed vehicula nisl vitae turpis faucibus egestas.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5}
          style={{
            minWidth: '450',
            margin: 'auto 45px',
            top: '0',
            height: '100%'}}>
          <CardTitle style={{color: 'white',height:'176px',
            background: 'url(https://cdn-images-1.medium.com/max/900/1*EntHChgUyirgbZ9A3zTxkA.png) center / cover'}}>
            ReactProject #1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam dolor, malesuada at arcu ultrices, maximus laoreet lectus. Nam sapien est, auctor id iaculis et, ornare vitae ipsum. Aliquam pharetra nisl massa, rutrum consectetur massa auctor et. Maecenas lectus enim, mollis eget rutrum id, faucibus id arcu. Suspendisse vulputate risus elit, in sagittis nisl tristique sit amet. Vivamus porta vel urna sed malesuada. Sed vehicula nisl vitae turpis faucibus egestas.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
        </Card>

         {/* Project 3 */}
         <Card shadow={5}
          style={{
            minWidth: '450',
            margin: 'auto 45px',
            top: '0',
            height: '100%'}}>
          <CardTitle style={{color: 'white',height:'176px',
            background: 'url(https://cdn-images-1.medium.com/max/900/1*EntHChgUyirgbZ9A3zTxkA.png) center / cover'}}>
            ReactProject #1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam dolor, malesuada at arcu ultrices, maximus laoreet lectus. Nam sapien est, auctor id iaculis et, ornare vitae ipsum. Aliquam pharetra nisl massa, rutrum consectetur massa auctor et. Maecenas lectus enim, mollis eget rutrum id, faucibus id arcu. Suspendisse vulputate risus elit, in sagittis nisl tristique sit amet. Vivamus porta vel urna sed malesuada. Sed vehicula nisl vitae turpis faucibus egestas.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
        </Card>
        </div>
      )
    }else if(this.state.activeTab === 1){
      return (
        <div>
          <h1>This is a page</h1>
        </div>
      );
    }else if(this.state.activeTab === 2){
      return (
        <div>
          <h1>This is the MySQL</h1>
        </div>
      );
    }else if(this.state.activeTab === 3){
      return (
        <div>
          <h1>This is the Java</h1>
        </div>
      );
    }else if(this.state.activeTab === 4){
      return (
        <div>
          <h1>This is the Python</h1>
        </div>
      );
    }
  }

  render() {
    return(
      <div className = "category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>MySQL</Tab>
          <Tab>Java</Tab>
          <Tab>Python</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content"> {this.toggleCategories()} </div>
            </Cell>
          </Grid>

    </div>
    );
  }
}

export default projects;
