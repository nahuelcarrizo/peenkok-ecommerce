export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  
//   export const metadata = {
//     title: 'Peenkok',
//     description: 'Welcome to Peenkok',
//   }