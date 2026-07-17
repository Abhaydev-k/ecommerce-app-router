export async function getProducts() {
  try {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/products",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}