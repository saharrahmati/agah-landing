import SectionOne from "@/app/components/sectionOne";
import SectionTwo from "@/app/components/sectionTwo";
import SectionThree from "@/app/components/sectionThree";
import SectionFour from "@/app/components/sectionFour";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
      <div className="container min-h-screen mx-auto bg-[#FEEDBC]">
          <SectionOne />
          <SectionTwo/>
          <SectionThree />
          <SectionFour />
          <Footer />
      </div>
  )
}
