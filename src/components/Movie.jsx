import { Box, Grid, Typography, Grow, Rating, Tooltip } from '@mui/material';
const Movie = ({ movie, i }) => {
  return (
    <Grid sx={{ m: '0px' }} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Box>
          <Box
            sx={{
              '&:hover': {
                transform: 'scale(1.05)',
                transition: '0.3s ease-in-out',
                cursor: 'pointer',
              },
            }}
          >
            <img
              style={{
                borderRadius: '20px',
                height: '350px',
                margin: '10px',
              }}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : 'https://www.fillmurray.com/200/300'
              }
              alt={movie.title}
            />
          </Box>

          <Typography
            variant='h5'
            color='text.primary'
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              width: '230px',
              marginLeft: 1.9,
            }}
          >
            {movie.original_title}
          </Typography>
          <Tooltip title={`${movie.vote_average} / 10`}>
            <div>
              <Rating
                readOnly
                value={movie.vote_average / 2}
                precision={0.1}
                sx={{ marginLeft: 1.9 }}
              />
            </div>
          </Tooltip>
        </Box>
      </Grow>
    </Grid>
  );
};

export default Movie;
