import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Charter } from "@/components/charter";
import { Initiatives } from "@/components/initiatives";
import { Volunteer } from "@/components/volunteer";
import { Support } from "@/components/support";
import { Footer } from "@/components/footer";

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Charter />
        <Initiatives />
        <Volunteer />
        <Support />
      </main>
      <Footer />
    </div>
  );
}

export default App;
