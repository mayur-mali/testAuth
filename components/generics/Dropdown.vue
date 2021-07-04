<template>
  <div class="flex-shrink-0 relative ml-4">
    <button
      v-click-outside="() => open = false"
      class="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
      :aria-expanded="open.toString()"
      @click="open = !open"
    >
      <span class="sr-only">{{ srOnly }}</span>
      <slot name="menu"></slot>
    </button>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="open"
        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <template v-for="(item, index) in items">
          <a
            :key="`menu-item-${index}-${item.name}`"
            :href="item.href"
            class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            {{ item.name }}
          </a>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',

  props: {
    items: {
      type: Array,
      default: () => [],
      validator: (items) => {
        let isValid = true;
        for (let i = 0; i < items.length; i++) {
          if (!('name' in items[i]) || !('href' in items[i])) {
            isValid = false;
            break;
          }
        }
        return isValid;
      },
    },
    srOnly: {
      type: String,
      default: '',
    },
  },

  data () {
    return {
      open: false,
    };
  },
};
</script>
