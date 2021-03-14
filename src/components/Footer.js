import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 12,
  },
}))(Tooltip)

const myStyle = {
  color: '#D0D0D0',
  fontSize: '15px',
}

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <LightTooltip title="Linkedin" placement="top">
            <a
              href="https://www.linkedin.com/in/kaustubh2020/"
              className="icon fa-linkedin-square"
              rel="noopener noreferrer"
              target="_blank"
              style={myStyle}
            >
              <span className="label">Twitter</span>
            </a>
          </LightTooltip>
        </li>
        <li>
          <LightTooltip title="Twitter" placement="top">
            <a
              href="https://twitter.com/kaustubh_2020"
              className="icon fa-twitter"
              rel="noopener noreferrer"
              target="_blank"
              style={myStyle}
            >
              <span className="label">Twitter</span>
            </a>
          </LightTooltip>
        </li>
        <li>
          <LightTooltip title="Github" placement="top">
            <a
              href="https://github.com/kaustubh2020"
              className="icon fa-github"
              rel="noopener noreferrer"
              target="_blank"
              style={myStyle}
            >
              <span className="label">Github</span>
            </a>
          </LightTooltip>
        </li>

        <li>
          <LightTooltip title="Instagram" placement="top">
            <a
              href="https://www.instagram.com/_windsonmyhair_/"
              className="icon fa-instagram"
              rel="noopener noreferrer"
              target="_blank"
              style={myStyle}
            >
              <span className="label">Instagram</span>
            </a>
          </LightTooltip>
        </li>

        <li>
          <LightTooltip title="Facebook" placement="top">
            <a
              href="https://www.facebook.com/kaustubh20"
              className="icon fa-facebook"
              rel="noopener noreferrer"
              target="_blank"
              style={myStyle}
            >
              <span className="label">Facebook</span>
            </a>
          </LightTooltip>
        </li>
        <li>
          <LightTooltip title="Gmail" placement="top">
            <a
              href="mailto: kaustubhjaiswal200@gmail.com"
              className="icon fa-envelope-o"
              rel="noopener noreferrer"
              target="_blank"
              style={myStyle}
            >
              <span className="label">Email</span>
            </a>
          </LightTooltip>
        </li>
      </ul>
      <ul className="copyright" style={{ color: '	#D0D0D0', fontSize: '15px' }}>
        <li>
          &copy; Made with{' '}
          <span role="img" aria-label="heart">
            💛
          </span>{' '}
          by
        </li>
        <li>Kaustubh Jaiswal</li>
      </ul>
    </div>
  </div>
)

export default Footer
