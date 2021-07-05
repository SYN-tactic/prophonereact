import { useState } from "react";

import SearchView from "./Pages/SearchView/SearchView";
import ImageDetails from "./Components/ImageDetails/ImageDetails";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState({});
  return (
    <div className="App">
      {selectedImage && Object.keys(selectedImage).length !== 0 ? (
        <ImageDetails imageResult={selectedImage} />
      ) : (
        <SearchView setSelectedImage={setSelectedImage} />
      )}
    </div>
  );
}

export default App;
