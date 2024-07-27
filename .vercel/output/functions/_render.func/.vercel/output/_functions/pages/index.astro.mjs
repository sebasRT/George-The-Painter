/* empty css                                 */
import { a as createComponent, f as defineStyleVars, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderComponent } from '../chunks/astro/server_BD8ubyGr.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_k2yv8L3m.mjs';
import { $ as $$ContacButtons } from '../chunks/ContacButtons_CcKLqO70.mjs';
import { $ as $$LinkButton } from '../chunks/linkButton_BvoVRHWL.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CvCeVo-w.mjs';
import { d as drywallRepair } from '../chunks/drywallRepairCard_B-y1vBPn.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const waves = new Proxy({"src":"/_astro/waves.BllMWQfJ.svg","width":1513,"height":509,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/assets/backgrounds/waves.svg";
							}
							
							return target[name];
						}
					});

const exteriorPainting = new Proxy({"src":"/_astro/exteriorPaintingCard.JP5yWGeX.jpeg","width":4490,"height":2993,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/assets/images/exteriorPaintingCard.jpeg";
							}
							
							return target[name];
						}
					});

const interiorPainting = new Proxy({"src":"/_astro/interiorPaintingCard.Bi_cYpxn.jpeg","width":4000,"height":2668,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/assets/images/interiorPaintingCard.jpeg";
							}
							
							return target[name];
						}
					});

const powerWashing = new Proxy({"src":"/_astro/powerWashingCard.I7wgfNrP.jpeg","width":6000,"height":4000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/assets/images/powerWashingCard.jpeg";
							}
							
							return target[name];
						}
					});

const colors = {
  "emerald": {
    "50": "#f2fbf5",
    "100": "#e0f8e7",
    "200": "#c2f0d1",
    "300": "#93e2ae",
    "400": "#50c878",
    "500": "#36b15f",
    "600": "#27924c",
    "700": "#22733d",
    "800": "#205b34",
    "900": "#1c4b2e",
    "950": "#0a2916"
  },
  "white": "#F9F9F9"
};

const $$ServicesGridMobile = createComponent(($$result, $$props, $$slots) => {
  const emerald950 = colors.emerald[950];
  const emerald500 = colors.emerald[500];
  const $$definedVars = defineStyleVars([{ emerald950, emerald500 }]);
  return renderTemplate`${maybeRenderHead()}<section id="services" class="relative flex flex-col  sm:hidden " data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Image", $$Image, { "src": waves, "class": "absolute top-0 z-0", "alt": "background-image", "data-astro-cid-7hgoroby": true })} <h3 class="flex flex-col text-center text-4xl py-10 font-bold z-10" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> <span class="text-emerald-50" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>OUR</span> <span class="text-gray-800" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>SERVICES</span> </h3> <section id="servicesGrid" class=" grid grid-cols-1 md:grid-cols-2 gap-10 *:shadow-md *:rounded-sm *:bg-white *:z-10 px-3 mx-auto w-full max-w-4xl" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> <div class="serviceCard" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> <figure data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Image", $$Image, { "src": exteriorPainting, "alt": "Exterior Painting", "data-astro-cid-7hgoroby": true })} </figure> <div id="cardInfo" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> <span class="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>Exterior Painting</span> <p class="serviceDescription" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>
Elevate your curb appeal with our expert exterior painting
                    services. From weather-worn to wow-worthy, we bring <b data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>vibrancy</b>
and <b data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>protection</b> to your home's exterior with <b data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>quality paints</b>
and <b data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>skilled craftsmanship</b>.
</p> ${renderComponent($$result, "LinkButton", $$LinkButton, { "classes": "bg-emerald-500 text-white font-semibold px-5 py-2 text-sm rounded-full hover:scale-105 transition", "url": "/exterior-painting", "title": "LEARN MORE", "data-astro-cid-7hgoroby": true })} </div> </div> <div class="serviceCard" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> <figure data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Image", $$Image, { "src": interiorPainting, "alt": "Interior Painting", "data-astro-cid-7hgoroby": true })} </figure> <div class="cardInfo" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> <span class="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>Interior Painting</span> <p class="serviceDescription" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>
Transform your space with a fresh coat of paint! Our
                    interior painting services <b data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>breathe new life into your home or office</b>, with meticulous attention to detail and a splash of <b data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>your favorite colors</b>.
</p> ${renderComponent($$result, "LinkButton", $$LinkButton, { "classes": "bg-emerald-500 text-white font-semibold px-5 py-2 text-sm rounded-full hover:scale-105 transition", "url": "/interior-painting", "title": "LEARN MORE", "data-astro-cid-7hgoroby": true })} </div> </div> <div class="serviceCard" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> <figure data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Image", $$Image, { "src": powerWashing, "alt": "Power Washing", "data-astro-cid-7hgoroby": true })} </figure> <div class="cardInfo" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> <span class="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>Power washing</span> <p class="serviceDescription" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>
Revitalize your surfaces with our expert power washing
                    services. Say goodbye to grime, mold, and dirt, and hello to
<b data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>a fresh, clean look</b>.
</p> <!-- <LinkButton
                    classes="bg-emerald-500 text-white font-semibold px-5 py-2 text-sm rounded-full hover:scale-105 transition"
                    url="/"
                    title="LEARN MORE"
                /> --> </div> </div> <div class="serviceCard" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> <figure data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Image", $$Image, { "src": drywallRepair, "alt": "Exterior Painting", "data-astro-cid-7hgoroby": true })} </figure> <div class="cardInfo" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}> <span class="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>Drywall repair</span> <p class="serviceDescription" data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>
Smooth out imperfections and restore your walls with our
<b data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>professional</b> drywall repair services. From small dents
                    to major damage, we've got you covered for a <b data-astro-cid-7hgoroby${addAttribute($$definedVars, "style")}>flawless finish</b>.
</p> <!-- <LinkButton
                    classes="bg-emerald-500 text-white font-semibold px-5 py-2 text-sm rounded-full hover:scale-105 transition"
                    url="/"
                    title="LEARN MORE"
                /> --> </div> </div> </section> </section> `;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/pages/ServicesGridMobile.astro", void 0);

const $$ServicesGridDesktop = createComponent(($$result, $$props, $$slots) => {
  const emerald950 = colors.emerald[950];
  const emerald500 = colors.emerald[500];
  const $$definedVars = defineStyleVars([{ emerald950, emerald500 }]);
  return renderTemplate`${maybeRenderHead()}<section class="z-10 hidden sm:block" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> <div title="Interior painting services" class="relative h-[30rem]" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> <figure id="interior-painting-image" class="absolute right-0 w-4/6 h-[30rem] -z-10" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Image", $$Image, { "src": interiorPainting, "alt": "Interior Painting", "class": "object-cover h-full", "data-astro-cid-n4m4cw32": true })} </figure> <div class="cardInfo flex h-full p-10 flex-col justify-between items-center text-center w-2/4 z-10" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> <span class="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>Interior Painting</span> <p class="serviceDescription text-xl" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>
Transform your space with a fresh coat of paint! Our interior
                painting services <b data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>breathe new life into your home or office</b>, with meticulous attention to detail and a splash of <b data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>your favorite colors</b>.
</p> ${renderComponent($$result, "LinkButton", $$LinkButton, { "classes": "bg-emerald-500 text-white font-semibold px-5 py-2 text-sm rounded-full hover:scale-105 transition", "url": "/interior-painting", "title": "LEARN MORE", "data-astro-cid-n4m4cw32": true })} </div> </div> <div title="Exterior painting services" class="relative h-[30rem]" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> <figure id="exterior-painting-image" class="absolute left-0 w-4/6 h-[30rem] -z-10" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Image", $$Image, { "src": exteriorPainting, "alt": "Exterior Painting", "class": "object-cover h-full", "data-astro-cid-n4m4cw32": true })} </figure> <div class="cardInfo flex h-full p-10 flex-col justify-between items-center text-center w-2/4 z-10 float-right" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> <span class="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>Exterior Painting</span> <p class="serviceDescription text-xl" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>
Elevate your curb appeal with our expert exterior painting
                services. From weather-worn to wow-worthy, we bring <b data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>vibrancy</b>
and <b data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>protection</b> to your home's exterior with <b data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>quality paints</b>
and <b data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>skilled craftsmanship</b>.
</p> ${renderComponent($$result, "LinkButton", $$LinkButton, { "classes": "bg-emerald-500 text-white font-semibold px-5 py-2 text-sm rounded-full hover:scale-105 transition", "url": "/exterior-painting", "title": "LEARN MORE", "data-astro-cid-n4m4cw32": true })} </div> </div> <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 *:shadow-md *:rounded-sm *:bg-white *:z-10 px-10 mx-auto w-full max-w-4xl" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> <div class="serviceCard" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> <figure data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Image", $$Image, { "src": powerWashing, "alt": "Power Washing", "data-astro-cid-n4m4cw32": true })} </figure> <div class="cardInfo" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> <span class="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>Power washing</span> <p class="serviceDescription" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>
Revitalize your surfaces with our expert power washing
                    services. Say goodbye to grime, mold, and dirt, and hello to
<b data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>a fresh, clean look</b>.
</p> <!-- <LinkButton
                    classes="bg-emerald-500 text-white font-semibold px-5 py-2 text-sm rounded-full hover:scale-105 transition"
                    url="/"
                    title="LEARN MORE"
                /> --> </div> </div> <div class="serviceCard" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> <figure data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Image", $$Image, { "src": drywallRepair, "alt": "Exterior Painting", "data-astro-cid-n4m4cw32": true })} </figure> <div class="cardInfo" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}> <span class="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>Drywall repair</span> <p class="serviceDescription" data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>
Smooth out imperfections and restore your walls with our
<b data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>professional</b> drywall repair services. From small dents
                    to major damage, we've got you covered for a <b data-astro-cid-n4m4cw32${addAttribute($$definedVars, "style")}>flawless finish</b>.
</p> <!-- <LinkButton
                    classes="bg-emerald-500 text-white font-semibold px-5 py-2 text-sm rounded-full hover:scale-105 transition"
                    url="/"
                    title="LEARN MORE"
                /> --> </div> </div> </div> </section> `;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/pages/ServicesGridDesktop.astro", void 0);

const brush = new Proxy({"src":"/_astro/brush.BSK8Nnox.svg","width":301,"height":510,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/assets/icons/brush.svg";
							}
							
							return target[name];
						}
					});

const roller = new Proxy({"src":"/_astro/roller.C9KFDAQ5.svg","width":402,"height":467,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/assets/icons/roller.svg";
							}
							
							return target[name];
						}
					});

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="w-full my-10 relative flex flex-col gap-10 md:gap-20 xl-gap-25 justify-between items-center text-center"> <img${addAttribute(brush.src, "src")} class="absolute h-40 md:h-60 lg:h-80 left-10 top-3"> <img${addAttribute(roller.src, "src")} class="absolute h-40 md:h-60 lg:h-80 right-10 bottom-3"> <h2 class="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-gray-800">
Brushstrokes made of <span class="text-emerald-500">excellence</span>.
</h2> <p class="max-w-md text-xl">
Specializing in both <b class="text-gray-800">interior</b> and
<b class="text-gray-800">exterior</b> painting, we bring your vision to
        life, infusing your home with <b class="text-gray-800">timeless beauty and style.</b> </p> <a href="/contact-form" class="text-xl font-bold px-5 py-2 text-white bg-emerald-500 rounded-full hover:scale-105 transition">GET QUOTE</a> </section>`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/pages/HeroSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "George the Painter" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "ServicesGridMobile", $$ServicesGridMobile, {})} ${renderComponent($$result2, "ServicesGridDesktop", $$ServicesGridDesktop, {})} ${renderComponent($$result2, "ContacButtons", $$ContacButtons, {})} ` })}`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/pages/index.astro", void 0);

const $$file = "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
