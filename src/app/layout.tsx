import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[var(--background)] text-[var(--text)] antialiased">
        
        <Navbar /> 
        

        <main>
          {children}
          
        </main>

        <Footer />
        
        

      </body>
    </html>
  );
}


//<Footer /> va antes de cerrar el body





