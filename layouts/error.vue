<template>
  <div>
    <NavigationBar />
    <div class="bg-gray-100 h-screen">
      <h1>
        {{ error.statusCode }}
      </h1>
      <h2 v-if="error.message">
        {{ error.message }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',

  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>
