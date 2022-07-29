import classes from './Card.module.css';

const BrutalCard = (props) => {

  const expandInfo = () => {
    console.log(1);
  };


  const truncateIndex = props.truncateBodyAt ? props.truncateBodyAt  : 295;
  const textBody = props.body.length > truncateIndex ? 
    <>
       {props.body.substring(0, truncateIndex) + '...'} {/*<a href="" className={classes.more} onClick={expandInfo}>read more</a> */}
    </> : props.body;

  
  return (
    <div className={classes['container'] + ' ' + props.className}>
      <div className={classes['card']}>
        <div className={classes['title-bar']} style={{backgroundColor: props.color}}>
          {props.title}
        </div>
        <div className={classes['card-content']}>
          <div className={classes['heading']}>
            {props.heading}
          </div>
          {textBody}
        </div>
      </div>
    </div>
  );
};

export default BrutalCard;