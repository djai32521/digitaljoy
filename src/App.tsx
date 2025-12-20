import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SectionTitle from './components/SectionTitle'
import Services from './components/Services'
import SaasSection from './components/SaasSection'
import SsportsSection from './components/SsportsSection'
import BookGptSection from './components/BookGptSection'
import DmmsSection from './components/DmmsSection'
import AiAuctionSection from './components/AiAuctionSection'
import Products from './components/Products'
import Contact from './components/Contact'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <SectionTitle
        id="services"
        title="주요 사업 분야"
        subtitle="모바일, AI 기술을 결합하여 새로운 가치를 창출하는 디지털조이의 핵심 비즈니스입니다."
      />
      <Services />

      <SectionTitle
        id="products"
        title="제품 소개"
        subtitle="디지털조이의 독자적인 기술력으로 탄생한 혁신적인 솔루션들을 소개합니다."
      />
      <BookGptSection />
      <DmmsSection />
      <AiAuctionSection />
      <SsportsSection />
      <Products />

      <SaasSection />
      <Contact />
    </main>
  )
}

export default App
