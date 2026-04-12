import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Charter } from "@/components/charter";
import { Initiatives } from "@/components/initiatives";
import { Volunteer } from "@/components/volunteer";
import { Support } from "@/components/support";
import { Footer } from "@/components/footer";
import { CharterPage } from "@/components/charter-page";
import { TermsPage } from "@/components/terms-page";

export function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  const isCharter = path === "/charter" || path === "/charter/";
  const isTerms = path === "/terms" || path === "/terms/";

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {isCharter ? (
          <CharterPage />
        ) : isTerms ? (
          <TermsPage />
        ) : (
          <>
            <Hero />
            <About />
            <Charter />
            <Initiatives />
            <Volunteer />
            <Support />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
