import axios from "axios";

const PIXABAY_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

const PixabayApi = () => {
  return axios.create({
    baseURL: `https://pixabay.com/api/?key=${PIXABAY_KEY}`,
  });
};

const getImageSearchResults = async (query, page = 1) => {
  // TODO: add logic to limit the query to 100 characters
  try {
    const response = await PixabayApi().get(
      '',
      {
        params: {
          q: query,
          image_type: "photo",
          safesearch: true,
          page: page,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log("Error retrieving image search results from Pixabay:", err);
  }
};

const PixabayService = {
  getImageSearchResults,
};

export default PixabayService;
