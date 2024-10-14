import { Footer } from "@/components/footer/footer.component";
import { HeaderComponent } from "@/components/header/header.component";

export default function LayoutWithHeaderFooter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative flex w-full max-w-4xl flex-col space-y-32">
        <HeaderComponent />
        {children}
      </div>
      <Footer />
    </>
  );
}
