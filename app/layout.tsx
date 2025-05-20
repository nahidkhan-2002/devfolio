import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "400", "700", '900'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}


// Change this data with your own 🤭
export const metadata: Metadata = {
  title: {
    default: "Nahid's Portfolio",
    template: "%s | Nahid's Portfolio",
  },
  description:
    'A Portfolio of Nahid',
  icons: {
    icon: './favicon.ico',
  },
  applicationName: "Nahid's Portfolio",
  authors: [
    {
      name: 'Nahid Khan Shuvo',
      url: 'https://www.linkedin.com/in/nahidkhan2002/',
    },
  ],
  generator: 'Next.js',
  referrer: 'origin',
  themeColor: '#120012',
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1',
  creator: 'Nahid Khan Shuvo',
  publisher: 'The Plum Up',
};
