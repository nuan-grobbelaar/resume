import classes from './Button.module.css';

import Arrow from '../icons/Arrow'

import { useEffect, useState } from 'react'
import { Typography, Box, CardMedia, Button } from '@mui/material';

const BrutalButton = (props) => {

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    if (props.selected) {
      setShowArrow(true);
      setTimeout(() => {
        setShowArrow(false);
      }, 1000);
    }
  }, [props.selected]);

  return (
    <div className={classes['flex']}>
    <Box className={classes['container']}>
      <Box style={{transform: 'rotate('+props.rotate+'deg)'}}>
        <Button className={classes.button + ' ' + props.className} style={{backgroundColor: props.color}} onClick={props.onClick}>
          <Typography className={classes['button-text']}>{props.children}</Typography>
        </Button>
      </Box>
    </Box>
    {showArrow && <Arrow className={classes['selected-arrow']}/>}
    </div>
  );
};

export default BrutalButton;