import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import "./nav.css"

const navigation = [
    { name: 'Dashboard', href: '#', current: false },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]
const leftnav = [
    { name: 'Login', href: '#', current: false },
    { name: 'Request a Demo', href: '#', current: true },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return(
        <div className="w-[1440px] h-24 px-20 py-6 justify-start items-center gap-[202px] inline-flex">
  <div className="grow shrink basis-0 h-[35px] justify-start items-center gap-6 flex">
    <div className="text-white text-[32px] font-bold font-Roboto leading-9">OHSM</div>
  </div>
  <div className="justify-center items-center gap-4 flex">
    <div className="w-[88px] self-stretch px-2 py-3 justify-start items-center gap-2 flex">
      <div className="text-white text-base font-medium font-['Roboto'] leading-normal tracking-wide">Solutions</div>
    </div>
    <div className="w-[87px] self-stretch px-2 py-3 justify-start items-center gap-2 flex">
      <div className="text-white text-base font-medium font-['Roboto'] leading-normal tracking-wide">Company</div>
    </div>
    <div className="w-[70px] self-stretch px-2 py-3 justify-start items-center gap-2 flex">
      <div className="text-white text-base font-medium font-['Roboto'] leading-normal tracking-wide">Pricing</div>
    </div>
    <div className="w-24 self-stretch px-2 py-3 justify-start items-center gap-2 flex">
      <div className="text-white text-base font-medium font-['Roboto'] leading-normal tracking-wide">Resources</div>
    </div>
    <div className="w-[100px] self-stretch px-2 py-3 justify-start items-center gap-2 flex">
      <div className="text-white text-base font-medium font-['Roboto'] leading-normal tracking-wide">Contact Us</div>
    </div>
  </div>
  <div className="grow shrink basis-0 h-12 justify-end items-center gap-4 flex">
    <div className="px-2 py-3 rounded-lg justify-center items-center flex">
      <div className="w-20 px-4 justify-center items-center flex">
        <div className="text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide">Log In</div>
      </div>
    </div>
    <div className="px-2 py-3 bg-gray-700 rounded-lg justify-center items-center flex">
      <div className="w-40 px-4 bg-gray-700 justify-center items-center flex">
        <div className="text-white bg-gray-700 text-base font-normal font-['Roboto'] leading-normal tracking-wide">Request A Demo</div>
      </div>
    </div>
  </div>
</div>

    )
}
