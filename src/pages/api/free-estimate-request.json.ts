import type { APIRoute } from "astro";
import type { FreeEstimateInfo } from "../../components/main/GetFreeEstimateForm";
import { Resend } from "resend";

const resend_key = import.meta.env.RESEND_KEY
const resend = new Resend(resend_key)
const mode = import.meta.env.MODE

export const POST: APIRoute = async ({ request }) => {

    const to = mode === "development" ? ['delivered@resend.dev'] : ['info@george-the-painter.com']

    const body = await request.json() as FreeEstimateInfo;


    const { data, error } = await resend.emails.send({
        from: 'Clients <onboarding@resend.dev>',
        to,
        subject: 'Client requesting estimate',
        html: `<div>
	<h5>client & project details:</h5>
	<p><strong>name: </strong>${body.firstName} ${body.lastName}</p>
	<p><strong>phone: ${body.phone}</strong></p>
	<p><strong>email: ${body.email}</strong></p>
	<p><strong>services required: ${body.services}</strong></p>
	<p><strong>project details: ${body.projectDetails}</strong></p>
</div>`,
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