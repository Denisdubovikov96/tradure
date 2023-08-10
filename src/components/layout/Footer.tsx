import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button'
import ContentWrapper from '../ui/ContentWrapper'

type Props = {}

const Footer = (props: Props) => {
  return (
    <ContentWrapper classes={{ root: "bg-black", content: "" }}>
      <div className='text-white flex justify-between max-md:flex-col max-md:items-center max-md:gap-6 py-[35px] '>

        <Link href={'/'} className='flex items-center gap-1 uppercase font-semibold text-xl'>
          <Image width={30} height={20} src='/logo.svg' alt='logo' />
          <span>
            Tradure
          </span>
        </Link>

        <nav className='flex gap-12 items-center'>
          <Link href={'/'} className='hover:text-[#47D7AC]'>
            Home
          </Link>
          <Link href={'/about'} className='hover:text-[#47D7AC]'>
            About us
          </Link>
          <Link href={'/contact'} className='hover:text-[#47D7AC]'>
            Contact
          </Link>
        </nav>

        <div className='flex gap-2 items-center'>
          <a href="" className='w-[124px] h-[38px] relative hover:opacity-70'>
            <Image fill src='/img/app-store.png' alt='apple' className='object-contain' />
          </a>
          <a href="" className='w-[124px] h-[40px] relative hover:opacity-70'>
            <Image fill src='/img/google-pay.png' alt='apple' className='object-cover' />
          </a>
        </div>
      </div>

      <div className='w-full pb-[20px]'>
        <hr className='py-[10px] border-[#809F96] opacity-50' />
        <p className='text-[#809F96] text-center'>
          Building a Better Future
        </p>
      </div>
    </ContentWrapper>
  )
}

export default Footer