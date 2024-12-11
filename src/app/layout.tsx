// Disable NextJS server-side features so that Constellation works properly (it relies on
// client-only variables like document and window)
"use client";

import { defaultTheme, ThemeProvider } from "@tritonse/tse-constellation";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Declare the theme we want to use with Constellation */}
        <ThemeProvider
          // Use the color theme from PAP (https://www.figma.com/design/jARPdBWD6HutwLFzepjZW1/PAP-Web-Application?node-id=25-294&node-type=canvas&t=VlG65AI6j4wLEiQZ-0)
          colors={{
            ...defaultTheme.colors,

            /** Primary colors */
            primary_light: "#FFFFFF",
            primary_dark: "#102D5F", // Accent blue

            // /** Functional colors */
            background: "#ECEFF3",
            success: "#3BB966",
            error: "#BE2D46",
            disabled: "#818181",

            // /** Neutral colors */
            black: "#232220"
          }}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
