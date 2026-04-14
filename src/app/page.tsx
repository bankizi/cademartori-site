import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { StatsSection } from '@/components/sections/StatsSection';
import { RegulationHighlight } from '@/components/sections/RegulationHighlight';
import { RiskDisclosure } from '@/components/ui/RiskDisclosure';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <RegulationHighlight />
      <RiskDisclosure />
      <CTASection />
    </>
  );
}
