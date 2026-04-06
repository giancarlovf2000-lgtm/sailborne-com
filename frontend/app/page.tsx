import { getVessels } from '@/lib/api'
import Hero from '@/components/home/Hero'
import StatsSection from '@/components/home/StatsSection'
import ServicesGrid from '@/components/home/ServicesGrid'
import DestinationsGrid from '@/components/home/DestinationsGrid'
import FleetPreview from '@/components/home/FleetPreview'
import ProcessSteps from '@/components/home/ProcessSteps'
import CtaBanner from '@/components/home/CtaBanner'

export default async function HomePage() {
  let featuredVessels: import('@/types').Vessel[] = []
  try {
    const all = await getVessels()
    featuredVessels = all.filter(v => v.featured).slice(0, 3)
    if (featuredVessels.length === 0) featuredVessels = all.slice(0, 3)
  } catch {
    // Show page without vessels if API is unreachable
  }

  return (
    <main>
      <Hero />
      <StatsSection />
      <ServicesGrid />
      <DestinationsGrid />
      {featuredVessels.length > 0 && <FleetPreview vessels={featuredVessels} />}
      <ProcessSteps />
      <CtaBanner />
    </main>
  )
}
