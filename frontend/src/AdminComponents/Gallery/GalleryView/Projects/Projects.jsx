import React, { useState } from 'react'
import './Projects.scss'

const Projects = ({adminId, adminName, adminLastName, allCategory}) => {
  const [itemAdminId, setItemAdminId] =useState(adminId)
  const [srcName, setSrcName] =useState(null)
  const [src, setSrc] =useState(null)
  const [folder, setFolder] =useState(null)
  const [subFolderName, setSubFolderName] =useState(null)
  const [category, setCategory] =useState(null)
  const [source_description, setSource_description] =useState(null)
  const [photographer, setPhotographer] =useState(null)
  return (
    <div className='addProjectsForm'>
      <div class="container">
        <form action="">
          <h1>Projects</h1>
          <div class="input-box-file">

            <input style={{ display: "none" }}
              type="file" name="file" id="file" required />
            <label htmlFor="file">
            <box-icon name='buildings' size="lg" color='#00eeff' ></box-icon>
            </label>

          </div>
          <div class="input-box">
            <input type="text" placeholder="Username" required />
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit" className="btn btn-outline-info">Add motion pictures</button>

        </form>
      </div>
    </div>
  )
}

export default Projects