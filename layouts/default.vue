<template>
  <main class="container mx-auto h-full">
    <div class="grid grid-cols-12 gap-4 h-full">
      <section class="col-span-12 sm:col-span-3 shadow-xl">
        <div class="mt-12 ">
          <div class="px-3" v-for="{ link, name, descript, method } in links" :key="link.name">
            <NuxtLink :to="link">
              <UTooltip class="w-full" :text="descript" :popper="{ placement: 'right' }">
                <UButton variant="outline" class="linkBtn transition-colors my-1 py-2 bg-phototaxisBlue-50 hover:bg-phototaxisBlue-100
                  text-phototaxisBlue-500 w-full rounded-lg">
                  <UBadge size="xs" :ui="{ rounded: 'rounded-full' }" :color="methodColor(method)">{{ method }}</UBadge>
                  <p class="text-center w-full">{{ name }}</p>
                </UButton>
              </UTooltip>
            </NuxtLink>
          </div>
        </div>
      </section>
      <section class="col-span-12 sm:col-span-9">
        <slot />
      </section>
    </div>
  </main>
</template>

<script setup>
const methodColor = (color)=>{
  if ( color === 'GET' ) {
    return 'green'
  } else if ( color === 'POST' ) {
    return 'blue'
  } else if ( color === 'PATCH' ) {
    return 'orange'
  } else if ( color === 'PUT' ) {
    return 'yellow'
  } else if ( color === 'DELETE' ) {
    return 'red'
  } else {
    return 'gray'
  }
}

const links = ref([
  {
    link: '/apiResult/retrieve-a-block',
    name: 'Retrieve a block',
    descript: '檢視單一區塊',
    method: 'GET'
  },
  {
    link: '/apiResult/retrieve-block-children',
    name: 'Retrieve block children',
    descript: '檢視區塊子項目',
    method: 'GET'
  },
  {
    link: '/apiResult/append-block-children',
    name: 'Append block children',
    descript: '追加子區塊',
    method: 'PATCH'
  },
  {
    link: '/apiResult/update-a-block',
    name: 'Update a block',
    descript: '更新一個區塊',
    method: 'PATCH'
  },
  {
    link: '/apiResult/delete-a-block',
    name: 'Delete a block',
    descript: '刪除一個區塊',
    method: 'DELETE'
  },
  {
    link: '/apiResult/create-a-page',
    name: 'Create a page',
    descript: '新增一個頁面',
    method: 'POST'
  },
  {
    link: '/apiResult/retrieve-a-page',
    name: 'Retrieve a page',
    descript: '檢視單一頁面',
    method: 'GET'
  },
  {
    link: '/apiResult/retrieve-a-page-property-item',
    name: 'Retrieve a page property item',
    descript: '檢視頁面屬性項',
    method: 'GET'
  },
  {
    link: '/apiResult/update-page-properties',
    name: 'Update page properties',
    descript: '更新頁面屬性',
    method: 'PATCH'
  },
  {
    link: '/apiResult/retrieve-a-database',
    name: 'Retrieve a database',
    descript: '檢視資料庫',
    method: 'GET'
  },
  {
    link: '/apiResult/create-a-database',
    name: 'Create a database',
    descript: '建立資料庫',
    method: 'POST'
  },
  {
    link: '/apiResult/query-a-database',
    name: 'Query a database',
    descript: '篩查資料庫',
    method: 'POST'
  },
  {
    link: '/apiResult/update-a-database',
    name: 'Update a database',
    descript: '篩查資料庫',
    method: 'PATCH'
  },
]);

</script>

<style scoped lang="scss">
.router-link-exact-active {
  .linkBtn {
    background-color: $phototaxisBlue-50;
    color: $phototaxisBlue-500;
  }
}
</style>