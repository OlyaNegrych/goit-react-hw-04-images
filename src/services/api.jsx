import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '29443813-ca22e65ccc725dfd305ed5d5a';

export const getImages = async ({ searchQuery, page }) => {
  const options = {
    params: {
      q: searchQuery,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  };
  const response = await axios.get('/', options);
  return response.data;
};
