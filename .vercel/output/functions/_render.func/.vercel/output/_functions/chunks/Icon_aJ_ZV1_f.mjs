import { c as createAstro, a as createComponent, r as renderTemplate, e as addAttribute, b as renderComponent, g as renderHead, m as maybeRenderHead, s as spreadAttributes, u as unescapeHTML, F as Fragment } from './astro/server_BD8ubyGr.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { getIconData, iconToSVG } from '@iconify/utils';

const logo = new Proxy({"src":"/_astro/logo.BxjPf8ir.svg","width":45,"height":44,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/assets/logo.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://www.george-the-painter.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro("https://www.george-the-painter.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description } = Astro2.props;
  return renderTemplate`<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"><link rel="sitemap" href="/sitemap-index.xml"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head>`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/global/BaseHead.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1722118883,"icons":{"arrow":{"body":"<path fill=\"none\" stroke=\"#F8F8F8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.5\" d=\"m7 10 5 5 5-5\"/>","width":24,"height":24},"backArrow":{"body":"<path fill=\"#0A2916\" fill-rule=\"evenodd\" d=\"m8.079 29 17.088 17.088-3.417 3.417L2.953 30.71a2.417 2.417 0 0 1 0-3.418L21.75 8.495l3.417 3.417L8.08 29Z\" clip-rule=\"evenodd\"/>","width":29,"height":58},"brush":{"body":"<path fill=\"#93E2AE\" fill-opacity=\".15\" d=\"m147.919 508.109 1.327-90.203c.146-9.964-7.045-18.124-16.063-18.226-9.018-.102-16.448 7.892-16.595 17.856l-1.327 90.203-32.657-.37 1.855-126.065c.146-9.963-7.047-18.123-16.064-18.225-9.016-.102-16.447 7.892-16.594 17.855l-1.855 126.065-48.986-.555 3.185-216.41 293.916 3.33-3.184 216.411-146.958-1.666Zm148.652-252.065.266-18.053c.586-39.881-28.155-72.542-64.197-72.951l-32.629-.37 1.592-108.284c.44-29.91-21.116-54.407-48.147-54.713-27.031-.307-49.301 23.692-49.74 53.602l-1.593 108.284-32.63-.371c-36.041-.409-65.733 31.589-66.32 71.47l-.265 18.053 293.663 3.333Z\"/>","width":301,"height":510},"mail":{"body":"<path fill=\"currentColor\" fill-opacity=\".15\" d=\"M27.546 31.127 8.197 16.083 6.64 14.87l1.563 1.217V45.61h42.594V16.09l-19.36 15.038a3.172 3.172 0 0 1-3.891 0ZM50.134 12.01l2.226 2.86-1.563 1.218 1.569-1.217-2.226-2.86h-.006Z\"/><path fill=\"currentColor\" d=\"M53.063 9.813H5.938a1.81 1.81 0 0 0-1.813 1.812v36.25a1.81 1.81 0 0 0 1.813 1.813h47.125a1.81 1.81 0 0 0 1.812-1.813v-36.25a1.81 1.81 0 0 0-1.812-1.812Zm-5.353 4.083L29.5 28.051 11.29 13.896h36.42Zm3.087 2.192V45.61H8.203V16.09L6.64 14.87l1.557 1.212 19.349 15.043a3.171 3.171 0 0 0 3.891 0l19.36-15.038Zm0 0 1.563-1.218-2.226-2.86h.006l2.226 2.86-1.57 1.218Z\"/>"},"phone":{"body":"<path fill=\"currentColor\" d=\"M53.667 29.75A24.172 24.172 0 0 0 29.5 5.583v4.834A19.341 19.341 0 0 1 47.362 22.35a19.332 19.332 0 0 1 1.471 7.4h4.834ZM5.333 24.917V12.833a2.417 2.417 0 0 1 2.417-2.416h12.083a2.417 2.417 0 0 1 2.417 2.416V22.5a2.417 2.417 0 0 1-2.417 2.417H15A19.333 19.333 0 0 0 34.333 44.25v-4.833A2.417 2.417 0 0 1 36.75 37h9.667a2.417 2.417 0 0 1 2.416 2.417V51.5a2.417 2.417 0 0 1-2.416 2.417H34.333c-16.015 0-29-12.985-29-29Z\"/><path fill=\"currentColor\" d=\"M42.896 24.201A14.476 14.476 0 0 1 44 29.75h-4.35A10.147 10.147 0 0 0 29.5 19.6v-4.35a14.5 14.5 0 0 1 13.396 8.951Z\"/>"},"roller":{"body":"<path fill=\"#93E2AE\" fill-opacity=\".15\" d=\"M326.625 117.045v-87.49c0-16.103-11.251-29.162-25.125-29.162H25.125C11.251.393 0 13.453 0 29.556v87.489c0 16.103 11.251 29.163 25.125 29.163H301.5c13.874 0 25.125-13.06 25.125-29.163Zm25.125-58.326V175.37c0 16.103-11.251 29.162-25.125 29.162H201c-27.755 0-50.25 26.11-50.25 58.326v29.163c-13.874 0-25.125 13.06-25.125 29.163v116.652c0 16.103 11.251 29.163 25.125 29.163H201c13.874 0 25.125-13.06 25.125-29.163V321.185c0-16.103-11.251-29.163-25.125-29.163v-29.163h125.625c41.629 0 75.375-39.169 75.375-87.488v-58.326c0-32.216-22.495-58.326-50.25-58.326Z\"/>","width":402,"height":467},"whatsapp":{"body":"<path fill=\"currentColor\" d=\"M46.538 12.616a23.722 23.722 0 0 0-16.941-7.033c-13.195 0-23.95 10.755-23.95 23.95a24.02 24.02 0 0 0 3.19 11.962L5.455 53.917l12.688-3.335a23.955 23.955 0 0 0 11.455 2.924c13.195 0 23.949-10.754 23.949-23.95 0-6.403-2.49-12.42-7.008-16.94Zm-16.941 36.83a19.96 19.96 0 0 1-10.15-2.78l-.725-.434-7.54 1.981 2.005-7.346-.483-.75A19.97 19.97 0 0 1 9.66 29.534c0-10.972 8.942-19.914 19.914-19.914a19.705 19.705 0 0 1 14.065 5.849 19.776 19.776 0 0 1 5.824 14.089c.048 10.971-8.894 19.889-19.865 19.889ZM40.52 34.559c-.604-.29-3.553-1.74-4.084-1.957-.556-.194-.943-.29-1.353.29-.411.604-1.547 1.957-1.886 2.344-.338.41-.7.46-1.305.145-.604-.29-2.537-.943-4.809-2.973-1.788-1.595-2.972-3.552-3.335-4.156-.338-.604-.048-.919.266-1.233.266-.266.604-.7.894-1.039.29-.338.411-.604.604-.99.194-.412.097-.75-.048-1.04-.145-.29-1.353-3.238-1.836-4.447-.484-1.16-.991-1.015-1.354-1.039h-1.16c-.41 0-1.039.145-1.595.75-.531.604-2.078 2.054-2.078 5.002s2.15 5.8 2.44 6.187c.29.41 4.23 6.452 10.223 9.038 1.426.628 2.538.99 3.408 1.257 1.425.459 2.73.386 3.77.241 1.16-.169 3.552-1.45 4.036-2.851.507-1.402.507-2.586.338-2.852-.17-.266-.532-.387-1.136-.677Z\"/>"}},"width":59,"height":59}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro = createAstro("https://www.george-the-painter.com");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/node_modules/astro-icon/components/Icon.astro", void 0);

export { $$BaseHead as $, $$Icon as a, logo as l };
