
import HomeCompany from '@/components/layouts/home/homeCompany'
import HomeEquipment from '@/components/layouts/home/homeEquipment'
import HomeHero from '@/components/layouts/home/homeHero'
import HomeService from '@/components/layouts/home/homeService'

export default function Home() {
  return (
    <>
      <HomeHero/>
      <HomeService/>
      <HomeEquipment/>
      <HomeCompany/>
    </>
  )
}
