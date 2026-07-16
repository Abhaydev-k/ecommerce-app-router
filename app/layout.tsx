import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

export default function RootLayout(
  props: {
    children: React.ReactNode;
  }
) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {props.children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}