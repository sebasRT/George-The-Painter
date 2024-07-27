import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_BD8ubyGr.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.george-the-painter.com");
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { classes, url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}> <button${addAttribute([" uppercase", classes], "class:list")}> ${title} </button> </a>`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/ui/linkButton.astro", void 0);

export { $$LinkButton as $ };
