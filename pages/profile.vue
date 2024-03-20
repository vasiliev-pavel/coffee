<template>
  <div v-if="user">
    <ProfileBar />
    <HistoryBar />
  </div>
</template>

<script setup>
const router = useRouter();
const user = useSupabaseUser();


watchEffect(() => {
  if (!user.value) {
    router.push("/");
  }
});


</script>
