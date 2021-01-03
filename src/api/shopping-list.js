export const getItems = async () => {
  const response = await fetch("http://localhost:8000/items", {
    method: "GET",
  });
  const data = await response.json();
  return new Promise((resolve) => setTimeout(resolve, 500, data));
};

export const getCart = async () => {
  const response = await fetch("http://localhost:8000/cart", {
    method: "GET",
  });
  const data = await response.json();
  return new Promise((resolve) => setTimeout(resolve, 500, data));
};

export const addItem = async (item) => {
  const response = await fetch("http://localhost:8000/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return await response.json();
};
