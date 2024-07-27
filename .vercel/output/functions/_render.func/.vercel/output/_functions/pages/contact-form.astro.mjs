/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as renderSlot, e as addAttribute } from '../chunks/astro/server_BD8ubyGr.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, l as logo, a as $$Icon } from '../chunks/Icon_aJ_ZV1_f.mjs';
/* empty css                                 */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useReducer, useRef } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.george-the-painter.com");
const $$BasicLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BasicLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="bg-white-50" data-astro-cid-ajel5alv> ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "data-astro-cid-ajel5alv": true })}${maybeRenderHead()}<body class="h-screen flex flex-col" data-astro-cid-ajel5alv> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/layouts/BasicLayout.astro", void 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};
const GetFreeEstimateForm = () => {
  const [formState, setFormState] = useState("filling");
  const [services, dispatch] = useReducer(reducer, [""]);
  const requestFreeEstimate = async (e) => {
    e.preventDefault();
    setFormState("pending");
    const formData = new FormData(e.currentTarget);
    const { firstName, lastName, phone, email, projectDetails } = Object.fromEntries(formData);
    const body = {
      firstName: firstName.toString(),
      lastName: lastName.toString(),
      phone: phone.toString(),
      email: email.toString(),
      services,
      projectDetails: projectDetails.toString()
      // budget: 
    };
    const res = await fetchData(body);
    if (!res.ok) {
      setFormState("failed");
      return;
    }
    setFormState("successful");
  };
  switch (formState) {
    case "filling":
      return /* @__PURE__ */ jsx(Filling, { submitHandler: requestFreeEstimate, dispatch });
    case "pending":
      return /* @__PURE__ */ jsx(Pending, {});
    case "successful":
      return /* @__PURE__ */ jsx(Successful, {});
    case "failed":
      return /* @__PURE__ */ jsx(Failed, {});
  }
};
const Filling = ({ submitHandler, dispatch }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-4xl mx-10 font-semibold my-5", children: [
    "Let's create your ",
    /* @__PURE__ */ jsx("span", { className: "text-emerald-600", children: "Free Estimate" }),
    " !"
  ] }),
  /* @__PURE__ */ jsxs("form", { onSubmit: submitHandler, className: "grid grid-cols-1 md:grid-cols-2 mx-10", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "font-bold text-lg", children: "What's your name?" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-5", children: [
        /* @__PURE__ */ jsx(Input, { required: true, minLength: 3, placeholder: "First Name", name: "firstName" }),
        /* @__PURE__ */ jsx(Input, { minLength: 3, placeholder: "Last Name", name: "lastName" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "font-bold mt-10 text-lg", children: "Your contact information" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-5", children: [
        /* @__PURE__ */ jsx(Input, { required: true, minLength: 5, placeholder: "Phone", type: "tel", name: "phone" }),
        /* @__PURE__ */ jsx(Input, { minLength: 3, placeholder: "Email", type: "email", name: "email" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "font-bold mt-10 text-lg", children: "Which services do you require?" }),
      /* @__PURE__ */ jsx(ServicesSelector, { dispatch })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-md", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-bold text-lg", children: "Project details" }),
      /* @__PURE__ */ jsx("textarea", { name: "projectDetails", id: "", rows: 5, className: "border-2 outline-none valid:border-emerald-500 w-full resize-none", required: true }),
      /* @__PURE__ */ jsx("p", { className: "text-center w-full max-w-xs text-xs mx-auto my-10", children: "By clicking next or submit you agree to receive phone, email, or text communication from us." }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "block mx-auto px-5 rounded-full text-white font-bold tracking-wider bg-emerald-500 mb-10", children: "SUBMIT" })
    ] })
  ] })
] });
const Successful = () => /* @__PURE__ */ jsx("div", { className: "grid w-full h-full place-items-center text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-20 px-5", children: [
  /* @__PURE__ */ jsxs("span", { className: "text-4xl sm:text-5xl font-bold", children: [
    "Your request was submitted ",
    /* @__PURE__ */ jsx("span", { className: "text-emerald-600", children: "successfully" }),
    " !"
  ] }),
  /* @__PURE__ */ jsxs("span", { className: "max-w-md text-xl font-semibold", children: [
    "We'll get in touch with you soon to gather all the details of the project and ensure an ",
    /* @__PURE__ */ jsx("b", { className: "text-emerald-500", children: "accurate + fair fare" }),
    " ."
  ] })
] }) });
const Pending = () => /* @__PURE__ */ jsx("div", { className: "grid w-full h-full place-items-center text-emerald-500 text-9xl", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxs("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2", children: [
  /* @__PURE__ */ jsx("path", { strokeDasharray: "60", strokeDashoffset: "60", strokeOpacity: "0.3", d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z", children: /* @__PURE__ */ jsx("animate", { fill: "freeze", attributeName: "stroke-dashoffset", dur: "1.3s", values: "60;0" }) }),
  /* @__PURE__ */ jsxs("path", { strokeDasharray: "15", strokeDashoffset: "15", d: "M12 3C16.9706 3 21 7.02944 21 12", children: [
    /* @__PURE__ */ jsx("animate", { fill: "freeze", attributeName: "stroke-dashoffset", dur: "0.3s", values: "15;0" }),
    /* @__PURE__ */ jsx("animateTransform", { attributeName: "transform", dur: "1.5s", repeatCount: "indefinite", type: "rotate", values: "0 12 12;360 12 12" })
  ] })
] }) }) });
const Failed = () => /* @__PURE__ */ jsx("div", { className: "grid w-full h-full place-items-center text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-20 px-5", children: [
  /* @__PURE__ */ jsx("span", { className: "text-3xl sm:text-4xl font-bold", children: "We couldn't process your request." }),
  /* @__PURE__ */ jsxs("span", { className: "max-w-md text-2xl font-semibold", children: [
    "We invite you to contact us directly through our ",
    /* @__PURE__ */ jsx("span", { className: "text-emerald-500", children: "communication channels" }),
    ":"
  ] }),
  /* @__PURE__ */ jsx("div", { className: "text-emerald-500 text-5xl", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5 ", children: [
        /* @__PURE__ */ jsx("a", { href: "https://api.whatsapp.com/send?phone=19738865345", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" }) }) }),
        /* @__PURE__ */ jsx("a", { href: "tel:19738865345", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxs("g", { fill: "currentColor", children: [
          /* @__PURE__ */ jsx("path", { d: "M22 12A10.002 10.002 0 0 0 12 2v2a8.003 8.003 0 0 1 7.391 4.938A8 8 0 0 1 20 12zM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10" }),
          /* @__PURE__ */ jsx("path", { d: "M17.543 9.704A5.99 5.99 0 0 1 18 12h-1.8A4.199 4.199 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "tel:19738865345", className: "text-base text-gray-800", children: "(973)886-5345" })
    ] }),
    /* @__PURE__ */ jsx("a", { href: "mailto:us@gtp.art", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 1024 1024", children: [
        /* @__PURE__ */ jsx("path", { fill: "currentColor", fillOpacity: "0.15", d: "M477.5 536.3L135.9 270.7l-27.5-21.4l27.6 21.5V792h752V270.8L546.2 536.3a55.99 55.99 0 0 1-68.7 0" }),
        /* @__PURE__ */ jsx("path", { fill: "currentColor", fillOpacity: "0.15", d: "m876.3 198.8l39.3 50.5l-27.6 21.5l27.7-21.5l-39.3-50.5z" }),
        /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32m-94.5 72.1L512 482L190.5 232.1zm54.5 38.7V792H136V270.8l-27.6-21.5l27.5 21.4l341.6 265.6a55.99 55.99 0 0 0 68.7 0zl27.6-21.5l-39.3-50.5h.1l39.3 50.5z" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-base text-gray-800", children: "us@gtp.art" })
    ] }) })
  ] }) })
] }) });
const ServicesSelector = ({ dispatch }) => {
  const handler = (e) => {
    if (e.currentTarget.checked) {
      dispatch({ type: "add", payload: e.currentTarget.value });
    } else {
      dispatch({ type: "remove", payload: e.currentTarget.value });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 w-full py-5", children: [
    /* @__PURE__ */ jsx(ServiceCheckbox, { value: "interior painting", onChange: handler }),
    /* @__PURE__ */ jsx(ServiceCheckbox, { value: "exterior painting", onChange: handler }),
    /* @__PURE__ */ jsx(ServiceCheckbox, { value: "drywall repair", onChange: handler }),
    /* @__PURE__ */ jsx(ServiceCheckbox, { value: "power washing", onChange: handler }),
    /* @__PURE__ */ jsx(ServiceCheckbox, { value: "others", onChange: handler })
  ] });
};
const ServiceCheckbox = ({ value, ...props }) => /* @__PURE__ */ jsxs("div", { className: "relative w-fit h-fit flex gap-2 px-2 items-center border has-[:checked]:border-emerald-500 group", children: [
  /* @__PURE__ */ jsx("input", { type: "checkbox", ...props, value, className: "opacity-0 absolute w-full h-full" }),
  /* @__PURE__ */ jsx("span", { className: "whitespace-nowrap", children: value }),
  /* @__PURE__ */ jsx("svg", { className: "hidden group-has-[:checked]:block group-has-[:checked]:text-emerald-500 ", xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxs("g", { fill: "none", fillRule: "evenodd", children: [
    /* @__PURE__ */ jsx("path", { d: "M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm11.95 6.796a1 1 0 0 0-1.414-1.415l-4.95 4.95l-2.121-2.121a1 1 0 1 0-1.415 1.414l2.758 2.758a1.1 1.1 0 0 0 1.556 0z" })
  ] }) }),
  /* @__PURE__ */ jsx("svg", { className: "text-gray-500/20 group-has-[:checked]:hidden", xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2" }) })
] });
const Input = ({ ...props }) => {
  const input = useRef(null);
  const validate = (event) => {
    if (!event.currentTarget.validity.valid) {
      event.currentTarget.reportValidity();
      return;
    }
    if (event.currentTarget.validity.valid) {
      input.current?.classList.replace("border-red-500", "border-emerald-500");
      input.current?.classList.add("has-[:valid]:border-emerald-500");
      return;
    }
  };
  return /* @__PURE__ */ jsx("div", { className: " p-2 w-fit border-2 has-[:focus]:border-gray-600", ref: input, children: /* @__PURE__ */ jsx("input", { className: "bg-transparent outline-none", ...props, onBlur: validate, autoComplete: "off", autoFocus: false }) });
};
const fetchData = async (body) => {
  const bodyJson = JSON.stringify(body);
  try {
    const res = await fetch(
      "/api/free-estimate-request.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: bodyJson
      }
    );
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": "Contact form" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="py-3 flex justify-between items-center"> <figure class="w-20 sm:w-32"> <a href="/"> <img${addAttribute(logo.src, "src")} class="w-14 mx-auto" alt="George the painter logo"> </a> </figure> <div class="mr-3 md:mr-10"> <a href="/" class="flex items-center gap-3 text-base sm:text-2xl font-medium"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "backArrow", "class": "text-2xl sm:text-5xl" })}
HOME
</a> </div> </header> <section class="flex-grow"> ${renderComponent($$result2, "GetFreeEstimateForm", GetFreeEstimateForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/components/main/GetFreeEstimateForm", "client:component-export": "default" })} </section> ` })}`;
}, "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/pages/contact-form/index.astro", void 0);

const $$file = "C:/Users/rtseb/MyProjects - Sebastian Robayo/George The Painter/GeorgeThePainter/src/pages/contact-form/index.astro";
const $$url = "/contact-form";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
