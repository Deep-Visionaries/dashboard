// Modal.js
import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg shadow-lg text-black w-96 relative" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{content}</p>
        <div className="flex justify-end gap-3">
          <Link to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={onClose}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;

