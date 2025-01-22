import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {  NavLink } from 'react-router-dom';
import './NavBar.css';



const navigation = [
  { name: 'Inicio', href: '#inicio', current: true },
  { name: 'Proyectos', href: '#proyectos', current: false },
  { name: 'Formación', href: '#formacion', current: false },
];


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="w-full navbar flex h-14 fixed top-0 z-50 bg-blur-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-1 flex justify-between w-full items-center">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Abrir menú principal</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 mt-3">

                {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    'text-black hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                >
                  {item.name}
                </a>
              ))}

              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden absolute top-14 left-0 z-50 w-full bg-gray-800">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={NavLink}
              to={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={({ isActive }: { isActive: boolean }) => 
                classNames(
              isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium'
                )
              }
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
      <div id="progress"></div>

    </Disclosure>
  )
}