import '../../style/style-main.css'
import classes from './Card.module.css';
import { useState } from 'react';
import Modal from './Modal'
import Tag from '../ui/Tag';;

const BrutalCard = (props) => {

  const [showModal, setShowModal] = useState(false);

  const toggleInfo = () => {
    setShowModal(!showModal);
  };

  document.body.style.overflow = showModal ? 'hidden' : 'auto';

  const tags = props.tags?.map(tag => {
    return <Tag color={'#F79900'} >{tag}</Tag>
  });

  console.log(tags);

  const cardContent = (
    <div className={classes['card'] + (showModal ? '' : ' flex-col-container')}>
      <div className={classes['title-bar']} style={{backgroundColor: props.color}}>
        {props.title}
      </div>
      <div className={classes['card-content']}>
        <div className={classes['heading']}>
          {props.heading}
        </div>
        <div className={classes['accent-text']}>
          {showModal ? props.accentText : null}
        </div>
        {showModal ? props.children : props.summary}
      </div>
      <div className="flex-row-container flex-wrap mt-auto">
        {tags}
      </div>
    </div>
  );
  
  return (
    <>
      {showModal && 
        <Modal 
          className={classes['modal-container']}
          handleClose={setShowModal.bind(null, false)}
        >
          {cardContent}
        </Modal>}
      {!showModal && 
        <div 
          className={classes['container'] + ' ' + props.className} 
          style={{transform: 'rotate('+props.rotate+'deg)'}} 
          onClick={toggleInfo}
        >
          {cardContent}
        </div>
      }
    </>
  );
};

export default BrutalCard;