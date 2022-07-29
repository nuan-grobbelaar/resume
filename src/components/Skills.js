import classes from './Skills.module.css';

import { Typography, Box, CardMedia } from '@mui/material';
import { usePageVisibility } from 'react-page-visibility';

import me from '../resources/me.jpg';

const Skills = (props) => {

  const isVisible = usePageVisibility();

  console.log(isVisible);

  return (
    <>
      
      <div className={classes.container}>
        <div className={classes.grid}>


        </div>
      </div>
      
    </>
  );
};

export default Skills;