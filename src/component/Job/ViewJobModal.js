import React from "react";
import {
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
  Button,
  IconButton,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { format } from "date-fns";

const useStyle = makeStyles((theme) => ({
  info: {
    "& > *": {
      margin: "5px",
    },
  },
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "14.5px",
    borderRadius: "5px",
    fontWeight: 600,
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
  },
}));

export default (props) => {
  const classes = useStyle();
  return (
    <Dialog open={!!Object.keys(props.job).length} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {props.job.title} @ {props.job.companyName}
          <IconButton onClick={props.closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent></DialogContent>
      <Box>
        <Box className={classes.info} display="flex">
          <Typography variant="body1">Post on:</Typography>
          <Typography variant="body1">
            {props.job.postedOn &&
              format(props.job.postedOn, "dd,MMM,yyyy HH:MM")}
          </Typography>
        </Box>
        <Box className={classes.info} display="flex">
          <Typography variant="body1">Job type:</Typography>
          <Typography variant="body1">{props.job.type}</Typography>
        </Box>
        <Box className={classes.info} display="flex">
          <Typography variant="body1">Job location:</Typography>
          <Typography variant="body1">{props.job.location}</Typography>
        </Box>
        <Box className={classes.info} display="flex">
          <Typography variant="body1">Job description:</Typography>
          <Typography variant="body1">{props.job.description}</Typography>
        </Box>
        <Box className={classes.info} display="flex">
          <Typography variant="body1">Company name:</Typography>
          <Typography variant="body1">{props.job.companyName}</Typography>
        </Box>
        <Box className={classes.info} display="flex">
          <Typography variant="body1">Company Website:</Typography>
          <Typography variant="body1">{props.job.link}</Typography>
        </Box>
        <Box ml={0.5}>
          <Typography variant="body1">Skills:</Typography>
          <Grid container alignItems="center">
            {props.job.skills &&
              props.job.skills.map((skill) => (
                <Grid item key={skill} className={classes.skillChip}>
                  {skill}
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
      <DialogActions>
        <Button
          variant="outlined"
          component="a"
          href={props.job.link}
          target="_blank"
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};
