import Hero from '@/components/sections/Hero'
import FactsheetCTA from '@/components/sections/FactsheetCTA'
import ValueProp from '@/components/sections/ValueProp'
import Features from '@/components/sections/Features'
import WhyUs from '@/components/sections/WhyUs'
import References from '@/components/sections/References'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProp />
      <Features />
      <FactsheetCTA />
      <WhyUs />
      <References />
    </>
  )
}
