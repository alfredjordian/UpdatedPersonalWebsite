import React from "react";
import "./AboutMe.css";
import music from "./pics/music.jpg";
import webdev from "./pics/webdev.jpg";
import weights from "./pics/weights.png";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


import Typography from "@material-ui/core/Typography";
import Contact from "./Contact";

const useStyles = makeStyles({
  root: {
    width: 345,
    marginBottom: "2%",
    marginTop: "2%",
    marginRight:'2%'
  },
  media: {
    height: 140,
  },
});

function AboutMe() {
  const classes = useStyles();

  return (
    <div className="aboutMeContainer">
      <h1 style ={{display:'flex', 
      justifyContent:'center', 
      backgroundColor:'rgb(214, 224, 245)',
      borderTop: 'double rgb(255, 187, 187)',
      paddingTop:'2%'}}>
          Interests
        </h1>
      <div className="aboutMe">
    
        <Card className={classes.root}>
          <CardMedia className={classes.media} image={music} title="Guitar" />
          <CardContent>
            <Typography variant="body2" component="p">
              Music has always been something engrained at an early age. I play
              piano, guitar, and any other instrument that comes my way.
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={webdev}
            title="Web Design"
          />
          <CardContent>
            <Typography variant="body2" component="p">
              Though I'm versed in Backend, my niche is with UX/UI and styling
              with any FrontEnd stack thrown at me.
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardMedia className={classes.media} image={weights} title="Gym" />
          <CardContent>
            <Typography variant="body2" component="p">
              On days that I'm not too busy coding, I'll be at the gym lifting.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div class="row">
          <div class="story">
            <figure class="story__shape">
              <img alt="" class="story__img"/>
              <figcaption class="story__caption">Ian Jordan</figcaption>
            </figure>
            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">
                
              </h3>
              <p>API, Javascript, Express, CSS, React, PostgreSQL, MaterialUI, JQuery <br/><br/>
              Email - Ian12009@gmail.com
              </p>
              <Contact/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default AboutMe;
