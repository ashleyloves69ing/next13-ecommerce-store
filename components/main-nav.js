"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
var navigation_1 = require("next/navigation");
var utils_1 = require("@/lib/utils");
var MainNav = function (_a) {
    var data = _a.data;
    var pathname = (0, navigation_1.usePathname)();
    var routes = data.map(function (route) { return ({
        href: "/category/".concat(route.id),
        label: route.name,
        active: pathname === "/category/".concat(route.id),
    }); });
    return (<nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map(function (route) { return (<link_1.default key={route.href} href={route.href} className={(0, utils_1.cn)('text-sm font-medium transition-colors hover:text-black', route.active ? 'text-black' : 'text-neutral-500')}>
          {route.label}
      </link_1.default>); })}
    </nav>);
};
exports.default = MainNav;
