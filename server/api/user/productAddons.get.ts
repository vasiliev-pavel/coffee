import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);

    // @ts-ignore
    const { data, error } = await client.rpc(
        "get_product_addons",
    );
    if (error) {
        console.error(error);
        return { error };
    }
    return { data };
});
