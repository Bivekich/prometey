import SectionHeading from "@/components/SectionHeading";
import {ArrowRight, Star} from "lucide-react";
import Link from "next/link";
import {faqs} from "@/constants"
import Accordion from "@/components/Accordion";

const FaqSection = () => {
  return (
      <section className='max-width section-padding overflow-hidden'>
          <SectionHeading title='Часто задаваемые вопросы' subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis error eum impedit neque possimus sequi, suscipit tempora tenetur vitae voluptas?' />
          <div className='flex flex-col tablet:flex-row gap-5 items-start'>
              <div className='box'>
                  <Accordion data={faqs}/>
              </div>
              <div className='box flex flex-col gap-5 tablet:max-w-md'>
                  <div className='w-16 h-16 rounded bg-purple text-peach-100 flex items-center justify-center flex-shrink-0 mb-2'>
                      <Star fill='currentColor' size={30}/>
                  </div>
                  <div>
                      <h5 className='text-grey-700 mb-2'>Остались вопросы?</h5>
                      <p className='text-grey-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, placeat repellendus. Ab dolorum ducimus, ea harum in, ipsa iure laboriosam maiores mollitia neque nihil nisi nobis officiis porro, quo tempore.{" "}</p>
                  </div>
                  <Link href={'/contact'} className='btn btn-primary w-max'>Позвоните нам <ArrowRight /></Link>
              </div>
          </div>
      </section>
  )
}

export default FaqSection