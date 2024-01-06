import { Metadata } from 'next'
import Image from 'next/image'
import {socialLinks} from "@/constants"
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: 'Наши контакты - Прометей'
}

const page = () => {
  return (
      <>
          <section className='max-width section-padding'>
              <div className='box text-center flex flex-col items-center gap-3'>
                  <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5'>
                      <Image src={'icons/stars.svg'} alt='icon' width={35} height={35}/>
                  </div>
                  <h2 className='text-grey-700'>Мы будем рады услышать Вас</h2>
                  <p className='text-grey-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid illo
                      necessitatibus quaerat, sit voluptas voluptates?</p>
              </div>
          </section>
          <section className='max-width section-padding flex max-tablet:flex-col gap-16'>
              <div className='tablet:max-w-md w-full'>
                  <div className='space-y-4'>
                      <div className='box !p-6'>
                          <p className='text-grey-600'>Вы можете написать нам на почту</p>
                          <h6 className='text-grey-700'>surikov1984@list.ru</h6>
                      </div>
                      <div className='box !p-6'>
                          <p className='text-grey-600'>Позвоните нам по номеру</p>
                          <h6 className='text-grey-700'>+7 905 106 2946</h6>
                      </div>
                      <div className='box !p-6'>
                          <p className='text-grey-600'>Наше расположение</p>
                          <h6 className='text-grey-700'>Россия, Иваново</h6>
                      </div>
                  </div>
                  <h6 className='mt-10 mb-3 text-grey-700 max-tablet:text-center'>Наши социальные сети</h6>
                  <div className='flex gap-3 box !p-6 w-max max-tablet:mx-auto'>
                      {socialLinks.map((link, index) => (
                          <a href={link.url} key={index} className='w-10 h-10 bg-purple text-peach flex items-center justify-center rounded'>
                              <link.icon strokeWidth={0} fill='currentColor'></link.icon>
                          </a>
                      ))}
                  </div>
              </div>
              <div className="box w-full">
                  <form action="" className='space-y-5'>
                      <div className='flex gap-5 max-tablet:flex-col'>
                          <input type="text" placeholder='Имя'/>
                          <input type="text" placeholder='Фамилия'/>
                      </div>
                      <div className='flex gap-5 max-tablet:flex-col'>
                          <input type="text" placeholder='Почта'/>
                          <input type="text" placeholder='Телефон'/>
                      </div>
                      <textarea placeholder='Ваше сообщение' className='min-h-[200px]'></textarea>
                      <button type='submit' className='btn btn-primary'>Отправить</button>
                  </form>
              </div>
          </section>

          <FaqSection />
      </>
  )
}

export default page