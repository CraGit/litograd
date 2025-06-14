import "./globals.css";
import { ClientLayout } from "./ClientLayout";

export const metadata = {
  title: {
    template: "%s | Litograd Construction",
    default: "Litograd Construction",
  },
  description: "Professional construction and renovation services",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
