import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Punishment.css';
import Success from './Success';

const Punishment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const audio = new Audio('/death_note.mp3'); // Path to audio in the public folder
  audio.loop = true;  // Loop the music

  // Function to play the Death Note theme music
  const playDeathNoteMusic = () => {
    audio.play(); // Play the music
  };

  // Function to stop the music
  const stopDeathNoteMusic = () => {
    audio.pause(); // Pause the music
    audio.currentTime = 0; // Reset to the start
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to EmailJS
    emailjs.sendForm('service_lz8z6ko', 'template_qpfyq8h', e.target)
      .then((result) => {
        console.log(result.text);  // Log success message
        alert('Your punishment has been submitted 😖');
      }, (error) => {
        console.log(error.text);  // Log error message
        alert('Failed to send punishment details 😢');
      });

    // Reset the form fields
    e.target.reset();
    setIsSubmitted(true);
    closeModal(); // Close the modal after submission
  };

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
    playDeathNoteMusic();
  };

  const closeModal = () => {
    stopDeathNoteMusic();
    setIsModalOpen(false); // Close the modal
    
  };

  return (
    <>
      <button onClick={openModal} className="open-modal-btn">
      Chalo dedo Ji Saja 🥺 💗
      </button>

      {/* Modal for Punishment Form */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <form onSubmit={handleSubmit} netlify>
              <h2>Okay... I Deserve It 😣</h2>
              <label htmlFor="type">Type of Punishment</label>
              <input type="text" name="type" required />
    
              <label htmlFor="details">Details</label>
              <textarea name="details" required />
    
              <button type="submit">Submit Punishment</button>
            </form>
          </div>
        </div>
      )}

      {isSubmitted && <Success />}
    </>
  );
};

export default Punishment;
