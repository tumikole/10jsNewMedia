import React from "react";
import "./form.scss";

export const Form = ({ formInputs, headerText, required }) => {
  console.log({ headerText });
  return (
    <div className="adminForms">
      <form action="" className="adminForm">
        <h2 className="header">{headerText}</h2>
        <div className="formInputs">
          {formInputs.map((input) => {
            return (
              <div className="inputs form-group">
                <div
                  className="labelContainer"
                  style={{
                    display: input.type === "button" ? "none" : "block",
                  }}
                >
                  <label className="form-label" for="">
                    {input.placeholder} {/* */}
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>
                  </label>
                </div>
                <input
                  type={input.type}
                  className={
                    input.type === "button"
                      ? "sendButton btn btn-info"
                      : "form-control"
                  }
                  style={{marginTop: input.type === "button" ? "2rem" : "0", width: input.type === "button" ? "100%" : "100%"}}
                  placeholder={
                    input.type !== "file" && input.type !== "button"
                      ? input.placeholder
                      : null
                  }
                  value={input.value}
                />
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};
