import { a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderComponent, c as createAstro, d as renderSlot } from './astro/server_BD8ubyGr.mjs';
import 'kleur/colors';
import { l as logo, a as $$Icon, $ as $$BaseHead } from './Icon_aJ_ZV1_f.mjs';
import 'clsx';
/* empty css                         */

const arrow = new Proxy({"src":"/_astro/arrow.BL2lQDe0.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/assets/icons/arrow.svg";
							}
							
							return target[name];
						}
					});

const $$ServicesDropdown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="group relative md:hidden mx-auto w-32" id="services-dropdown "> <input type="checkbox" class="absolute top-0 left-0 peer/checkbox w-full h-full opacity-0" id="checkbox"> <button id="dropdown-button" class="peer/button group peer-checked/checkbox:-z-10 group-hover:text-emerald-100 focus-within:text-emerald-100 transition flex items-center gap-2 mx-auto">
Services
<img${addAttribute(arrow.src, "src")} class="group-focus-within:fill-emerald-100"> </button> <ul id="dropdown-menu" class="absolute peer-focus-within/button:block hidden bg-gray-800/95 mt-3 p-3 *:p-3 *:whitespace-nowrap"> <li><a href="/exterior-painting">Exterior painting</a></li> <li><a href="/interior-painting">Interior painting</a></li> <li><a href="">Drywall repair</a></li> <li><a href="">Power washing</a></li> </ul> </div> `;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/global/ServicesDropdown.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="py-3 flex justify-between items-center sticky top-0 z-50 bg-white/50 backdrop-blur-sm" data-astro-cid-eiyd7voq> <figure class="w-20 sm:w-32" data-astro-cid-eiyd7voq> <a href="/" data-astro-cid-eiyd7voq> <img${addAttribute(logo.src, "src")} class="w-14 mx-auto" alt="George the painter logo" data-astro-cid-eiyd7voq> </a> </figure> <nav class="flex-grow bg-gray-800 rounded-s-full flex justify-between m-1.5 mr-0 sm:pl-10 sm:text-base md:text-lg lg:text-xl items-center py-2 font-semibold text-lg *:transition" data-astro-cid-eiyd7voq> ${renderComponent($$result, "ServicesDropdown", $$ServicesDropdown, { "data-astro-cid-eiyd7voq": true })} <div class="hidden flex-grow md:flex justify-between" data-astro-cid-eiyd7voq> <a href="/exterior-painting" class="hover:text-emerald-300" data-astro-cid-eiyd7voq>Exterior painting</a> <a href="/interior-painting" class="hover:text-emerald-300" data-astro-cid-eiyd7voq>Interior painting</a> <a href="/power-washing" class="hover:text-emerald-300" data-astro-cid-eiyd7voq>Power washing</a> <a href="/drywall-repair" class="hover:text-emerald-300" data-astro-cid-eiyd7voq>Drywall repair</a> </div> <a href="/contact-form" class="bg-emerald-500 px-5 hidden sm:block md:px-10 mx-5 md:mx-10 rounded-full py-1 text-base md:text-xl text-center hover:scale-105" data-astro-cid-eiyd7voq>Get free estimate</a> <a href="/contact-form" class="bg-emerald-500 px-5 block sm:hidden  mx-auto rounded-full py-1 text-base text-center hover:scale-105 whitespace-nowrap" data-astro-cid-eiyd7voq>GET QUOTE</a> </nav> </header> `;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/global/Header.astro", void 0);

const srLogo = new Proxy({"src":"/_astro/srLogo.C5W66BC_.svg","width":58,"height":60,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/assets/srLogo.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full p-8 bg-gray-800 text-white flex flex-col md:flex-row"> <div class="flex flex-col gap-14 sm:flex-row sm:justify-around md:gap-32"> <div class="flex flex-col items-center sm:items-start"> <span class="text-xl">SERVICES</span> <ul class="mt-2 md:mt-4 *:md:my-2 *:my-1 font-light *:cursor-pointer text-center sm:text-left w-max"> <li class="hover:text-emerald-400 hover:underline">
Interior painting
</li> <li class="hover:text-emerald-400 hover:underline">
Exterior painting
</li> <li class="hover:text-emerald-400 hover:underline">
Power washing
</li> <li class="hover:text-emerald-400 hover:underline">
Drywall repair
</li> </ul> </div> <div class="flex flex-col items-center"> <span class="text-xl">CONTACT US</span> <div class="flex h-full my-4 *:w-10 items-center gap-4 "> <a href="https://api.whatsapp.com/send?phone=19738865345" target="_blank">${renderComponent($$result, "Icon", $$Icon, { "name": "whatsapp", "class": "text-4xl hover:text-emerald-400" })}</a> <a href="mailto:jorgehernz@hotmail.com" target="_blank">${renderComponent($$result, "Icon", $$Icon, { "name": "mail", "class": "text-4xl hover:text-emerald-400" })}</a> <a href="tel:+19738865345" target="_blank">${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "class": "text-4xl hover:text-emerald-400" })}</a> </div> </div> </div> <div class="flex flex-grow justify-center md:justify-end md:items-end mt-8"> <a href="https://personal-portfolio-sigma-three-30.vercel.app/" target="_blank"> <div class="flex flex-col-reverse md:flex-row items-center gap-2 cursor-pointer"> <span class="text-xs font-light tracking-wider">Website design & dev</span> <img${addAttribute(srLogo.src, "src")} alt="Sebastian Robayo" class="inline w-10"> </div> </a> </div> </footer>`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/global/Footer.astro", void 0);

const $$Astro = createAstro("https://www.george-the-painter.com");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="bg-white" data-astro-cid-gqnhmwb2> ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "data-astro-cid-gqnhmwb2": true })}${maybeRenderHead()}<body class="text-gray-950" data-astro-cid-gqnhmwb2> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-gqnhmwb2": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-gqnhmwb2": true })} </body></html>`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
