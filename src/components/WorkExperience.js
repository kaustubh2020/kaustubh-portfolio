import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
}));


export default function WorkExperience() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">

      {/* First Experience */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textPrimary">
            15 September, 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" color="primary">
              HCL Technologies
            </Typography>
            <Typography variant="subtitle2" color="textPrimary">Software Engineer</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
      
      {/* dummy for extra line */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        </TimelineContent>
      </TimelineItem>


      {/* Working Till Date */}
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textPrimary">
            Working, till date
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
        </TimelineContent>
      </TimelineItem>

      
    </Timeline>
  );
}
