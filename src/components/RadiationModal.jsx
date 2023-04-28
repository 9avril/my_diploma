import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const RadiationModal = ({ show, onHide, imgUrl }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  console.log("imgUrl:", imgUrl);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body className="text-center">
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
        <img
          src={imgUrl}
          alt="Radiation pattern"
          onLoad={handleImageLoad}
          className="w-1/2 h-auto"
          style={{ maxWidth: "400px", maxHeight: "400px" }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default RadiationModal;
