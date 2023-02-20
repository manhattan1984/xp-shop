import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import Cart from "./(components)/Cart";
import Menu from "./(components)/Menu";
import CartContext from "./(context)/CartContext";
import MenuContext from "./(context)/MenuContext";
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

const links = [
  { name: "home", link: "/" },
  { name: "shop all", link: "/products" },
 
];

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
        <MenuContext>
          <CartContext>
            <Header links={links} />
            <Cart />
            <Menu links={links} />
            {children}
            <Footer />
          </CartContext>
        </MenuContext>
      </body>
    </html>
  );
}
