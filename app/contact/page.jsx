export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-3">
        Contact Us
      </h1>

      <p className="text-gray-600 text-center mb-12">
        We're here to help. Reach out to us through any of the channels below.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">
            Email
          </h2>
          <p className="text-gray-600">
            support@yourstore.com
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">
            Phone
          </h2>
          <p className="text-gray-600">
            +91 98765 43210
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">
            Address
          </h2>
          <p className="text-gray-600">
            Kannur, Kerala, India
          </p>
        </div>
      </div>

      <div className="mt-10 border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-3">
          Customer Support Hours
        </h2>
        <p className="text-gray-600">
          Monday - Saturday: 9:00 AM - 6:00 PM
        </p>
        <p className="text-gray-600">
          Sunday: Closed
        </p>
      </div>
    </div>
  );
}