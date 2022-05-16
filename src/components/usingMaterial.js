import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
  } from "@mui/material";
  
  const Usingmaterial = () => {
    return (
      <Container component="section">
        <h1>Using Material</h1>
        <Button variant="contained" color="primary">
          Material UI Button
        </Button>
  
        {/* row */}
        <Grid container spacing={5}>
          <Grid item md={4}>
            <Card className="mt-5 mb-5">
              <CardMedia
                component="img"
                image="https://d28ipuewd7cdcq.cloudfront.net/assets/article/2020/10/09/crash-bandicoot-4-its-about-time-feature_feature.jpg"
              />
              <CardContent>
                <h3>Crash Bandicoot : Its all about time</h3>
                <p>in Adventure, Action</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className="mt-5 mb-5">
              <CardMedia
                component="img"
                image="https://d28ipuewd7cdcq.cloudfront.net/assets/article/2020/10/09/crash-bandicoot-4-its-about-time-feature_feature.jpg"
              />
              <CardContent>
                <h3>Crash Bandicoot : Its all about time</h3>
                <p>in Adventure, Action</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className="mt-5 mb-5">
              <CardMedia
                component="img"
                image="https://d28ipuewd7cdcq.cloudfront.net/assets/article/2020/10/09/crash-bandicoot-4-its-about-time-feature_feature.jpg"
              />
              <CardContent>
                <h3>Crash Bandicoot : Its all about time</h3>
                <p>in Adventure, Action</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  export default Usingmaterial;