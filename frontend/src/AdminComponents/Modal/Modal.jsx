import React, { useState } from "react";
import "./Modal.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalShow = ({ show, setShow, content, setSelectedRole }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemRole, setSelectedItemRole] = useState(null);

  const handleCheckboxChange = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleClose = () => {
    setSelectedItemId(null);
    setSelectedItemRole(null);
    setShow(false);
    setSelectedRole(null)
  };

  const handleCloseAndSaveTheRole = async () => {
    setSelectedRole(selectedItemRole);
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {content &&
            content.map((item) => {
              return (
                <div
                  key={item.id}
                  className="itemSelect"
                  onClick={() => setSelectedItemRole(item.role)}
                >
                  <input
                    type="checkbox"
                    checked={selectedItemId === item.id}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <li>{item.role}</li>
                </div>
              );
            })}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" disabled={!selectedItemId} onClick={handleCloseAndSaveTheRole}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalShow;
