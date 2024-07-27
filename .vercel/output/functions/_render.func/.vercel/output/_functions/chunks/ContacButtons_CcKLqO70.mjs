import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from './astro/server_BD8ubyGr.mjs';
import 'kleur/colors';
import { a as $$Icon } from './Icon_aJ_ZV1_f.mjs';

const $$ContacButtons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex justify-end sticky bottom-0 mt-5 z-10"> <div class=" flex mr-5 mb-5 w-fit px-5 py-1 rounded-full float-end bg-emerald-500 items-center"> <a href="https://api.whatsapp.com/send?phone=19738865345" target="_blank" class="px-2 text-white hover:text-emerald-800">${renderComponent($$result, "Icon", $$Icon, { "name": "whatsapp", "title": "Contact us via Whatsapp", "class": "text-4xl" })}</a> <a href="mailto:jorgehernz@hotmail.com" target="_blank" class="px-2 text-white hover:text-emerald-800">${renderComponent($$result, "Icon", $$Icon, { "name": "mail", "title": "Contact us via Email", "class": "text-4xl" })}</a> <a href="tel:+19738865345" target="_blank" class="px-2 text-white hover:text-emerald-800">${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "title": "Contact us via phone", "class": "text-4xl" })}</a> </div> </div>`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/global/ContacButtons.astro", void 0);

export { $$ContacButtons as $ };
