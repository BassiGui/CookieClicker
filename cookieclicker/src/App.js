import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Left from './Components/Col-Left/CookieClicker';
import Right from './Components/Col-Right/Right';
import Center from './Components/Col-Center/Center';
import ImgLateral from './Assets/panelVertical.png';

let interval = null;

function App() {
  const [count, setCount] = React.useState(0);
  const [cursorCounter, setCursorCounter] = React.useState(0);
  const [cursorPrice, setCursorPrice] = React.useState(10);
  const [cursorCps, setCursorCps] = React.useState(1);
  const [fps, setFps] = React.useState(1000);
  const [on, setOn] = React.useState(false);
  const [ativo, setAtivo] = React.useState(false);

  React.useEffect(() => {
    document.title = `${count} cookies - Cookie Clicker`;
  }, [count]);

  function handleClick() {
    try {
      setOn(true);
      setCount(count + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setOn(false);
      }, 300);
    }
  }

  function handleReset() {
    setCursorCounter(0);
    setCursorCps(1);
    setCursorPrice(10);
    setFps(1000);
    setCount(0);
    setOn(false);
  }

  function handleAutoclick() {
    if (count >= cursorPrice) {
      setAtivo(true);
      setCount(count - cursorPrice);
      setCursorCounter(cursorCounter + 1);
      console.log(cursorCounter);
      console.log(count);
      //setCursorPrice(parseInt(cursorPrice * (Math.random() + 1)));
    }
  }

  function updateValues() {
    setCount(count + cursorCps * cursorCounter * (fps / 1000));
  }

  React.useEffect(() => {
    if (ativo) {
      interval = setInterval(() => {
        updateValues();
      }, fps);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="App w-100">
      <Row className="g-0">
        <Col md={4}>
          <Left
            handleReset={handleReset}
            active={on}
            count={count}
            handleClick={handleClick}
          />
        </Col>
        <Col md={6} className="d-flex justify-content-between">
          <img src={ImgLateral} />
          <Center />
          <img src={ImgLateral} />
        </Col>
        <Col md={2}>
          {' '}
          <Right handleAutoclick={handleAutoclick} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
