import React from 'react'
import { Form } from '../../form'

const AddBlog = () => {
const formInputs = [
    { type: "file", placeholder: "Blog stills", value: "" },
    { type: "text", placeholder: "Blog header" },
    { type: "text", placeholder: "Blog description" },
    { type: "text", placeholder: "Blog post" },
    { type: "button", placeholder: "", value: "Add blog" },
  ];

  return (
    <div>
        <Form formInputs={formInputs} headerText="Add blog" required={true}/>
    </div>
  )
}

export default AddBlog