<template>
  Профиль
  <button
    @click="logOut"
    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
  >
    Log out
  </button>
</template>
<script setup>
import { ref } from "vue";
const supabase = useSupabaseClient();
const router = useRouter();

const logOut = async () => {
  const { error } = await supabase.auth.signOut();
  router.push("/");
};
</script>
