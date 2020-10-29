import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            I'm Sagor
          </Typography>
          <Button color="inherit">Python</Button>
          <Button color="inherit">Django</Button>
          <Button color="inherit">Flask</Button>
          <Button color="inherit">JavaScript</Button>
          <Button color="inherit">TypeScript</Button>
          <Button color="inherit">React.JS</Button>
          <Button color="inherit">Node.JS</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
