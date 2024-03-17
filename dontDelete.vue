<template>
  <div
    class="extra-container"
    :class="{ 'is-visible': isExtraContainerVisible }"
  >
    <div class="flex flex-col justify-between">
      <div
        v-if="isExtraContainerVisible"
        class="flex flex-row items-center justify-between mb-12 -ml-5 -mr-5"
      >
        <div class="flex items-center">
          <button
            @click="increment"
            class="button_plus bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded-full"
          >
            <PlusIcon v-if="!cartStore.isUpdate" class="h-[2rem] w-[2rem]" />
            <UpdateIcon v-else class="h-[2rem] w-[2rem]" />
          </button>

          <h3 class="flex text-[#4A4949] font-medium text-3xl ml-2">
            ${{ totalItemPrice.toFixed(2) }}
          </h3>
        </div>

        <SizeSelector />
      </div>

      <SubcategoryBar
        v-if="
          currentCategory &&
          currentCategory.subCategories &&
          currentCategory.subCategories.length > 0
        "
      />
    </div>
  </div>
</template>
