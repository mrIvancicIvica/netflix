import { Grid, Box } from '@mui/material';
import { Movie } from '.';

const MovieList = ({ movies }) => {
  return (
    <Grid container>
      {movies?.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
