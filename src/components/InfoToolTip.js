import React from "react";
import closeButton from "../images/Close-Icon.svg";
import successIcon from "../images/success.svg";
import errorIcon from "../images/fail.svg";

const InfoToolTip = ({isOpen, onClose, status}) => {
  return (
    <div
      className={`modal modal_type_info ${
        isOpen ? "modal_opened" : ""
      }`}
    >
      <div className="modal__content">
        <button
          className="modal__close-btn"
          type="button"
          aria-label="close"
          onClick={onClose}
        >
          <img
            className="modal__close-icon"
            src={closeButton}
            alt="closing icon"
          />
        </button>
        {status === "success" ? (
            <div>
                <img className="modal__icon" src={successIcon} alt="success-sign"/>
                <p className="modal__status-message">Success! You have now been registered.</p>
            </div>
        ) : (
            <div>
                <img className="modal__icon" src={errorIcon} alt="fail-sign"/>
                <p className="modal__status-message">Oops, something went wrong! Please try again.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default InfoToolTip;
