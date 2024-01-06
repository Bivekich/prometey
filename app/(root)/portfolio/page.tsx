import { Metadata } from 'next'
import Image from 'next/image'
import PortfolioSection from "@/components/PortfolioSection";
import {portfolios} from "@/constants";

export const metadata: Metadata = {
    title: 'Наши работы - Прометей',
}

const page = () => {
  return (
      <>
        <section className='max-width section-padding'>
            <div className='box text-center flex flex-col items-center gap-3'>
                <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5'>
                    <Image src={'icons/stars.svg'} alt='icon' width={35} height={35}/>
                </div>
                <h2 className='text-grey-700'>Наши работы</h2>
                <p className='text-grey-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid illo necessitatibus quaerat, sit voluptas voluptates?</p>
            </div>
        </section>

          <PortfolioSection data={portfolios} title={'Шоу которые мы провели в 2023'}/>
          <PortfolioSection data={portfolios.slice(3).concat(portfolios.slice(0, 3))} title={'Шоу которые мы провели в 2022'}/>
          <PortfolioSection data={portfolios.slice(6).concat(portfolios.slice(0, 6))} title={'Шоу которые мы провели в 2021'}/>
      </>
  )
}

export default page