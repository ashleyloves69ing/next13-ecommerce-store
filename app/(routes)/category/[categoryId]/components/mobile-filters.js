"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var react_2 = require("@headlessui/react");
var icon_button_1 = __importDefault(require("@/components/ui/icon-button"));
var button_1 = __importDefault(require("@/components/ui/button"));
var filter_1 = __importDefault(require("./filter"));
var MobileFilters = function (_a) {
    var sizes = _a.sizes, colors = _a.colors;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var onOpen = function () { return setOpen(true); };
    var onClose = function () { return setOpen(false); };
    return (<>
      <button_1.default onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <lucide_react_1.Plus size={20}/>
      </button_1.default>

      <react_2.Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25"/>
        
        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <react_2.Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <icon_button_1.default icon={<lucide_react_1.X size={15}/>} onClick={onClose}/>
            </div>

            <div className="p-4">
              <filter_1.default valueKey="sizeId" name="Sizes" data={sizes}/>
              <filter_1.default valueKey="colorId" name="Colors" data={colors}/>
            </div>
          </react_2.Dialog.Panel>
        </div>
      </react_2.Dialog>
    </>);
};
exports.default = MobileFilters;
