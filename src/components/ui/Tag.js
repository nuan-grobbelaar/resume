import classes from './Tag.module.css';

const Tag = (props) => {
  return (
    <div className={classes['flex']}>
      <div className={classes['container']}>
        <div style={{transform: 'rotate('+props.rotate+'deg)'}}>
          <a className={classes['text']}>{props.children}</a>
        </div>
      </div>
    </div>
  );
};

export default Tag;