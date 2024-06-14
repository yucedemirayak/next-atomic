import { Body, Footer, Header, Main } from "@/components";
import "../core/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doc Title",
  description: "Doc desc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Body className={inter.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Body>
    </html>
  );
}
