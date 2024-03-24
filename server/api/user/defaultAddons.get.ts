import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);

    // @ts-ignore
    const { data, error } = await client.rpc(
        "get_default_addons_by_product",
    );
    if (error) {
        console.error(error);
        return { error };
    }
    return { data };
});
