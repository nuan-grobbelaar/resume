import classes from './NavBar.module.css';
import Button from './Button'

import { useSelector, useDispatch } from 'react-redux';
import { navActions } from '../../store/nav.js';

import { Typography, Box, CardMedia } from '@mui/material';

const NavBar = (props) => {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.nav.selected);

  const setSelected = (section) => {
    dispatch(navActions.setPage(section));
  }

  return (
    <Box className={classes.nav}>
      <Box className={classes['name-label']}><Typography className={classes['alt-text']} variant='h1'>NUAN</Typography></Box>
      <Button 
        className={classes.button} 
        color={'#F79900'} 
        rotate={-1} 
        onClick={setSelected.bind(null, 'home')}
        selected={selected === 'home'}
      >
        Home
      </Button>
      <Button 
        className={classes.button} 
        color={'#C637E3'} 
        rotate={2} 
        onClick={setSelected.bind(null, 'experience')}
        selected={selected === 'experience'}
      >
        Experience
      </Button>
      {/* <Button 
        className={classes.button} 
        color={'#36BCFF'} 
        rotate={1} 
        onClick={setSelected.bind(null, 'skills')} 
        selected={selected === 'skills'}
      >
        Skills
      </Button> */}
      <Button 
        className={classes.button} 
        color={'#F13A3A'} 
        rotate={-1} 
        onClick={setSelected.bind(null, 'about')}
        selected={selected === 'about'}
      >
        About Me
      </Button>
    </Box>
  );
};

export default NavBar;