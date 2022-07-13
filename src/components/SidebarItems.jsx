import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';
import { useGetGenresQuery } from '../Redux/services/tmdb';
const SidebarItems = () => {
  const { data } = useGetGenresQuery();
  console.log(
    '🚀 ~ file: SidebarItems.jsx ~ line 13 ~ SidebarItems ~ data',
    data
  );
  return (
    <Box sx={{ mt: 2 }}>
      <List subheader={<ListSubheader>Categories</ListSubheader>}>
        <ListItemButton>
          <ListItemText>Popular</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>Top Rated</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>Upcoming</ListItemText>
        </ListItemButton>
      </List>
      <Divider />
      <List subheader={<ListSubheader>Genres</ListSubheader>}>
        {data?.genres.map(({ name , id}) => (
          <ListItemButton key={id}>
            <ListItemText>{name}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default SidebarItems;
