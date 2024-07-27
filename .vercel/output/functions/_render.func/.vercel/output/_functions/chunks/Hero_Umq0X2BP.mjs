import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from './astro/server_BD8ubyGr.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CvCeVo-w.mjs';
import { $ as $$LinkButton } from './linkButton_BvoVRHWL.mjs';
/* empty css                         */

const $$Astro = createAstro("https://www.george-the-painter.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { img, alt, headline, subheadline } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full relative h-[80vh] text-white p-3 sm:p-5 md:p-10" data-astro-cid-63nk27qg> <div class="size-full flex flex-col justify-around max-w-3xl" data-astro-cid-63nk27qg> <h1 class="text-4xl sm:text-5xl md:text-5xl font-bold" data-astro-cid-63nk27qg>${headline}</h1> <div class="mt-10 flex-grow flex flex-col justify-between items-center max-w-xl" data-astro-cid-63nk27qg> <span class="text-2xl md:text-3xl italic" data-astro-cid-63nk27qg>${subheadline}</span> ${renderComponent($$result, "LinkButton", $$LinkButton, { "title": "Get Free Estimate", "url": "/contact-form", "classes": "text-lg  font-bold bg-emerald-600 py-2 px-5 rounded-full hover:scale-105 transition self-center tracking-wide", "data-astro-cid-63nk27qg": true })} </div> </div> <figure class="-z-10 absolute inset-0 h-[80vh] object-cover" id="heroImage" data-astro-cid-63nk27qg> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": alt, "class": "w-full h-full object-cover", "data-astro-cid-63nk27qg": true })} </figure> </section> `;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/global/Hero.astro", void 0);

export { $$Hero as $ };
