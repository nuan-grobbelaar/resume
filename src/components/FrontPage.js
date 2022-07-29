import classes from './FrontPage.module.css';
import Card from './Card';
import MediaCard from './MediaCard'

import { Typography, Box, CardMedia } from '@mui/material';

import me from '../resources/me.jpg';

const FrontPage = (props) => {
  return (
    <>
      
      <div className={classes.container}>
        <div className={classes.grid}>
        {/* <Typography className={classes['main-text']} variant='h1'>GROBBELAAR</Typography> */}
          <Card 
            className={classes['item-2']} 
            color={'#99E32B'}
            title={'ACI Worldwide'}  
            heading={'Software Engineer'}
            body={'ACI is a world-leading payment systems company that serves banks, payment processors and merchants globally. My time at ACI gave me greater insight into the payments world, but more than that, it helped me develop a strong solution orientated mindset, developed my customer interfacing skills and allowed me to discover a love for writing high- and low-level designs. The nature of the industry meant that there were often very tight deadlines, this helped me develop self-management skills but also taught me to excel under pressure.'}
          >
            
          </Card>

          <MediaCard 
            className={classes['item-1']}
            src={me} 
            rotate={'2'}
          >
            Table Mountain
          </MediaCard>
        </div>
      </div>
      
    </>
  );
};

export default FrontPage;