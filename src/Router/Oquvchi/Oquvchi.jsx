import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';
import { Modal } from 'antd';
import { FaRegUserCircle } from "react-icons/fa";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeleteImage = () => {
    setSelectedImage(null); // Rasimni o'chirish
  };

  return (
    <div className='content' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {!selectedImage && (
        <label htmlFor="upload-button" style={{ marginRight: '10px', cursor: 'pointer' }}>
          <FaRegUserCircle style={{ fontSize: '30px', color: '#1890ff' }} />
        </label>
      )}
      <input id="upload-button" type="file" onChange={handleImageChange} style={{ display: 'none' }} />
      {selectedImage && (
        <div style={{ position: 'relative', display: 'inline-block', borderRadius: '50px', overflow: 'hidden' }}>
          <img src={selectedImage} alt="Selected" style={{ width: '30px', height: '30px', borderRadius: '50px', objectFit: 'cover' }} />
          <div 
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: ' ', opacity: 0, transition: 'opacity 0.3s' }} 
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
          >
            <AiOutlineEye
              style={{ color: 'dodgerblue', fontSize: '24px', cursor: 'pointer', marginRight: '10px' }}
              onClick={showModal}
            />
            <AiOutlineDelete
              style={{ color: 'red', fontSize: '24px', cursor: 'pointer' }}
              onClick={handleDeleteImage}
            />
          </div>
        </div>
      )}
      <Modal title="Selected Image" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <img src={selectedImage} alt="Modal Preview" style={{ width: '100%' }} />
      </Modal>
    </div>
  );
};

export default ImageUploader;
