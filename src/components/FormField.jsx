import {
  InputAdornment,
  FormControl,
  InputLabel,
  FilledInput,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const FormField = () => {
  return (
    <div>
      <FormControl
        color='whiteColor'
        sx={{
          m: 2,
          mb: 3,
          width: '40ch',
          input: { color: 'white' },
          color: 'white',
        }}
        variant='filled'
      >
        <InputLabel
          sx={{ color: 'white' }}
          htmlFor='filled-adornment-password'
          size='small'
        >
          Search movie...
        </InputLabel>
        <FilledInput
          size='small'
          sx={{ borderBottom: 'none' }}
          endAdornment={
            <InputAdornment position='end'>
              <SearchIcon sx={{ color: 'white' }} />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default FormField;
