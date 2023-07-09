"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("next/image"));
var react_1 = require("@headlessui/react");
var utils_1 = require("@/lib/utils");
var GalleryTab = function (_a) {
    var image = _a.image;
    return (<react_1.Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {function (_a) {
            var selected = _a.selected;
            return (<div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <image_1.default fill src={image.url} alt="" className="object-cover object-center"/>
          </span>
          <span className={(0, utils_1.cn)('absolute inset-0 rounded-md ring-2 ring-offset-2', selected ? 'ring-black' : 'ring-transparent')}/>
        </div>);
        }}
    </react_1.Tab>);
};
exports.default = GalleryTab;
