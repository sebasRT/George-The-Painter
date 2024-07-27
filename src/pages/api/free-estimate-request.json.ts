import type { APIRoute } from "astro";
import type { FreeEstimateInfo } from "../../components/main/GetFreeEstimateForm";
import { Resend } from "resend";

const resend_key = import.meta.env.RESEND_KEY
const resend = new Resend(resend_key)
export const POST: APIRoute = async ({ request }) => {


    const body = await request.json() as FreeEstimateInfo;

    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Client requesting estimate',
        html: `<strong>
        client & project details:
         </br>
         </br>
        name: ${body.firstName} ${body.lastName}</br>
        phone: ${body.phone}</br>
        email: ${body.email}</br>
        services: ${body.services}</br>
        project details: ${body.projectDetails}</br>
        </strong>`,
    });

    if (error) {
        return new Response(
            JSON.stringify({
                error: error.message
            }),
            { status: 500 }
        )
    }

    return new Response(
        JSON.stringify({
            data
        }),
        { status: 200 }
    )
}