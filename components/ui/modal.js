"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@headlessui/react");
var lucide_react_1 = require("lucide-react");
var react_2 = require("react");
var icon_button_1 = __importDefault(require("@/components/ui/icon-button"));
;
var Modal = function (_a) {
    var open = _a.open, onClose = _a.onClose, children = _a.children;
    return (<react_1.Transition show={open} appear as={react_2.Fragment}>
      <react_1.Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50"/>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">

          <react_1.Transition.Child as={react_2.Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <react_1.Dialog.Panel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <div className="absolute right-4 top-4">
                    <icon_button_1.default onClick={onClose} icon={<lucide_react_1.X size={15}/>}/>
                  </div>
                  {children}
                </div> 
              </react_1.Dialog.Panel>
            </react_1.Transition.Child>
          </div>
        </div>
      </react_1.Dialog>
    </react_1.Transition>);
};
exports.default = Modal;
