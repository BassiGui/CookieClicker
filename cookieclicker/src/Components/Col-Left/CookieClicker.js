import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import style from './counter.module.css';
import Cookie from '../../Assets/perfectCookie.png';
import ImgFooter from '../../Assets/milkPlain.png';

const CookieClicker = ({ handleClick, handleReset, count, active }) => {
  return (
    <div className="text-center mt-4">
      {' '}
      <Badge pill bg="light" text="dark">
        Hungry Sprocket's bakery
      </Badge>
      <div className="mt-4">
        <Button onClick={handleReset} variant="info">
          RESET
        </Button>
      </div>
      <div className={style.counter}>
        <h2>{count} cookies</h2>
        <p>per second: 0.0</p>
      </div>
      <div className={style.cookieContainer}>
        <button className={style.cookie} onClick={handleClick}>
          <img src={Cookie} className="img-fluid" />
          <div
            className={`${active ? style.plusCookieActive : style.plusCookie}`}
          >
            +1
          </div>
        </button>
      </div>
      <div className={style.footer}>
        <img src={ImgFooter} className="img-fluid" />
      </div>
    </div>
  );
};

export default CookieClicker;
