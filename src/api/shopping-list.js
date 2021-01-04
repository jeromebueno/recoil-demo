export const getItems = async () => {
  const response = await fetch("http://localhost:8000/items", {
    method: "GET",
  });
  const data = await response.json();
  return new Promise((resolve) => setTimeout(resolve, 1000, data));
};
