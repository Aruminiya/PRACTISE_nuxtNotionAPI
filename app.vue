<template>
  <nav class="bg-white shadow-md px-2 py-3 z-10">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/">
        <h3 class="font-bold">Notion API 測試練習</h3>
      </NuxtLink>
      <div class="flex items-center">
        <UAvatar
          src="/leoPhoto.png"
          alt="Avatar"
        />
        <h3 class="font-bold ml-2">Leo</h3>
      </div>

    </div>
  </nav>
  <div class="grow">
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </div>

</template>

<script setup>

</script>

<style>
@import url('./assets/scss/main.scss');

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>