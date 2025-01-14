import React, {useState} from 'react'

const { TypeAnimation } = require("react-type-animation");

const [typingStatus, setTypingStatus] = useState('Initializing');
 
<TypeAnimation
  sequence={[
    1500,
    () => {
      setTypingStatus('Typing...');
    },
    'ATOMICO',
    () => {
      setTypingStatus('Done Typing');
    },
    3000,
    () => {
      setTypingStatus('Deleting...');
    },
    '',
    () => {
      setTypingStatus('Done Deleting');
    },
  ]}
  repeat={Infinity}
/>;