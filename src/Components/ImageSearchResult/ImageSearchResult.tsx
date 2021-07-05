import React, {FC} from 'react';

import styles from './ImageSearchResult.module.scss';

export type ImageResult = {
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
}

interface ImageSearchResultProps {
	imageResult: ImageResult;
    setSelectedImage: (image: ImageResult) => void;
}
const ImageSearchResult: FC<ImageSearchResultProps> = ({imageResult, setSelectedImage}) => {

    const handleClick = () => {
        setSelectedImage(imageResult);
    }
	return <div className={styles.imageResult}>
        <img src={imageResult.previewURL} alt={imageResult.tags} onClick={handleClick}/>
	</div>
}

export default ImageSearchResult;