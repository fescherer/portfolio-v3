export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex max-w-3xl flex-col space-y-12">
      {children}
    </div>
  );
}
