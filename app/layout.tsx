import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import Cart from "./(components)/Cart";
import Menu from "./(components)/Menu";
import CartContext from "./(context)/CartContext";
import MenuContext from "./(context)/MenuContext";
import localFont from "@next/font/local";
import supabase from "@/utils/supabase";
// import { Labra } from "@next/font/google";

export const revalidate = 0;

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let { data: product_category, error } = await supabase
    .from("product_category")
    .select("*");

  const categoryPages = product_category?.map(({ category_name }) => ({
    name: category_name + "s",
    link: `/products/category/${category_name}`,
  }));

  const mainLinks = [
    { name: "home", link: "/" },
    { name: "shop all", link: "/products" },
  ];

  const links = categoryPages ? mainLinks.concat(categoryPages) : mainLinks;

  return (
    <html
      lang="en"
      className={`${gajraj.variable} ${labrada.variable} ${labradaItalic.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="font-labrada">
        <MenuContext>
          <CartContext>
            <Header links={links} />
            <Cart />
            <Menu links={links} />
            <div className="mt-8">{children}</div>
            <Footer links={links} />
          </CartContext>
        </MenuContext>
      </body>
    </html>
  );
}
