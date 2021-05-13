import React from 'react'
import { IconButton, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function Contact() {
    return (
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <Link href="https://github.com/alfredjordian" target="blank">
            <IconButton>
                <GitHubIcon fontSize="large" style={{color:'#6cc644'}}/>
            </IconButton>
            </Link>

            <Link href="https://www.linkedin.com/in/ian-jordan-aa6ab8207/" target="blank">
            <IconButton>
                <LinkedInIcon fontSize="large" style={{color:'#0e76a8'}}/>
            </IconButton>
            </Link>

            <Link href="mailto:ian12009@gmail.com">
            <IconButton>
                <EmailIcon fontSize="large" style={{color:'#DB4437'}}/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Contact
