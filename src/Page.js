import React from "react";
import Modal from "react-modal";
import {  useState } from 'react';
import "./styles.css"
Modal.setAppElement("#root")
function Page(props){
    const [modalVisiblity,handleModalView]=useState(true);
  const handleModal=()=>{
    handleModalView(true);
  }
  console.log(props.title)
    return(
        <>
      <button onClick={handleModal}>Open the modal</button>
      <Modal  isOpen={modalVisiblity} onRequestClose={()=>{handleModalView(false)}} 
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:"grey",
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
          position: 'absolute',
          top: '150px',
          left: '150px',
          right: '150px',
          bottom: '150px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
          textAlign:"center",
          color:"blue"
        }
      }}>
        
        
        
        <h1>{props.title}</h1>
        <h3>{props.body}</h3>
        <h3 style={{position:"absolute",bottom:"0px", left:"44%", borderStyle:"solid"}}>{props.footer}</h3>

        <div>
          <button onClick={()=>{handleModalView(false)}}>Close Modal</button>
        </div>
      </Modal>
      <title>{props.title}</title>
      </>

    )
}
export default Page;