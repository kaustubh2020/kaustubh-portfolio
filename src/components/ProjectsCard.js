import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
})

export default function ImgMediaCard(props) {
  const classes = useStyles()

  return (
    <Card
      className={classes.root}
      style={{
        marginBottom: '15px',
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <Button size="small" color="secondary" variant="contained">
              Demo {" "} <span role="img" aria-label="icon">
                👁‍🗨
                </span>
            </Button>
          </a>
          <a href={props.code} target="_blank" rel="noopener noreferrer">
            <Button size="small" color="secondary" variant="outlined">
              Source Code {" "} <span role="img" aria-label="icon">
                📝
                </span>
            </Button>
          </a>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
