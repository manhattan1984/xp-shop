import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import Cart from "./(components)/Cart";
import CartContext from "./(context)/CartContext";
import localFont from "@next/font/local";
// import { Labra } from "@next/font/google";

const gajraj = localFont({
  src: "../public/GajrajOne-Regular.ttf",
  display: "swap",
  variable: "--font-gajraj-one",
});
const labrada = localFont({
  src: "../public/Labrada.ttf",
  display: "swap",
  variable: "--font-labrada",
});
const labradaItalic = localFont({
  src: "../public/Labrada-Italic.ttf",
  display: "swap",
  variable: "--font-labrada-italic",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${gajraj.variable} ${labrada.variable} ${labradaItalic.variable} dark`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-black dark:text-white font-labrada">
        <CartContext>
          <Header />
          <Cart />
          {children}
          <Footer />
        </CartContext>
      </body>
    </html>
  );
}
