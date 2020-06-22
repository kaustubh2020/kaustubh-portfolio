import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

import CSS from '../assets/images/Tools/CSS.svg'
import Figma from '../assets/images/Tools/Figma.svg'
import Gatsby from '../assets/images/Tools/Gatsby.svg'
import Git from '../assets/images/Tools/Git.svg'
import HTML from '../assets/images/Tools/HTML.svg'
import Java from '../assets/images/Tools/Java.svg'
import Javascript from '../assets/images/Tools/Javascript.svg'
import Netlify from '../assets/images/Tools/Netlify.svg'
import Office from '../assets/images/Tools/Office.svg'
import Photoshop from '../assets/images/Tools/Photoshop.svg'
import Reactjs from '../assets/images/Tools/Reactjs.svg'
import XD from '../assets/images/Tools/XD.svg'

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[5],
        fontSize: 14,
    },
}))(Tooltip)

const mystyle = {
    margin: "10px"
};

const Tools = () => {
    return (
        <div>
            <LightTooltip style={mystyle} title="Javascript" placement="top">
                <img src={Javascript} alt="icon" />
            </LightTooltip>

            <LightTooltip style={mystyle} title="Java" placement="top">
                <img src={Java} alt="icon" />
            </LightTooltip>

            <LightTooltip style={mystyle} title="Gatsby" placement="top">
                <img src={Gatsby} alt="icon" />
            </LightTooltip>

            <LightTooltip style={mystyle} title="Reactjs" placement="top">
                <img src={Reactjs} alt="icon" />
            </LightTooltip>

            <LightTooltip style={mystyle} title="HTML" placement="top">
                <img src={HTML} alt="icon" />
            </LightTooltip>

            <LightTooltip style={mystyle} title="CSS" placement="top">
                <img src={CSS} alt="icon" />
            </LightTooltip>



            <LightTooltip style={mystyle} title="Git" placement="top">
                <img src={Git} alt="icon" />
            </LightTooltip>

            <LightTooltip style={mystyle} title="Netlify" placement="top">
                <img src={Netlify} alt="icon" />
            </LightTooltip>

            <LightTooltip style={mystyle} title="Microsoft Office" placement="top">
                <img src={Office} alt="icon" />
            </LightTooltip>

            <LightTooltip style={mystyle} title="Photoshop" placement="top">
                <img src={Photoshop} alt="icon" />
            </LightTooltip>

            <LightTooltip style={mystyle} title="XD" placement="top">
                <img src={XD} alt="icon" />
            </LightTooltip>

            <LightTooltip style={mystyle} title="Figma" placement="top">
                <img src={Figma} alt="icon" />
            </LightTooltip>
        </div>
    )
}

export default Tools
