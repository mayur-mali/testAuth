<template>
  <div>
    <div class="bg-white box-border flex flex-col space-y-5 p-5">
      <nuxt-link
        to="/"
        class="hover:bg-gray-200 group py-2 px-5 rounded-full"
      >
        <FontAwesomeIcon
          icon="ticket-alt"
          class="text-xl mr-3 group-hover:text-purple-700 text-gray-500"
        /> <span class="group-hover:text-purple-700">{{ $t('sidebarmenu.openTicket') }}</span>
      </nuxt-link>
      <nuxt-link
        to="/"
        class="hover:bg-gray-200 group py-2 px-5 rounded-full"
      >
        <FontAwesomeIcon
          icon="layer-group"
          class="text-xl mr-3 group-hover:text-purple-700 text-gray-500"
        /> <span class="group-hover:text-purple-700"> {{ $t('sidebarmenu.allThreads') }}</span>
      </nuxt-link>
      <nuxt-link
        to="/"
        class="hover:bg-gray-200 group py-2 px-5 rounded-full"
      >
        <FontAwesomeIcon
          icon="star"
          class="text-xl mr-3 group-hover:text-purple-700 text-gray-500"
        /> <span class="group-hover:text-purple-700"> {{ $t ('sidebarmenu.popularThreads') }}</span>
      </nuxt-link>
      <nuxt-link
        to="/"
        class="hover:bg-gray-200 group py-2 px-5 rounded-full"
      >
        <FontAwesomeIcon
          icon="comment-slash"
          class="text-xl mr-3 group-hover:text-purple-700 text-gray-500"
        />  <span class="group-hover:text-purple-700">{{ $t('sidebarmenu.unansweredThreads') }}</span>
      </nuxt-link>
      <nuxt-link
        to="/"
        class="hover:bg-gray-200 group py-2 px-5 rounded-full"
      >
        <FontAwesomeIcon
          icon="times-circle"
          class="text-xl mr-3 group-hover:text-purple-700 text-gray-500"
        /> UnSolved
      </nuxt-link>
      <nuxt-link
        to="/"
        class="hover:bg-gray-200 group py-2 px-5 rounded-full"
      >
        <FontAwesomeIcon
          icon="times-circle"
          class="text-xl mr-3 group-hover:text-purple-700 text-gray-500"
        /> <span class="group-hover:text-purple-700">  {{ $t ('sidebarmenu.solved') }}</span>
      </nuxt-link>
      <nuxt-link
        to="/"
        class="hover:bg-gray-200 group py-2 px-5 rounded-full"
      >
        <FontAwesomeIcon
          icon="check-circle"
          class="text-xl mr-3 group-hover:text-purple-700 text-gray-500"
        /> <span class="group-hover:text-purple-700">  {{ $t ('sidebarmenu.myQuestion') }} </span>
      </nuxt-link>
      <nuxt-link
        to="/"
        class="hover:bg-gray-200 group py-2 px-5 rounded-full"
      >
        <FontAwesomeIcon
          icon="user"
          class="text-xl mr-3 group-hover:text-purple-700 text-gray-500"
        /> <span class="group-hover:text-purple-700">{{ $t ('sidebarmenu.leaderBoard') }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForumSidebar',
};
</script>
