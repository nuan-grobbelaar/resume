import '../style/style-main.css'
import classes from './FrontPage.module.css';
import Card from './cards/Card';
import MediaCard from './cards/MediaCard'

import { Typography, Box, CardMedia } from '@mui/material';

import me from '../resources/me.jpg';

const FrontPage = (props) => {
  return (
    <>
      
      <div className={classes.container}>
        <div className={classes.grid}>
        {/* <Typography className={classes['main-text']} variant='h1'>GROBBELAAR</Typography> */}
          <MediaCard 
            className={classes['item-1']}
            src={me} 
            rotate={'2'}
            title={'Table Mountain'}
          >
          </MediaCard>
        </div>
      </div>
      
    </>
  );
};

export default FrontPage;