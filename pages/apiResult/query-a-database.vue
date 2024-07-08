<template>
  <section class="grid grid-cols-9 gap-4 mt-12">
    <!-- 說明區塊 -->
    <section class="col-span-9">
      <UBadge :ui="{ rounded: 'rounded-full' }" color="blue">POST</UBadge>
      <h1 class="font-bold">Query a database 篩查資料庫</h1>
      <br/>
      <p>這邊的 API 提供了 POST 篩查資料庫</p>
    </section>
    <!-- JSON 資料區塊 -->
    <section class="col-span-9">
      <UButton color='white' @click="useApi()">點擊執行 API</UButton>
      <br/>
      <div>
        <VueJsonPretty :data="jsonData" :deep="1" />
      </div>
    </section>
  </section>
</template>

<script setup>

const jsonData = ref('');

const useApi = async () => {
  try {
    const notionApi = await useFetch('/api/query-a-database');

    const { message, response, error } = notionApi?.data?.value;
    console.log(message);
    console.log(response);

    jsonData.value = response;

    if(error) {
      console.error(error);
    }
  } catch(err) {
    console.error('發生錯誤')
    console.error(err);
  }
}

</script>