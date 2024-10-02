import { Footer } from "@/components/footer.component";
import { HeaderComponent } from "@/components/header.component";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative flex max-w-3xl flex-col space-y-12">
        <HeaderComponent />
        {children}
      </div>
      <Footer />
    </>
  );
}
