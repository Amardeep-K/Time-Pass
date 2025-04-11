import React, { useState,useEffect } from 'react';
import './App.css';
import Punishment from './Punishment';
import Thankyou from './Thankyou';
import emailjs from 'emailjs-com';

function App() {
  const [isForgiven, setIsForgiven] = useState(false);
  const [isPunishment, setIsPunishment] = useState(false);
  const [ isPunishClicked ,setIsPunishClicked]=useState(false);
  const [isForgiveClicked , setIsForgiveClicked]=useState(false);
  const audio = new Audio('/aot.mp3'); // Path to audio in the public folder // Loop the music

  // Function to play the Death Note theme music
  const playTyMusic = () => {
    audio.play(); // Play the music
  };

  // Function to stop the music
  const stopTyMusic = () => {
    audio.pause(); // Pause the music
    audio.currentTime = 0; // Reset to the start
  };
  

  const handleForgive = () => {
    setIsForgiven(true);
    setIsPunishment(false);
    playTyMusic();
  };

  const handlePunish = () => {
    setIsPunishment(true);
    setIsForgiven(false);
    setIsPunishClicked(true);
    stopTyMusic();
    
  };
  useEffect(() => {
    // Initialize EmailJS with your actual User ID
    emailjs.init("dsOepsWBqlNsbJELJ"); // Replace with your User ID from EmailJS
  }, []); 

  return (
    <div className="App">
      <div className="container">
        <h1>I'm Really Sorry 😔</h1>
        <p>Please choose what you feel is right...</p>
        
        <div className="buttons">
          <button onClick={handleForgive} className={isPunishClicked ? 'invisible':''} >I Forgive You ❤️</button>
          <button onClick={handlePunish} className={isPunishClicked ? 'invisible':''}>You Deserve Punishment 😡</button>
        </div>

        {isForgiven && <Thankyou/>}
        {isPunishment && <Punishment/>}
      </div>
    </div>
  );
}

export default App;
