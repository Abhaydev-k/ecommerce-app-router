export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          About Us
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
          Welcome to E-Shop, your trusted destination for quality products at
          affordable prices. We are committed to providing a seamless shopping
          experience with carefully selected products, secure payments, and
          reliable delivery.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">

        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            Quality Products
          </h2>

          <p className="text-gray-600">
            We carefully select products that meet high standards of quality,
            value, and customer satisfaction.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            Secure Shopping
          </h2>

          <p className="text-gray-600">
            Shop with confidence through secure transactions and a reliable
            purchasing experience.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            Fast Delivery
          </h2>

          <p className="text-gray-600">
            We work to ensure your orders reach you quickly and safely,
            wherever you are.
          </p>
        </div>

      </div>

      {/* Mission */}
      <div className="bg-white rounded-3xl shadow mt-16 p-10">
        <h2 className="text-3xl font-bold mb-4">
          Our Mission
        </h2>

        <p className="text-gray-600 leading-8">
          Our mission is to make online shopping simple, convenient, and
          accessible. We focus on delivering great products, exceptional
          service, and a customer-first experience that keeps shoppers coming
          back.
        </p>
      </div>

    </div>
  );
}