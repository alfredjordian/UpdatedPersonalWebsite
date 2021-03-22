import React from 'react'
import './AboutMe.css'
import music from './pics/music.jpg'
import webdev from './pics/webdev.jpg'
import weights from './pics/weights.png'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import WorkIcon from '@material-ui/icons/Work';
import PersonPinIcon from "@material-ui/icons/PersonPin";



const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: 150
    }
  });

function AboutMe() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div className ="aboutMe">
        
            <section className="musicInterest">
            <img src={music} alt="" id="musicPhoto"></img>
             <p className="musicAbout">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>

            <section className="webDevInterest">
            <img src={webdev} alt="" id="webDevPhoto"></img>
            <p className="webDevAbout">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>

            <section className="weightInterest">
            <img src={weights} alt="" id="weightPhoto"></img>
            <p className="weightAbout">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>

            <div className="navBox">
            <Paper square className={classes.root}>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
            >
                <Tab icon={<PersonPinIcon />} label="ABOUT ME" />
                <Tab icon={<WorkIcon />} label="PORTFOLIO" />
                <Tab icon={<PhoneIcon />} label="CONTACT ME" />
            </Tabs>
            </Paper>
            </div>


        </div>
    )
}

export default AboutMe