import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend_key = "re_JLA5pZAE_7S7HDZonC75377xBA9bDLCSi";
const resend = new Resend(resend_key);
const POST = async ({ request }) => {
  const body = await request.json();
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "Hello World",
    html: `<strong>
        Client requesting estimate </br>
        name: ${body.firstName} ${body.lastName}</br>
        phone: ${body.phone}</br>
        email: ${body.email}</br>
        project details: ${body.projectDetails}</br>
        services: ${body.services}</br>
        </strong>`
  });
  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message
      }),
      { status: 500 }
    );
  }
  return new Response(
    JSON.stringify({
      data
    }),
    { status: 200 }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
