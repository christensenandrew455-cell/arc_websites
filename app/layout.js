import "../globals.css";

export const metadata = {
  title: {
    default: "ARK Client Center",
    template: "%s | ARK Client Center",
  },
  description: "Secure lead, client, receptionist, and business messaging management for service businesses.",
  applicationName: "ARK Client Center",
  metadataBase: new URL("https://arkwebsites.com"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fff7ed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
