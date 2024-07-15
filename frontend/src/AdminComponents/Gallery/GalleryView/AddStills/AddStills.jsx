import React, { useState } from 'react';
import axios from 'axios'
import './AddStills.scss';
import { uploadData } from '../../../../UploadImageAndVideosToSupabaseBucket/UploadImageAndVideosToSupabaseBucket';
import Alerts from '../../../Alerts/Alerts';

function AddStills({ adminId, adminName, adminLastName, allFolders }) {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [srcName, setSrcName] = useState(null)
    const [folder, setFolder] = useState(null)
    const [subFolderName, setSubFolderName] = useState(null)
    const [selectedSubfolderFolderName, setSelectedSubFolderName] = useState(null)
    const [source_description, setSource_description] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleFolderChange = (event) => {
        const selectedFolderId = parseInt(event.target.value);
        const selectedFolder = allFolders.find(folder => folder.id === selectedFolderId);
        setFolder(selectedFolder);
        // Set subFolderName to the first subfolder of the selected folder
        if (selectedFolder) {
            setSubFolderName(selectedFolder.subfolders[0]);
        } else {
            setSubFolderName(null);
        }
    };

    const handleSubFolderChange = (event) => {
        const selectedSubFolderName = event.target.value;
        setSelectedSubFolderName(selectedSubFolderName);
    };

    const selectedStillFile = async (e) => {
        const files = Array.from(e.target.files);

        console.log({ files });
        if (files.length > 0) {
            setSelectedFiles(files);
        }
    };

    const addStills = async (event) => {
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

        const bucketName = 'admin';
        const path = `Stills/${adminName}${adminLastName}${adminId}`;
        const data = await uploadData(selectedFiles, bucketName, path);
        console.log({ data })
        if (data.every((result) => result.success)) {
            for (let i = 0; i < data.length; i++) {
                const fileType = selectedFiles[i].type.split('/')[1];
                console.log(`code${[i]}`, data[i].code, fileType)

                const userInfo = {
                    creatorId: adminId,
                    srcName: i === 0 ? srcName : `srcName${i}`,
                    srcId: `${data[i].code}.${fileType}`,
                    folder: folder.folder_name,
                    subFolderName,
                    category: 'Stills',
                    source_description,
                    photographer: `${adminName} ${adminLastName}`
                };

                const res = await axios.post('http://localhost:4000/add_source', userInfo);

                if (res.data.success) {
                    setSuccessMessage(res.data.message);
                    setTimeout(() => {
                        setSuccessMessage(null);
                    }, 3000);
                }
            }

            setSelectedFiles([]); // Reset selectedFiles state after successful upload
            setSrcName(null)
            setFolder(null)
            setSubFolderName(null)
            setSelectedSubFolderName(null)
            setSource_description(null)

        } else {
            // Handle error messages from individual uploads
            const errorMessages = data.filter((result) => !result.success).map((result) => result.message);
            setErrorMessage(`Failed to upload one or more files: ${errorMessages.join("; ")}`);
        }
    };

    return (
        <div className='addStillsForm'>
            <div className="container">
                <form onSubmit={addStills}>
                    <h1>Stills</h1>
                    <div className="input-box-file">
                        <input onChange={(e) => selectedStillFile(e)} style={{ display: "none" }} accept="image/*" multiple type="file" name="file" id="file" />
                        <label htmlFor="file">
                            <box-icon name='camera-off' size="lg" color='#00eeff' ></box-icon>
                        </label>
                    </div>
                    {
                        selectedFiles.length > 0 && (
                            <div className="input-box">
                                <input onChange={(e) => setSrcName(e.target.value)} type="text" placeholder='Source name...' />
                            </div>

                        )
                    }
                    {srcName && (
                        <div className="input-box">
                            <select className="form-select" style={{ backgroundColor: 'transparent', color: "white" }} aria-label="Select folder" onChange={handleFolderChange}>
                                <option value="">Select a folder</option>
                                {allFolders.map((folder) => (
                                    <option key={folder.id} value={folder.id}>{folder.folder_name}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    {folder && (
                        <div className="input-box">
                            <select style={{ backgroundColor: 'transparent', color: "white" }} className="form-select" aria-label="Select subfolder" onChange={handleSubFolderChange}>
                                <option value="">Select a subfolder</option>
                                {folder.subfolders.map((subfolder, index) => (
                                    <option key={index} value={subfolder}>{subfolder}</option>
                                ))}
                            </select>
                        </div>
                    )}


                    {selectedSubfolderFolderName && (
                        <textarea style={{ backgroundColor: 'transparent', color: "white" }} placeholder="Description" onChange={(e) => setSource_description(e.target.value)} required />
                    )}
                    <br />
                    <br />
                    <button disabled={!source_description} type="submit" className="btn btn-outline-info">Add stills</button>
                </form>
                <br />
                <br />
                <Alerts successMessage={successMessage} errorMessage={errorMessage} />
            </div>
        </div>
    );
}

export default AddStills;
