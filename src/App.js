import { AppBar, Button, Card, CardContent, CardMedia, Container, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import React from 'react';
import './style/style.scss';
import useStyle from './styles';

const App = () => {
    const classes = useStyle();
    const mycards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Albam</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Photo Albam</Typography>
            <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
            Globally communicate real-time testing procedures before plug-and-play strategic theme areas. Authoritatively reconceptualize bricks-and-clicks "outside the box" thinking after B2B e-tailers. Assertively.
            </Typography>
          </Container>
        </div>
        <div>
          <Grid container spacing={2} justify="center">
              <Grid item>
                  <Button variant="contained" color="default">See my photo</Button>
              </Grid>
              <Grid item>
                  <Button variant="contained" color="primary">See my photo</Button>
              </Grid>
          </Grid>
        </div>
        <Container maxWidth="md">
            <Grid container spacing={4}>
              {mycards.map(card =>(
                  <Grid xs={12} sm={6} md={4} key={card} item>
                  <Card className={classes.cusomGrid}>
                    <CardMedia 
                        image="https://source.unsplash.com/random"
                        title="Image name"
                     />
                     <CardContent>
                     <Typography variant="h4" align="center" color="textPrimary" gutterBottom>Photo Albam</Typography>
                     <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
              Globally communicate real-time testing procedures before plug-and-play strategic.
              </Typography>
                     </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
        </Container>
      </main>
    </>
  );
}
 
export default App;
