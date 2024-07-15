import React, { useState } from "react";
import "./AddClientContent.scss";
import axios from 'axios'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alerts from '../../../Alerts/Alerts'
import { uploadData } from '../../../../UploadImageAndVideosToSupabaseBucket/UploadImageAndVideosToSupabaseBucket'

const AddClientContent = ({ show, setShow, adminId, adminName, adminLastName, selectedUser }) => {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [selectedTab, setSelectedTab] = useState("")
    const [loader, setLoader] = useState("false")

    const tabs = ["Stills", "Motion Pictures"]

    const changeTabs = (tab) => {
        setSelectedFiles([])
        setSelectedTab(tab)
    }

    const handleClose = () => {
        setSelectedFiles([])
        setSelectedTab("")
        setShow(false);
    };

    const handleCloseAndSaveTheRole = async () => {
        setShow(false);
    };

    const selectedStillFile = async (e) => {
        const files = Array.from(e.target.files);

        if (files.length > 0) {
            setSelectedFiles(files);
        }
    };


    const addClientContent = async (event) => {
        event.preventDefault();

        if (selectedFiles.length === 0) {
            setErrorMessage('No stills were uploaded. Please upload stills.');
            setTimeout(() => {
                setErrorMessage(null);
            }, 3000);
            return;
        }

        if (selectedFiles.length >= 10) {
            setErrorMessage('Add 10 or less files per add');
            setTimeout(() => {
                setErrorMessage(null);
            }, 3000);
        }

        setLoader(true)
        const bucketName = 'clients';
        const path = `${selectedTab}/${adminName}${adminLastName}${adminId}${selectedUser.first_name}${selectedUser.last_name}${selectedUser.id}`;
        const data = await uploadData(selectedFiles, bucketName, path);
        if (data.every((result) => result.success)) {
            for (let i = 0; i < data.length; i++) {
                const fileType = selectedFiles[i].type.split('/')[1];
                console.log(`code${[i]}`, data[i].code, fileType)

                const userInfo = {
                    creatorId: adminId,
                    srcId: `${data[i].code}.${fileType}`,
                    clientId: selectedUser.id,
                    category: selectedTab,
                    clientEmail: selectedUser.email,
                    username: `${selectedUser.first_name} ${selectedUser.last_name}`,
                    photographer: `${adminName} ${adminLastName}`,
                };
                console.log({ userInfo });

                const res = await axios.post('http://localhost:4000/add_client_source', userInfo);
                console.log({ res })
                if (res.data.success) {
                    setSuccessMessage(res.data.message);
                    setTimeout(() => {
                        setSuccessMessage(null);
                    }, 3000);
                    setLoader(false)
                    setSelectedTab("")
                    setSelectedFiles([]);
                }
            }
        } else {
            // Handle error messages from individual uploads
            const errorMessages = data.filter((result) => !result.success).map((result) => result.message);
            setErrorMessage(`Failed to upload one or more files: ${errorMessages.join("; ")}`);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add client source...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {tabs.map(item => {
                    return (
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={item} onClick={() => changeTabs(item)} />
                            <label class="form-check-label" for="exampleRadios1">
                                {item}
                            </label>
                        </div>
                    )
                })}
                <hr />
                <p>{selectedFiles.length > 0 ? `${selectedFiles.length} files selected` : "Zero files selected"}</p>
                <hr />
                <div className="AddClientContent">
                    {selectedTab && (
                        <form action="">
                            <div className="input-box-file">
                                <input
                                    onChange={(e) => selectedStillFile(e)}
                                    style={{ display: "none" }}
                                    accept={selectedTab === "Stills" ? "image/*" : "video/*"}
                                    multiple
                                    type="file"
                                    name="file"
                                    id="file"
                                />
                                <label htmlFor="file">

                                    {selectedTab === "Stills" ?
                                        <box-icon name='camera-off' size="lg" color='#000000' ></box-icon> :
                                        <box-icon name='video-recording' size="lg" color='#000000' ></box-icon>
                                    }
                                </label>
                            </div>
                        </form>
                    )}


                </div>
            </Modal.Body>

            {selectedFiles.length > 0 && (
                <Modal.Footer>

                    {/*} <button class="btn btn-info" type="button" disabled>
                            <span
                                class="spinner-grow spinner-grow-sm"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            Loading roles...
                        </button> */}
                    <Button style={{ width: "100%" }} className="btn btn-success" disabled={selectedFiles.length <= 0} onClick={addClientContent}>
                        Add {selectedTab}
                    </Button>
                </Modal.Footer>

            )}


            <Alerts successMessage={successMessage} errorMessage={errorMessage} />
        </Modal>

    );
};

export default AddClientContent;
