import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from "next/link"
import { Bars3Icon, BellIcon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid'
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Posts', href: '/posts', current: false },
  { name: 'Changelog', href: '/changelog', current: false },
]


export interface NavBarProps {
}


function classNames(...classes: string[]) {

  return classes.filter(Boolean).join(' ')
}
const darkMode = true
export default function NavBar(props: NavBarProps) {

  const { pathname } = useRouter()

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 border-b border-slate-600">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-32 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    {/* logo */}
                    <Image src="/logo.png" alt="Eddy" width="200" height="64" />
                    {/* <Image src="/logo-d.png" alt="Eddy" width="200" height="64" /> */}
                  </div>
                  <div className="hidden sm:ml-6 md:flex items-center">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-2xl font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    {darkMode ? <MoonIcon className="h-6 w-6" aria-hidden="true" /> : <SunIcon className="h-6 w-6" aria-hidden="true" />}
                  </button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
