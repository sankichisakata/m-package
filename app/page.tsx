
import HomeCompany from '@/components/layouts/home/homeCompany'
import HomeHero from '@/components/layouts/home/homeHero'
import HomeNews from '@/components/layouts/home/homeNews'
import HomeService from '@/components/layouts/home/homeService'

export default function Home() {
  return (
    <>
      <HomeHero/>
      <HomeNews/>
      <HomeService/>
      <HomeCompany/>
    </>
  )
}
