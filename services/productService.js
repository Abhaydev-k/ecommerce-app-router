export async function getProducts() {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(
        `HTTP Error: ${res.status}`
      );
    }

    const text = await res.text();

    try {
      return JSON.parse(text);
    } catch {
      console.error("Invalid JSON:", text);
      return [];
    }
  } catch (error) {
    console.error("Products Error:", error);
    return [];
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(
        `HTTP Error: ${res.status}`
      );
    }

    const text = await res.text();

    try {
      return JSON.parse(text);
    } catch {
      console.error("Invalid JSON:", text);
      return null;
    }
  } catch (error) {
    console.error("Product Error:", error);
    return null;
  }
}