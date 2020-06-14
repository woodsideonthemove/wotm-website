import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  text: {
    textAlign: 'justify',
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const {children, classes, onClose, ...other} = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

export default function PostsSingleStory(props) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  console.log(props)
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Learn More
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.post.title}
        </DialogTitle>
        <DialogContent dividers>
          {props.post.body.map((text, idx) => {
            return (
              <React.Fragment key={idx}>
                <Typography
                  gutterBottom
                  dangerouslySetInnerHTML={{__html: text}}
                />
                <br />
              </React.Fragment>
            )
          })}
          {props.post.tags.length ? (
            <Typography>
              Tags:{' '}
              {props.post.tags.map((tag, idx) => {
                if (idx === props.post.tags.length - 1) return tag.tag
                else return `${tag.tag}, `
              })}
            </Typography>
          ) : (
            <React.Fragment />
          )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

// const mapDispatchToProps = {
//   fetchSinglePost: fetchPost,
// }

// export default withStyles(styles)(
//   connect(null, mapDispatchToProps)(PostsSingleStory)
// )
