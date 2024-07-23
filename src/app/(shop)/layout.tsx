import "../globals.css";
export default function ShopLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <html>
        <body>
            <header>header2</header>
                {children}
            <footer>footer2</footer>
        </body>
    </html>
  }