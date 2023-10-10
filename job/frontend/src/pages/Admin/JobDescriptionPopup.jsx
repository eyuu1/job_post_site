import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default () => (
  <Popup trigger={<button className='mt-20'> Trigger</button>}  position="right center">
    <div>Popup content here !!</div>
  </Popup>
);