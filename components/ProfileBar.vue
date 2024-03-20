<template>
    <section class="profile-bar rounded-lg">
        <div class="profile-avatar">
            <img class="rounded-lg" :src="avatar_url" alt="Profile Avatar" />
        </div>
        <div class="profile-info">
            <h2>{{ full_name }}</h2>
            <span>{{ user_email }}</span>
        </div>
        <div class="profile-settings">
            <NuxtLink to="/settings">⚙</NuxtLink>
        </div>
    </section>
</template>

<script setup>
const user = useSupabaseUser();

const user_email = user.value.email;
const full_name = user.value.user_metadata.full_name;
const avatar_url = user.value.user_metadata.avatar_url;
</script>

<style>
.profile-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 15px;
    background-color: #2d2d2d;
    color: #ddd;
    position: relative;
}

.profile-avatar {
    display: flex;
    width: auto;

    &>img {
        max-height: 100px;
    }
}

.profile-info {
    display: flex;
    flex-direction: column;
    padding: 0 15px;

    &>h2 {
        font-weight: bold;
    }
}

.profile-settings {
    position: absolute;
    right: 5%;
    top: 20%;
    font-weight: bold;
    font-size: 2rem;
}
</style>