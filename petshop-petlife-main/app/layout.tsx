import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Pixelify_Sans } from "next/font/google";


const pixelFont = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "PetLife",
  description: "Petshop online",
  icons: {
  icon: "/logo.png",
},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={pixelFont.className}>
        <ThemeProvider>
          <Toaster position="top-right" />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}