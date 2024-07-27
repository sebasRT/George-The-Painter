import type { APIRoute } from "astro";
import type { FreeEstimateInfo } from "../../components/main/GetFreeEstimateForm";

export const POST: APIRoute = async({params, request}) => {

    const body = await request.json() as FreeEstimateInfo;
    
    console.log( body);
    
    return new Response(
        JSON.stringify({
            state: "running"
        }),
        
    )
}