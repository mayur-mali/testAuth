<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
      <div class="relative h-16 flex justify-between">
        <Logo class="relative z-10 px-2 flex lg:px-0" />

        <Search class="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0" />

        <HamburgerMenu v-model="isHamburgerOpen" />

        <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <Dropdown
            :items="notifications"
            class="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            :sr-only="'View Notifications'"
          >
            <template #menu>
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </template>
          </Dropdown>

          <Dropdown
            :items="profileDropdownItems"
            :sr-only="'Open User Menu'"
          >
            <template #menu>
              <img
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                alt="user-profile"
              />
            </template>
          </Dropdown>
        </div>
      </div>
      <nav
        class="hidden lg:py-2 lg:flex lg:space-x-8"
        aria-label="Global"
      >
        <template v-for="(navigationItem, index) in navigationItems">
          <a
            :key="`menu-item-${index}-${navigationItem.name}`"
            :href="navigationItem.href"
            class="rounded-md py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
          >
            {{ navigationItem.name }}
          </a>
        </template>
      </nav>
    </div>

    <nav
      :class="{ block: !isHamburgerOpen, hidden: isHamburgerOpen }"
      class="lg:hidden"
      aria-label="Global"
    >
      <div class="pt-2 pb-3 px-2 space-y-1">
        <template v-for="(navigationItem, index) in navigationItems">
          <a
            :key="`navigation-menu-item-${index}-${navigationItem.name}`"
            :href="navigationItem.href"
            class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
          >
            {{ navigationItem.name }}
          </a>
        </template>
      </div>
      <div class="border-t border-gray-200 pt-4 pb-3">
        <div class="px-4 flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">
              Lisa Marie
            </div>
            <div class="text-sm font-medium text-gray-500">
              lisamarie@example.com
            </div>
          </div>
          <Dropdown
            :items="notifications"
            class="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            :sr-only="'View Notifications'"
          >
            <template #menu>
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </template>
          </Dropdown>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <template v-for="(item, index) in profileDropdownItems">
            <a
              :key="`profile-menu-item-${index}-${item.name}`"
              :href="item.href"
              class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            >
              {{ item.name }}
            </a>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavigationBar',

  data () {
    return {
      open: false,
      isHamburgerOpen: true,
      notifications: [
        {
          name: 'Notification One',
          href: '/goto-notification',
        },
      ],
      profileDropdownItems: [
        {
          name: 'Dashboard',
          href: '/dashboard',
        },
        {
          name: 'Sign Out',
          href: '/sign-out',
        },
      ],
      navigationItems: [
        {
          name: 'Dashboard',
          href: '/dashboard',
        },
        {
          name: 'Jobs',
          href: '/jobs',
        },
        {
          name: 'Forum',
          href: '/forum',
        },
      ],
    };
  },
};
</script>
