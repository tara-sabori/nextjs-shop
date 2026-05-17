import vazirFont from "@/constants/localFonts";
import "../../globals.css";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      // className={`h-full antialiased`}
    >
      <body
        className={`${vazirFont.variable} font-vazir bg-background relative`}
      >
        <AuthContextProvider>
          <Toaster />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
