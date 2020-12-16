export const getShoppingList = async() => {
    const response = await fetch("http://localhost:8000/shopping-list-item/", {method: "GET"})
    const data =  await response.json()
    return new Promise(resolve => setTimeout(resolve, 2000, data));
}

export const addItem = async(item) => {
    const response = await fetch('http://localhost:8000/shopping-list-item/', {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    })
    return await response.json()
}

export const removeItem = async(itemId) => {
    await fetch(`http://localhost:8000/shopping-list-item/${itemId}`, {method: "DELETE"})
}