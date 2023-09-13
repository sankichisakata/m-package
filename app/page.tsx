
import HomeCompany from '@/components/layouts/home/homeCompany'
import HomeEquipment from '@/components/layouts/home/homeEquipment'
import HomeService from '@/components/layouts/home/homeService'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div
        className='
        bg-gray-200 text-gray-800 
        h-screen px-5
        flex flex-col justify-center items-center gap-10
        '
      >

        <div className='flex flex-col justify-center items-center gap-4'>
          <p className='text-[30px]'>「親切・迅速・丁寧」</p>
          <p className='text-xl'>私たちの信念です。</p>
        </div>

        <div className='text-center text-base'>
          <p>ダンボールの製造・企画・加工・納品までをワンストップで行い、お客様のご要望にお応え致します。</p>
          <p>当たり前を当たり前に。</p>
        </div>

        {/* <div className='
        text-center text-[30px]
        border border-black
        p-5
        '
        >
          <p>川口から世界へ</p>
          <p>”M-Package”</p>
          <p>ここに爆誕</p>
        </div> */}

      </div>
      <HomeService/>
      <HomeEquipment/>
      <HomeCompany/>
      </>
  )
}
