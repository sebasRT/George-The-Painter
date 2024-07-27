/* empty css                                 */
import { a as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_BD8ubyGr.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../chunks/Hero_Umq0X2BP.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_k2yv8L3m.mjs';
export { renderers } from '../renderers.mjs';

const HeroPowerWashing = new Proxy({"src":"/_astro/heroPowerWashing.CdaRVLZ4.jpeg","width":1000,"height":667,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/assets/images/heroPowerWashing.jpeg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Power washing services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "img": HeroPowerWashing, "alt": "Power Washing services", "headline": "Achieve a like-new look with our professional power washing solutions", "subheadline": "High-pressure cleaning that removes dirt, grime, and stains \u2013 Professional results you can see." })} ` })}`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/pages/power-washing/index.astro", void 0);

const $$file = "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/pages/power-washing/index.astro";
const $$url = "/power-washing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
