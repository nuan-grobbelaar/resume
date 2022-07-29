import classes from './Arrow.module.css'

import arrow from '../resources/arrow.svg';

const Arrow = (props) => {
  return (
    <img src={arrow} className={classes.arrow + ' ' + props.className} alt="logo" />
  );
};

export default Arrow;