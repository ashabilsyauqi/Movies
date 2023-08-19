import React from "react";
import Modal from "react-modal";
import './Components.css'

export default function ModalCard({ movie, closeModal }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <Modal
        isOpen={!!movie}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {movie && (
          <div>


            <h2>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {parseFloat(movie.vote_average).toFixed(1)}</p>
            {/* Tambahkan informasi lainnya tentang film di sini */}
            <button onClick={closeModal}>Close</button>
            


          </div>
        )}
      </Modal>
    </div>
  );
}
