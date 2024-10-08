import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  [theme.breakpoints.down('sm')]: {
    paper: {
      padding: '2px 5px',
    },
    paperHeading: {
      fontSize: '16px',
    },
    paperSubtitle: {
      fontSize: '11px',
    },
  },
}))

export default function WorkExperience() {
  const classes = useStyles()

  const date = new Date();
  const year = date.getFullYear();

  return (
    <Timeline align="alternate">
      {/* First Experience */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textPrimary">
            2020 - 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography
              variant="h6"
              component="h1"
              color="secondary"
              className={classes.paperHeading}
            >
              HCL Technologies
            </Typography>
            <Typography
              variant="subtitle2"
              color="textPrimary"
              className={classes.paperSubtitle}
            >
              Software Engineer
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      {/* dummy for extra line */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>

      {/* Second Experience */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textPrimary">
            2021 - 2023
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography
              variant="h6"
              component="h1"
              color="secondary"
              className={classes.paperHeading}
            >
              HCL Technologies
            </Typography>
            <Typography
              variant="subtitle2"
              color="textPrimary"
              className={classes.paperSubtitle}
            >
              Senior Software Engineer
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      {/* dummy for extra line */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>

      {/* Third Experience */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textPrimary">
            2023 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography
              variant="h6"
              component="h1"
              color="primary"
              className={classes.paperHeading}
            >
              HCLTech
            </Typography>
            <Typography
              variant="subtitle2"
              color="textPrimary"
              className={classes.paperSubtitle}
            >
              Lead Engineer
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  )
}
