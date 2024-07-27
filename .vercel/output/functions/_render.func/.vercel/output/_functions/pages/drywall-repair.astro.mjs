/* empty css                                 */
import { a as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_BD8ubyGr.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../chunks/Hero_Umq0X2BP.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_k2yv8L3m.mjs';
import { d as drywallRepair } from '../chunks/drywallRepairCard_B-y1vBPn.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Power washing services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "img": drywallRepair, "alt": "Power Washing services", "headline": "Perfectly smooth walls, every time \u2013 professional drywall repair services", "subheadline": "professional repairs for holes, cracks, and water damage \u2013 transform your walls with our expertise." })} ` })}`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/pages/drywall-repair/index.astro", void 0);

const $$file = "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/pages/drywall-repair/index.astro";
const $$url = "/drywall-repair";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
