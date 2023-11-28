import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rahma Esmail",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assests/personal-image.jpg"
          type="image/jpg"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <div>
          <main>{children}</main>
          <aside>
            <Sidebar />
          </aside>
          <Footer />
        </div>
      </body>
    </html>
  );
}
