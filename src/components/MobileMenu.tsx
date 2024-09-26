import { headerNavItems } from "@/data/headerConfig";
import { Disclosure, DisclosureButton, DisclosurePanel, Transition, TransitionChild } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <div className="fixed inset-0 z-50 bg-white">
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-white">
            <div className="p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
              <nav className="mt-12">
                {headerNavItems.map((item) => (
                  <div key={item.name} className="py-2">
                    {item.children ? (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <DisclosureButton className="flex justify-between w-full px-4 py-2 text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                              <span>{item.name}</span>
                              <ChevronDownIcon
                                className={`${
                                  open ? "transform rotate-180" : ""
                                } w-5 h-5 text-gray-500`}
                              />
                            </DisclosureButton>
                            <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-700">
                              {item.children!.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="block py-2 hover:text-gray-900"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Transition>
  );
}
