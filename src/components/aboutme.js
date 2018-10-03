import React, { Component } from 'react';
import './aboutme.css'
import ReactPlayer from 'react-player';
import ReactRevealText from 'react-reveal-text';
import '../bouncing/bouncing.css';
import { Grid, Cell} from 'react-mdl';

class aboutme extends Component {

constructor() {
  super();
  this.state = { show: false };
}

componentDidMount() {
  setTimeout(() => {
    this.setState({ show: true });
  }, 2000);
}


// const photoset = () => (
//     {
//       src: {require('../images/WordArt1.JPG')},
//       width: 4,
//       height: 3
//     }
//     // {
    //   src: require('../images/WordArt2.JPG'),
    //   width: 1,
    //   height: 1
    // },
    // {
    //   src: require('../images/WordArt3.JPG'),
    //   width: 1,
    //   height: 1
    // }
  // );


  render() {
    return (
        <div>
            <div className="bgStyles">
              <div className="textStyles">
                  <ReactRevealText show={this.state.show} text="WELCOME TO MY LIFE" />
              </div>
            </div>
            <br />
            /* <h1 className="aboutme-title"> Everything You Need To Know About Me </h1> */
              <div className="aboutme-content">
                <p style={{fontSize: '20px'}}>
                  Before I start talking about myself, I want to you to feel proud of yourself for getting this far.
                  Let's be honest, we all want to talk our best qualities, but there is only one truth. That truth is that we
                  are not all as perfect as our resumes make us appear to be. Don't fret though! All you have to do is
                  be the perfect you. So without further ado, let me tell you how I be the perfect me.</p>

                <h2 style={{fontFamily: 'Fahkwang sans-serif', textAlign:'center'}}><em> I love traveling!</em></h2>
                <h1 style={{fontSize:'25px', fontFamily: 'Fahkwang sans-serif', textAlign:'center'}}>Cliff Jumping in Greece!</h1>

                <div>
                   <ReactPlayer
                     controls
                     style={{margin: '0 auto', left: '25%' , right: '25%', opacity:'.9' }}
                     url={require('../Videos/Vacation.mp4')}/>
                </div>

                <br />
                <p> I'm not the best jumper, but there's more to see </p>
                <br />
                <p>Keep scrolling to see more...
                  <div class="arrow bounce">
                    <i class="fa fa-arrow-down fa-2x"></i>
                  </div>
                </p>

                 <br />
                 <img
                   src={require('../images/Egypt3.JPG')}
                   alt = "Egypt3"
                   style={{
                     margin: 'auto',
                     paddingRight:'50px',
                     paddingBottom: '20px',
                     height: '600px',
                     width: '750px',
                     opacity:'.9',
                     borderRadius: '20%'}} />
                   <br />
                 <p style={{fontSize:'30px'}}> Meet my pet camel, Chocola!</p>
                    <br />
                  <p style={{fontSize:'30px'}}> If there is one country that I always love going to, it would be Egypt.</p>
                  <p style={{fontSize:'30px'}}>But wait there's more to me than just traveling...
                    <div class="arrow bounce">
                      <i class="fa fa-arrow-down fa-2x"></i>
                    </div>
                  </p>
                  <p>I am also a very passionate word artist </p>
                  <p> Take a look ! </p>
                <Grid>
                      <Cell col={6}>
                          <img
                          src= {require('../images/WordArt1.jpg')}
                          alt= 'WordArt1'
                          style={{width:'100%',height:'80%'}}/>
                        </Cell>
                        <Cell col={6}>
                          <img
                          src= {require('../images/WordArt2.JPG')}
                          alt= 'WordArt2'
                          style={{width:'100%',height:'80%'}}/>
                        </Cell>
                        <Cell col={6}>
                          <img
                            src= {require('../images/WordArt3.JPG')}
                            alt= 'WordArt2'
                            style={{marginRight:'50px',width:'100%',height:'80%'}}/>
                        </Cell>
                </Grid>
              <p> So if you're ever in a rush and forgot to buy a card for that special someone, just let me know and I got you <br/>
              I do all ocasions </p>
              </div>
        </div>
    );
  }
}

export default aboutme;
// constructor(props) {
//   super(props);
//   this.state = {
//     sound:
//     playStatus: false,
//     playFromPosition: 300,
//     onLoading: false,
//     onPlaying: false,
//     onFinishedPlaying: false
//   }
//
// }
//
// handleSongLoading = () => {
//   const doesShow = this.state.sound;
//   this.setState({showPersons: !doesShow});
// }
//
// toggleShowReact = () => {
//   const Show = this.state.showReact;
//   this.setState({showReact: !Show})
// }
// render() {
//   if(this.state.soundStatus){
//     sound =
//       <Sound
//           playStatus={this.state.persons}
//           onLoading={this.deletePersonsHandler}
//           onPlaying={this.nameChangeHandler}
//           onFinishedPlaying = {this.ageChangedHandler}/>;
//   }