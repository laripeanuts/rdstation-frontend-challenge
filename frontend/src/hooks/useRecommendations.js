// useRecommendations.js

import { useState } from 'react';
import recommendationsService from '../services/recommendation/recommendation.service';

function useRecommendations(products) {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = (formData) => {
    return recommendationsService.getRecommendations(formData, products);
  };

  return { recommendations, getRecommendations, setRecommendations };
}

export default useRecommendations;
