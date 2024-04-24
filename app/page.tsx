import { ProfileImage } from "@/components/ProfileImage";
import { Intro } from "@/components/Intro";
import { SectionSpace } from "@/components/Spacer";
import { ExperienceList } from "@/components/ExperienceList/ExperienceList";
import { ProjectList } from "@/components/ProjectList/ProjectList";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/Forms/ContactForm";

export default function Home() {
  return (
    <>
      <main className="px-4">
        <section className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 ">
          <div className="my-2 flex justify-center sm:order-2">
            <ProfileImage />
          </div>

          <div className="mt-6 flex items-center justify-center text-center text-white sm:order-1 sm:mx-auto sm:mt-0 sm:text-start">
            <Intro />
          </div>
        </section>

        <SectionSpace />
        <section>
          <ExperienceList />
        </section>

        <SectionSpace />
        <section className="py-2">
          <ProjectList />
        </section>

        <SectionSpace />
        <section className="py-4">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
