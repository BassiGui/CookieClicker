import React from 'react';
import style from './right.module.css';
import CursorImg from '../../Assets/cursor-154478__340.png';
import MoneyImg from '../../Assets/money.png';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const Right = ({ handleAutoclick }) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">
        <img src={CursorImg} style={{ width: '50px', marginRight: '1rem' }} />{' '}
        Cursor
      </Popover.Header>
      <Popover.Body>Autoclicks once every 10seconds</Popover.Body>
    </Popover>
  );

  return (
    <div className={`${style.containerRight} mt-4`}>
      <div className={style.info}>
        <p>Buy</p>
        <p>Sel</p>
      </div>
      <OverlayTrigger trigger="hover" placement="left" overlay={popover}>
        <button
          className={`${style.buttonAutoclick} d-flex `}
          onClick={handleAutoclick}
        >
          <img src={CursorImg} className="img-fluid" />
          <div>
            <h2>Cursor</h2>
            <div className="text-left">
              <img src={MoneyImg} />
              <span>10</span>
            </div>
          </div>
        </button>
      </OverlayTrigger>
    </div>
  );
};

export default Right;
