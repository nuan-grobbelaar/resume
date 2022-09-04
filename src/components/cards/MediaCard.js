import classes from './MediaCard.module.css';
import { useState } from 'react';
import Modal from './Modal';

const MediaCard = (props) => {

  const [showModal, setShowModal] = useState(false);

  const toggleInfo = () => {
    setShowModal(!showModal);
  };

  document.body.style.overflow = showModal ? 'hidden' : 'auto';

  return (
    <>
      {showModal && 
        <Modal 
          className={classes['modal-container']}
          handleClose={setShowModal.bind(null, false)}
        >
          <div className={classes['card']}>
            <div className={classes['card-content']}>
            </div>
          </div>
        </Modal>
      }
      {!showModal &&
        <div 
          className={classes['container'] + ' ' + props.className} 
          style={{transform: 'rotate('+props.rotate+'deg)'}} 
          onClick={toggleInfo}
        >
          <div className={classes['card']}>
            <div className={classes['card-content']}>
              <img src={props.src} alt="Card Media" width="auto" height="100%" />
            </div>
            <div className={classes['card-title']}>
              {props.title}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default MediaCard;