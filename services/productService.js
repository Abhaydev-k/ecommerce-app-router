export async function getProducts() {
  try {
    const res = await fetch(
      "https://dummyjson.com/products",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(
        `HTTP Error: ${res.status}`
      );
    }

    const data = await res.json();

    return data.products;
  } catch (error) {
    console.error("Products Error:", error);
    return [];
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(
        `HTTP Error: ${res.status}`
      );
    }

    return await res.json();
  } catch (error) {
    console.error("Product Error:", error);
    return null;
  }
}