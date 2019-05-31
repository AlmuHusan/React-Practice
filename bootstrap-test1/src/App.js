import React from 'react';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import styles from './app.css';
import './Button.css'

function App() {
  return (<div className={styles.app}>
    <ButtonToolbar>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="info">Info</Button>
  <Button variant="light">Light</Button>
  <Button variant="dark">Dark</Button>
  <Button variant="link">Link</Button>
</ButtonToolbar>;
  </div>);
  
  
}

export default App;

/*<div >
    <button type="button" style={{display:'flex' ,marginLeft: 'auto'}}>Hi </button>
    <label>Hi</label>
    <button type="button" style={{display:'flex' ,marginRight: 'auto'}}>Hello </button>
    </div>

    <div className="button2"><button >Su</button><button> Du</button></div> */
