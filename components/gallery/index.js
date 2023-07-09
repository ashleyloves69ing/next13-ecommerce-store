"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("next/image"));
var react_1 = require("@headlessui/react");
var gallery_tab_1 = __importDefault(require("./gallery-tab"));
var Gallery = function (_a) {
    var _b = _a.images, images = _b === void 0 ? [] : _b;
    return (<react_1.Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <react_1.Tab.List className="grid grid-cols-4 gap-6">
          {images.map(function (image) { return (<gallery_tab_1.default key={image.id} image={image}/>); })}
        </react_1.Tab.List>
      </div>
      <react_1.Tab.Panels className="aspect-square w-full">
        {images.map(function (image) { return (<react_1.Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <image_1.default fill src={image.url} alt="Image" className="object-cover object-center"/>
            </div>
          </react_1.Tab.Panel>); })}
      </react_1.Tab.Panels>
    </react_1.Tab.Group>);
};
exports.default = Gallery;
