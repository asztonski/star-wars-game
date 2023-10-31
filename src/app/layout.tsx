import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./styles/globals.css";
import AppContextProvider from "./context/AppContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "500", "700"] });

export const metadata: Metadata = {
  title: "Star Wars Game",
  description: "Star Wars Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className={roboto.className}>{children}</body>
      </AppContextProvider>
    </html>
  );
}
