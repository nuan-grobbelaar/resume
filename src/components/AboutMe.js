import classes from './AboutMe.module.css';

import Card from './Card';

const AboutMe = (props) => {
  return (
    <>
      
      <div className={classes.container}>
        <div className={classes.grid}>
          <Card 
            className={classes.card} 
            color={'#E32BD1'}
            title={'Education'}  
            heading={'Stellenbosch University'}
            body={'Grad. Dec 2018'}
          />
        </div>
      </div>
      
    </>
  );
};

export default AboutMe;