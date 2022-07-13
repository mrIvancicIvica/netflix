import { Box } from '@mui/material';

import { useGetMoviesQuery } from '../Redux/services/tmdb';
import { MovieList } from '.';

const Movies = () => {
  const { data } = useGetMoviesQuery();
  console.log('🚀 ~ file: Movies.jsx ~ line 8 ~ Movies ~ data', data);

  return (
    <Box>
      <MovieList movies={data} />
    </Box>
  );
};

export default Movies;
