import React, { FC } from "react";

import styles from "./ImageDetails.module.scss";

type ImageResult = {
  collections: number;
  comments: number;
  downloads: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
};
interface ImageDetailsProps {
  imageResult: ImageResult;
}

const ImageDetails: FC<ImageDetailsProps> = ({ imageResult }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Image Author: {imageResult.user || imageResult.user_id}
      </div>
      <div className={styles.text}>
        Tags: {imageResult.tags}
      </div>
      <img src={imageResult.largeImageURL} alt={imageResult.tags}/>
    </div>
  );
};

export default ImageDetails;
