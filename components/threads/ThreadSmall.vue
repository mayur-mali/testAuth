<template>
  <div>
    <div class="col-span-12 xl:col-span-9 lg:col-span-12 container mx-auto lg:mx-0">
      <div class="mb-10 p-8 md:px-12 grid lg:grid-cols-12 xl:grid-cols-12 gap-3 md:p-5 lg:p-10 xl:px-5 bg-gray-200 rounded-xl">
        <div class="col-span-1">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user1"
            class="h-12 w-12 rounded-full"
          />
        </div>
        <div class="flex flex-col md:col-span-11 lg:col-span-11 xl:col-span-9 space-y-2">
          <h1 class="text-lg md:text-xl lg:text-2xl">
            <nuxt-link
              to="/threads/reply"
              class="hover:underline text-gray-900"
            >
              How can you create Two-Way Bindings in Vue.js
            </nuxt-link>
          </h1>
          <h5 class="text-sm text-gray-800">
            BY : John Smith
            <span>4 days</span>
          </h5>
          <h2 class="text-base text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At in deserunt voluptatum rerum aliquid perspiciatis magnam quaerat iste adipisci possimus!
          </h2>
        </div>
        <div class="col-span-2 xl:col-span-2 flex flex-col lg:justify-center lg:items-center">
          <h2 class="text-4xl text-blue-900">
            15
          </h2>
          <span class="text-xs text-red-400"> Replies</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      like: 10,
      views: 15,
      reply: 24,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

h1,
h5,
span,
h2
{
    font-family: 'RocknRoll One', sans-serif;
}
</style>
