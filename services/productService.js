export async function getProducts() {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products",
      {
        cache: "no-store",
      }
    );

    console.log("Status:", res.status);

    const text = await res.text();

    console.log("Response:", text);

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("Products Error:", error);
    return [];
  }
}