import React from "react";

const SpinnerAnim = () => {
  return (
    <>
      <div className="d-flex justify-content-center py-30 text-center row py-4">
        <div className="spinner-border  m-25" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> 
    </>
  );
};

export default SpinnerAnim;
