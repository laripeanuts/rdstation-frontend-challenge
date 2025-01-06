import React from 'react';

function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="bg-cyan-700 hover:bg-cyan-500 text-white font-bold py-2.5 px-4 rounded"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
