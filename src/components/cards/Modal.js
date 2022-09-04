import classes from './Modal.module.css';

const Modal = (props) => {

  return (
    <div>
        <div className={classes['overlay']} onClick={props.handleClose}></div>
        <div className={props.className} style={{transform: 'rotate('+props.rotate+'deg)'}}>
            {props.children}
            {/* <div className={classes['card']}>
                <div className={classes['title-bar']} style={{backgroundColor: props.color}}>
                    {props.title}
                </div>
                <div className={classes['card-content']}>
                    <div className={classes['heading']}>
                        {props.heading}
                    </div>
                    {props.children}
                </div>
            </div> */}
        </div>
    </div>
  );
};

export default Modal;