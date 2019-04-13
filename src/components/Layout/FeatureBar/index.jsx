import React from 'react';

// Material UI
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Button,
  Tooltip,
  IconButton,
  withStyles
} from '@material-ui/core';

// Icons
import { Help } from '@material-ui/icons';

import styles from './styles';

const FeatureBar = props => {
  const { classes } = props;
  return (
    <AppBar component="div" color="primary" position="static" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Grid container alignItems="center" spacing={0}>
          <Grid item xs>
            <Typography color="inherit" variant="h5">
              Authentication
            </Typography>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant="outlined"
              color="inherit"
              size="small">
              Web setup
            </Button>
          </Grid>
          <Grid item>
            <Tooltip title="Help">
              <IconButton color="inherit">
                <Help />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

// Apply styles
const _FeatureBar = withStyles(styles)(FeatureBar);

export default _FeatureBar;