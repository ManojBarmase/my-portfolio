import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider"; // New import
import Cursor from "@/components/cursor/Cursor";

export const metadata: Metadata = {
  title: "Manoj Barmase | Full-Stack Architect",
  description: "Architecting scalable SaaS platforms and robust digital experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Cursor /> {/* Mounted Globally */}
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     // suppressHydrationWarning is CRITICAL for next-themes to work without errors
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${GeistSans.variable} font-sans antialiased`}>
//         <ThemeProvider>
//           <SmoothScroll>
//             {children}
//           </SmoothScroll>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }