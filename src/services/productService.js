const API_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
  const response = await fetch(`${API_URL}?limit=0`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products;
};

export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
};

export const getProductsByCategory = async (category) => {
  const response = await fetch(
    `${API_URL}/category/${category}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category");
  }

  const data = await response.json();

  return data.products;
};