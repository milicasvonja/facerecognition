import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f5">
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 h-10" type="text"></input>
          <button className="button w-30 h-10 grow f5 link ph3 pv2 dib black">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
