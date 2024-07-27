import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_BD8ubyGr.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.george-the-painter.com");
const $$StepNumber = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StepNumber;
  const { number, style } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["grid place-items-center rounded-full", style], "class:list")}> <span>${number}</span> </div>`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/ui/stepNumber.astro", void 0);

export { $$StepNumber as $ };
