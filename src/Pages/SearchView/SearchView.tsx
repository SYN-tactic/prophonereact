import React, { FC, useEffect, useState, SyntheticEvent } from 'react';

import PixabayService from '../../Services/PixabayService';
import ImageSearchResult from '../../Components/ImageSearchResult/ImageSearchResult';
import styles from './SearchView.module.scss';

interface SearchViewProps {
    setSelectedImage: ()=> void;
}
const SearchView : FC<SearchViewProps> = ({setSelectedImage}) => {

    const [imageSearchQuery, setImageSearchQuery] = useState('apple orchard');
    const [searchQueryInput, setSearchQueryInput] = useState('');

    const [searchResults, setSearchResults] = useState([]);

	useEffect(()=> {
        const grabImages = async ()=> {
            const results = await PixabayService.getImageSearchResults(imageSearchQuery);
            if (results) {
                setSearchResults(results.hits);
            }
        }
        if (imageSearchQuery) {
            grabImages();
        }
	}, [imageSearchQuery]);

    // Helper to delay input
    useEffect(() => {
        const timeout = setTimeout(() => {
            setImageSearchQuery(searchQueryInput);
        }, 800);
        return () => {
            clearTimeout(timeout);
        }
    }, [searchQueryInput]);

    const handleChange = (e: SyntheticEvent) => {
        const element = e.target as HTMLInputElement;
        setSearchQueryInput(element.value);
    }

	return <div className={styles.container}>
        <input className={styles.input} onChange={handleChange} placeholder="Search Here"/>
        <div className={styles.searchResults}>
		{searchResults.map((result, i)=> <ImageSearchResult key={`image-${i}`} imageResult={result} setSelectedImage={setSelectedImage}/>)}
        </div>
	</div>
}

export default SearchView;