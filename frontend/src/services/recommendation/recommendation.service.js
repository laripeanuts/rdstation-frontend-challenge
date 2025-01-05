// getRecommendations.js

const calculateRelevance = (product, selectedPreferences, selectedFeatures) => {
  let relevance = 0;

  (selectedPreferences || []).forEach((preference) => {
    if (product.preferences.includes(preference)) {
      relevance += 1;
    }
  });

  (selectedFeatures || []).forEach((feature) => {
    if (product.features.includes(feature)) {
      relevance += 1;
    }
  });

  return relevance;
};

const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: 'MultipleProducts',
  },
  products
) => {
  const { selectedPreferences, selectedFeatures, selectedRecommendationType } =
    formData;

  const productsWithRelevance = products.map((product) => ({
    ...product,
    relevance: calculateRelevance(
      product,
      selectedPreferences,
      selectedFeatures
    ),
  }));

  const filteredProducts = productsWithRelevance.filter(
    (product) => product.relevance > 0
  );

  const sortedProducts = filteredProducts.sort(
    (a, b) => b.relevance - a.relevance
  );

  if (selectedRecommendationType === 'SingleProduct') {
    return sortedProducts.slice(-1);
  }

  return sortedProducts;
};

export default { getRecommendations };
