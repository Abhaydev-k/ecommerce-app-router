export async function getProducts() {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products",
      {
        cache: "no-store",
      }
    );

    console.log("STATUS:", res.status);

    const text = await res.text();

    console.log("RESPONSE:", text);

    return JSON.parse(text);
  } catch (error) {
    console.error("Products Error:", error);
    return [];
  }
}