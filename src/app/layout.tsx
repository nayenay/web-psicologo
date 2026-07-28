import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthProvider from "@/providers/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[var(--background)] text-[var(--text)] antialiased">
        <AuthProvider>
          <Navbar /> 
          <main>
            {children}
        
          </main>
          <Footer />
        
        </AuthProvider>
        

      </body>
    </html>
  );
}


//<Footer /> va antes de cerrar el body





