import React from 'react'
import Modal from "react-bootstrap/Modal";
import './SelectedItems.scss'


const SelectedItems = ({ show, handleClose, selectedUserInformation }) => {
    return (
        <Modal show={show} onHide={handleClose} 
        // size="lg" fullscreen={true}
        >
            <Modal.Header closeButton>
                <Modal.Title>{selectedUserInformation.username}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className='SelectedItems'>
                <img style={{height:"100%" , margin:"auto"}} src={`https://rqufzhhcewwjafsuxipv.supabase.co/storage/v1/object/public/clients/Stills/${selectedUserInformation.adminName}${selectedUserInformation.adminLastName}${selectedUserInformation.adminId}${selectedUserInformation.username}${selectedUserInformation.clientId}/${selectedUserInformation.selectedItem}`} alt="" />
        </div>
            </Modal.Body>
            <Modal.Footer>


                <button style={{ width: "100%" }} className="btn btn-danger">
                    Delete
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default SelectedItems