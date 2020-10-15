import React from 'react';

import Title from '../components/ImageGallery/Title';
import UploadForm from '../components/ImageGallery/UploadForm';
import ImageGrid from '../components/ImageGallery/ImageGrid';

import './ImageGallery.css';

const ImageGallery = () => {
    return (
      <div className="title">
        <Title/>
        <UploadForm/>
        <ImageGrid />
      </div>  
    )
}

export default ImageGallery;