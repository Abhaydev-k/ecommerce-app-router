import Hero from "@/components/Hero";
import PageWrapper from "@/components/pageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />

      <section className="max-w-7xl mx-auto py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Fast Delivery
            </h3>
            <p className="mt-3 text-gray-600">
              Get products delivered quickly and safely.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Secure Payments
            </h3>
            <p className="mt-3 text-gray-600">
              Safe and secure checkout experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">
              Quality Products
            </h3>
            <p className="mt-3 text-gray-600">
              Premium products selected for customers.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}