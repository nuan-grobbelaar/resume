import classes from './MediaCard.module.css';

const MediaCard = (props) => {
  return (
    <div className={classes['container'] + ' ' + props.className} style={{transform: 'rotate('+props.rotate+'deg)'}}>
      <div className={classes['card']}>
        <div className={classes['card-content']}>
          <img src={props.src} alt="Card Media" width="auto" height="100%" />
        </div>
        <div className={classes['card-title']}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default MediaCard;