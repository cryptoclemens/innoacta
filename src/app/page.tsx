import Hero from '@/components/sections/Hero'
import FactsheetCTA from '@/components/sections/FactsheetCTA'
import ValueProp from '@/components/sections/ValueProp'
import Features from '@/components/sections/Features'
import WhyUs from '@/components/sections/WhyUs'
import LogoBar from '@/components/sections/LogoBar'
import References from '@/components/sections/References'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoBar />
      <ValueProp />
      <Features />
      <FactsheetCTA />
      <WhyUs />
      <References />
    </>
  )
}
