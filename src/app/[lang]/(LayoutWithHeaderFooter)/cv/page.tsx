import { PDFComponent } from "./components/pdf.component";

export default function CVPage() {

  return (
    <div className="m-auto my-4 flex max-w-5xl flex-col gap-2">
      {/* <h2 className="font-title text-3xl text-on-layer-0-l1">{translations.title}</h2> */}
      <p>Thank you for your interest in my work. By clicking the download button, you&apos;ll receive a comprehensive document detailing my educational background, professional experience, key accomplishments, and areas of expertise. Whether you&apos;re a potential employer, collaborator, or simply interested in my career journey, my CV provides valuable insights.</p>

      <PDFComponent />
    </div>
  )
}
