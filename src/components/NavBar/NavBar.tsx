
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import './NavBar.css';


const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Formación', href: '#formacion' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="w-full navbar justify-between flex h-14 fixed top-0 z-50 bg-blur-white ">
      <div className="max-w-7xl px- sm:px-6 lg:px-8 m-2 flex justify-between items-center">
        <div className="flex items-center">
          <DisclosureButton className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div className="hidden sm:flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                'text-gray-600 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-blur-white">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-600 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
        
          ))}

        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
