import React, {useRef, useState} from "react";
import './buttonproductform.css'

const ButtonProductForm = ({getImage}) => {
    const imageSelectorRef = useRef();
    const [uploadimage, setuploadimage] = useState([]);
    
  
  const handleClick = () => {
    imageSelectorRef.current.click();    
  }
  const handleChange = (event) => {
    const reader = new FileReader();
    reader.onload = (file) => {
      setuploadimage(file.target.result); 
      getImage(file.target.result);
    }
    reader.readAsDataURL(event.target.files[0]);
  }
    return (
        <div className="container_img_picker">
          <input 
            id="image_picker"
            ref={imageSelectorRef}
            className="sixth_box" 
            type="file" 
            style={{display: 'none'}}
            onChange={handleChange}
          ></input>
          {uploadimage.length>0 ? 
          <img 
          className="img_preview" 
          src={uploadimage} 
          href="None"/> : 
          <button 
          className="but-prodform-image"
          onClick= {handleClick}
          >+</button>}  
        </div> 
    )
}

export default ButtonProductForm;