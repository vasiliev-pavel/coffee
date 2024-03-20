<template>
    <section class="settings-bar">
        <form class="form">
            <div class="form-section">
                <div class="form-control">
                    <label>Name</label>
                    <input type="text" name="full_name" :value="full_name" />
                </div>
                <div class="form-control">
                    <label>Email</label>
                    <input type="email" name="email" :value="user_email" readonly />
                </div>
            </div>
            <div class="form-section">
                <div class="form-control">
                    <label>Notifications</label>
                    <input type="checkbox" name="notifications">
                </div>
                <div class="form-control">
                    <label>Receipt on Email</label>
                    <input type="checkbox" name="ereceipt">

                </div>
            </div>
            <div class="form-section">
                <div class="form-control">
                    <NuxtLink to="/">About Us</NuxtLink>
                </div>
                <div class="form-control">
                    <NuxtLink to="/">Contact Us</NuxtLink>
                </div>
            </div>
            <div class="form-section">
                <div class="form-control">
                    <button class="text-red-800" @click="logOut">Log out</button>
                </div>
            </div>
            <div class="form-section">
                <div class="form-control">
                    <button>Delete Account</button>
                </div>
            </div>
        </form>
    </section>
</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const router = useRouter();


watchEffect(() => {
    if (!user.value) {
        router.push("/");
    }
});


const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.push("/");
};

const user_email = user.value.email;
const full_name = user.value.user_metadata.full_name;
const avatar_url = user.value.user_metadata.avatar_url;
</script>

<style>
.settings-bar {
    display: flex;
    width: 100%;
}

.form {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.form-section {
    display: flex;
    flex-direction: column;
    box-shadow: rgba(6, 5, 50, 0.15) 0px 4px 22px -6px;
    background-color: #fff;
    padding: 15px;
    margin: 15px;
    border-radius: 1.5rem;
}

.form-control {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
</style>