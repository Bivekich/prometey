import Link from "next/link"
import {ArrowRight, Phone} from "lucide-react"
import Image from 'next/image'
import SectionHeading from "@/components/SectionHeading";
import {benefits, portfolios, skills} from "@/constants";
import PortfolioItem from "@/components/PortfolioItem";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";

const page = () => {
	return (
	<>
		{/* hero section */}
		<section className='flex items-center max-width flex-col-reverse tablet:flex-row mb-10'>
			{/* left side */}
			<div className='tablet:w-2/3 mt-10 tablet:mt-0'>
				<div
					className='flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left'>
					<p className='px-4 py-2 bg-peach-500 text-grey-600 w-max rounded'>Ваши деньги сгорят красиво 🔥</p>
					<h1 className='text-grey'>Театр огня Прометей</h1>
					<p className='text-grey-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
						facilis quia quisquam sequi. Blanditiis, id totam. Ad aliquam, architecto cum deserunt dolor
						esse, eveniet expedita fugit incidunt inventore ipsa ipsam, maxime necessitatibus placeat quasi
						quis repellendus sequi tempora totam voluptatem?</p>
				</div>
				<div className='flex gap-5 mt-10 justify-center tablet:justify-start'>
					<Link href={'/contact'} className='btn btn-primary'>
						<Phone/>
						Позвоните сейчас
					</Link>
					<Link href={'/portfolio'} className='btn'>
						Посмотреть наши работы
						<ArrowRight size={16}/>
					</Link>
				</div>

				{/* stats */}
				<div className='bg-peach-400 w-full py-8 px-10 rounded-l-lg mt-16 flex-wrap gap-12 hidden tablet:flex'>
					<div>
						<h3 className='text-grey-700'>55 <span className='text-purple'>+</span></h3>
						<p className='text-grey-600'>Выполнено заказов</p>
					</div>
					<div>
						<h3 className='text-grey-700'>55 <span className='text-purple'>+</span></h3>
						<p className='text-grey-600'>Счастливых покупателей</p>
					</div>
					<div>
						<h3 className='text-grey-700'>5 <span className='text-purple'>+</span></h3>
						<p className='text-grey-600'>Лет работы</p>
					</div>
				</div>
				<div className='mt-16 grid grid-cols-2 gap-3 tablet:hidden'>
					<div className='py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2'>
						<h3 className='text-grey-700'>55 <span className='text-purple'>+</span></h3>
						<p className='text-grey-600'>Выполнено заказов</p>
					</div>
					<div className='py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2'>
						<h3 className='text-grey-700'>55 <span className='text-purple'>+</span></h3>
						<p className='text-grey-600'>Счастливых покупателей</p>
					</div>
					<div className='py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2'>
						<h3 className='text-grey-700'>5 <span className='text-purple'>+</span></h3>
						<p className='text-grey-600'>Лет работы</p>
					</div>
				</div>
			</div>
			{/* right side */}
			<div className='relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden'>
				<Image src={'/images/hero.png'} alt='hero' fill className='object-cover'/>
			</div>
		</section>

		{/* skills section */}
		<section className='max-width section-padding'>
			<SectionHeading title='Наши возможности'
							subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur magni officiis placeat quidem sunt voluptatum?'/>
			{/* skills */}
			<div
				className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6'>
				{skills.map((skill, index) => (
					<div key={index} className='box flex flex-col items-center gap-5'>
						<div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2'>
							<Image src={skill.icon} alt={skill.name} width={35} height={35}/>
						</div>
						<div className='text-center '>
							<h4 className='text-grey-700'>{skill.name}</h4>
							<p className='text-grey-600'>{skill.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>

		{/* benefits section */}
		<section className='max-width section-padding'>
			<SectionHeading title='Преимущества'
							subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur magni officiis placeat quidem sunt voluptatum?'/>
			<div
				className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6'>
				{benefits.slice(0, 2).map((benefit, index) => (
					<div key={index} className='box'>
						<h5 className='text-frey-700 mb-2'>{benefit.name}</h5>
						<p className='text-grey-600'>{benefit.description}</p>
					</div>
				))}
			</div>
			<div
				className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6'>
				{benefits.slice(2).map((benefit, index) => (
					<div key={index} className='box'>
						<h5 className='text-frey-700 mb-2'>{benefit.name}</h5>
						<p className='text-grey-600'>{benefit.description}</p>
					</div>
				))}
			</div>
		</section>

		{/* portfolio section */}
		<section className='section-padding max-width'>
			<SectionHeading title='Наши работы'
							subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur magni officiis placeat quidem sunt voluptatum?'/>
			<div
				className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6'>
				{portfolios.slice(0, 3).map((portfolio, index) => (
					<PortfolioItem key={index} portfolio={portfolio}/>
				))}
			</div>
			<Link href={'/portfolio'} className='btn btn-primary mt-10 mx-auto w-max'>
				Посмотрите все наши работы
			</Link>
		</section>

		{/* testimonial section */}
		<TestimonialSection />

		{/* FAQs section */}
		<FaqSection />
	</>
	)
}

export default page
