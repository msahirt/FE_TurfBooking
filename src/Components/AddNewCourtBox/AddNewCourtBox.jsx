import React, { useRef, useState } from "react";
import "./AddNewCourtBox.css";
import CustomInput from "../Common/CustomInput/CustomInput";
import addIcon from '@assets/addicon.svg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AxiosInstance from "../../Config/apicall";
import { ErrorToast, successToast } from "../../Plugins/Toast/Toast";
import { useNavigate } from "react-router-dom";

function AddNewCourtBox() {
    const [courtData, setCourtData]=useState({})
    const fileInputRef = useRef()
    const [selectedFiles, setSelectedFiles] = useState([])
    const navigate = useNavigate()
    const handlechange= (e)=>{
        setCourtData({...courtData,[e.target.name]:e.target.value})
    }
    const handleInputFileChange=(e)=>{
        const files = Array.from(e.target.files)
        const validFiles=files.filter((file)=>{return file.type.startsWith('image/') || file.type.startsWith('video/') })

        setSelectedFiles(prevState=>[...prevState,...validFiles])
    }
    const handleAddIconClick=()=>{
        fileInputRef.current.click()
    }
    const handleDescriptionChange=(data)=>{
      setCourtData({...courtData, description:data})
    }
    const handleCreateCourt = ()=>{

      const formDatatoSend= new FormData()
      selectedFiles.forEach((file)=>{
        formDatatoSend.append('files', file)
      })

      Object.entries(courtData).forEach((key,value)=>{
        formDatatoSend.append(key,value)
      })
      AxiosInstance({
        url:'/admin/createnewcourt',
        method:'post',
        data:formDatatoSend,
        headers:{
          'Content-Type':'multipart/from-data'
        }
      }).then((res)=>{
        successToast('New court added successfully')
        navigate('/home')
      })
      .catch((err)=>{
        ErrorToast('Something went wrong')
      })
    }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between gap-3 px-3 mt-3">
          <h3>Add New Court</h3>
          <span className="d-flex gap-3">
            <button className="common-button bg-black text-white">
              Cancel
            </button>
            <button className="common-button" onClick={handleCreateCourt}>Create</button>
          </span>
        </div>

        <div className="col-lg-4 col-md-6 mt-3">
            <CustomInput type={'text'} name={'name'} label={'Name'} value={courtData.name} onchange={handlechange} />  
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
            <CustomInput type={'text'} name={'location'} label={'Location'} value={courtData.location} onchange={handlechange} />  
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
            <CustomInput type={'text'} name={'type'} label={'Type'} value={courtData.type} onchange={handlechange} />  
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
            <CustomInput type={'text'} name={'address1'} label={'Address Line 1'} value={courtData.address1} onchange={handlechange} />  
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
            <CustomInput type={'text'} name={'address2'} label={'Address Line 2'} value={courtData.address2} onchange={handlechange} />  
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
            <CustomInput type={'text'} name={'address3'} label={'Address Line 3'} value={courtData.address3} onchange={handlechange} />  
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
            <CustomInput type={'text'} name={'landMark'} label={'Land Mark'} value={courtData.landMark} onchange={handlechange} />  
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
            <CustomInput type={'number'} name={'pin'} label={'Pin code'} value={courtData.pin} onchange={handlechange} />  
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
            <CustomInput type={'number'} name={'ContactNumber'} label={'Contact Number'} value={courtData.ContactNumber} onchange={handlechange} />  
        </div>

        {/* <div className="mt-3 d-flex flex-wrap gap-2">
          
          {selectedFiles.map((file,index)=>
          <div key={index}>
          {file.type.startsWith('image/')&& <img src={URL.createObjectURL(file)} height={150} alt={`Image ${index}`}/>}
          {file.type.startsWith('video/')&& <video controls src={URL.createObjectURL(file)} height={150}/>}
          </div>
          )}

          <div>
            <input ref={fileInputRef}
            type="file"
            
            onchange={handleInputFileChange}
            multiple
            accept="image/*, video/*"
            style={{display:"none"}}
            />
            <img src={addIcon} width={'150px'} height={'150px'} alt="Add_Image/Video" onClick={handleAddIconClick}/>
          </div>
        </div> */}
        
    <div className="mt-3 d-flex flex-wrap">
      {/* <input ref={fileInputRef}
        type="file"
        multiple
        accept="image/*, video/*"
        onChange={handleInputFileChange}
        style={{display:"none"}}

      />
      <img src={addIcon} width={'150px'} height={'150px'} alt="Add_Image/Video" onClick={handleAddIconClick}/> */}

      <div className="d-flex flex-wrap gap-2">
        {selectedFiles.map((file, index) => (
          <div key={index}>
            {file.type.startsWith('image/') && (
              <img
                src={URL.createObjectURL(file)}
                alt={`Image ${index}`}
                height={150}
                // style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
            )}
            {file.type.startsWith('video/') && (
              <video controls height={150}
              // style={{ maxWidth: '100px', maxHeight: '100px' }}
              >
                <source src={URL.createObjectURL(file)} type={file.type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
      <input ref={fileInputRef}
        type="file"
        multiple
        accept="image/*, video/*"
        onChange={handleInputFileChange}
        style={{display:"none"}}

      />
      <img src={addIcon} width={'150px'} height={'150px'} alt="Add_Image/Video" onClick={handleAddIconClick}/>
    </div>
        <ReactQuill className="mt-3" style={{height:'300px'}} theme="snow" value={courtData.description} onChange={handleDescriptionChange} />
      </div>
    </div>
  );
}

export default AddNewCourtBox;
