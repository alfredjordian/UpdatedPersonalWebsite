import React from 'react'
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function Portfolio() {
    return (
        <div style={{marginBottom:"50%"}}>
            <IconButton>
                <GitHubIcon fontSize="large"/>
            </IconButton>

            <IconButton>
                <LinkedInIcon fontSize="large"/>
            </IconButton>

            <IconButton>
                <EmailIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Portfolio
