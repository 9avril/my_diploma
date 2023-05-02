import React, { useState } from "react";
import "./RadiationModal.css";
import { useRef } from "react";
import { useEffect } from "react";

const RadiationModal = ({ show, onHide, imgUrl }) => {
  const [loading, setLoading] = useState(true);

  const modalRef = useRef(null);

  useEffect(() => {
    if (show && modalRef.current) {
      modalRef.current.focus();
    }
  }, [show]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onHide();
    }
  };

  return show ? (
    <div
      className={`modal${show ? " modal-open" : ""}`}
      onClick={onHide}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      ref={modalRef}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
        <img
          src={imgUrl}
          alt="Radiation pattern"
          onLoad={handleImageLoad}
          className="modal-image"
        />
      </div>
    </div>
  ) : null;
};

export default RadiationModal;
