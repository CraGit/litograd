import "./globals.css";
import { ClientLayout } from "./ClientLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Litograd Construction</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
