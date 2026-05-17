import vazirFont from "@/constants/localFonts";
import "../../globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa" dir="rtl"
      // className={`h-full antialiased`}
    >
      <body className={`${vazirFont.variable} font-vazir bg-background relative`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}