import { Movies, MovieDetails } from '../components/index';
import { Routes, Route } from 'react-router-dom';
const index = () => {
  return (
    <Routes>
      <Route path='' element={<Movies />} />
      <Route path='moviedetails' element={<MovieDetails />} />
    </Routes>
  );
};

export default index;
