import mockProducts from "../data/mockProducts.json";

// Simula una carga real poniendo un tiempo de espera entre llamados
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getProducts = async () => {
  await delay(600);
  return mockProducts;
};

export const getProductById = async (id) => {
  await delay(400);
  return mockProducts.find((p) => p.id === parseInt(id));
};

export const getProductsByCategory = async (category) => {
  await delay(500);
  return mockProducts.filter((p) => p.category === category);
};