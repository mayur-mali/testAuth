<template>
  <div class="relative z-10 flex items-center lg:hidden">
    <button
      class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
      @click.prevent="changed"
    >
      <span class="sr-only">Open menu</span>
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="open ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      open: true,
    };
  },

  methods: {
    changed () {
      this.open = !this.open;
      this.$emit('input', this.open);
    },
  },
};
</script>
