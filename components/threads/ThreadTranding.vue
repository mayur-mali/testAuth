<template>
  <div class="bg-purple-200 p-5 rounded-lg">
    <h2 class="text-base text-black font-bold mb-5">
      🔥 {{ $t ('trandingThreads.trandingTitle') }}
    </h2>
    <div class="flex flex-col space-y-5">
      <nuxt-link
        to="#"
        class="hover:underline text-black"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, exercitationem.
      </nuxt-link>
      <nuxt-link
        to="#"
        class="hover:underline text-black"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
      </nuxt-link>
      <nuxt-link
        to="#"
        class="hover:underline text-black"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </nuxt-link>
      <nuxt-link
        to="#"
        class="hover:underline text-black"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.exercitationem.
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreadTranding',
};

</script>
