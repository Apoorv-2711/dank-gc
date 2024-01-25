import Navigator from "@/components/Navigator";
import "./globals.css";

export const metadata = {
  title: "Dank Chat",
  description: "Chat room made-by: Apoorv Jain",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["DankGC", "Group Chat App", "Group fun", "Chatting", "application"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-black bg-white dark:text-white dark:bg-[#1c1c1c] transition-colors duration-300">
        <Navigator>{children}</Navigator>
      </body>
    </html>
  );
}
