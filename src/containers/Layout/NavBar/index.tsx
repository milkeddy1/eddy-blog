import { Disclosure } from '@headlessui/react'
import { useColorMode } from '@/store'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import {
  Bars3Icon, XMarkIcon, SunIcon, MoonIcon,
} from '@heroicons/react/24/solid'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Posts', href: '/posts', current: false },
  { name: 'Changelog', href: '/changelog', current: false },
]
// export interface NavBarProps {

// }

interface ColorMode {
  mode: string
  switchMode: () => void
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const { pathname } = useRouter()
  const { mode: colorMode, switchMode }: ColorMode = useColorMode()
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="border-b border-slate-600 px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-32 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button */}
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
                <div className="flex shrink-0 items-center">
                  {/* logo */}
                  <Link href="/">
                    {colorMode === 'dark' ? <Image src="/logo.png" alt="Eddy" width="200" height="64" />
                      : <Image src="/logo-d.png" alt="Eddy" width="200" height="64" />}
                  </Link>
                </div>
                <div className="hidden items-center sm:ml-6 md:flex">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-2xl font-medium',
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
                  onClick={() => switchMode()}
                  type="button"
                  className={`${colorMode === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'} rounded-full p-1`}
                >
                  {colorMode === 'dark' ? <MoonIcon className="h-8 w-8" aria-hidden="true" /> : <SunIcon className="h-8 w-8" aria-hidden="true" />}
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
                    pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
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
  )
}
