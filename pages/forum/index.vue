<template>
  <div>
    <div class="flex justify-between items-center mb-5 px-10">
      <AddQuestionModal />
      <BreadCrumb :navigationitems="navigationItems" />
    </div>
    <div class="grid gap-5 grid-cols-12">
      <ForumSidebar class="col-span-12 lg:col-span-4 xl:col-span-3" />
      <div class="col-span-12 mx-auto xl:col-span-7">
        <ThreadSmall />
        <ThreadSmall />
        <ThreadSmall />
        <ThreadSmall />
        <ThreadSmall />
      </div>
      <ThreadTranding class="col-span-12 xl:col-span-2" />
    </div>
  </div>
</template>

<script>
import ForumSidebar from '~/components/threads/ForumSidebar';
import ThreadSmall from '~/components/threads/ThreadSmall';
import ThreadTranding from '~/components/threads/ThreadTranding';
import AddQuestionModal from '~/components/threads/AddQuestionModal';
export default {
  layout: 'thread',
  components: {
    ForumSidebar,
    ThreadSmall,
    ThreadTranding,
    AddQuestionModal,
  },
  data () {
    return {
      navigationItems: [
        {
          name: 'Threads',
          href: '/threads',
        },
      ],

    };
  },
  // async created () {
  //   const res = await this.$axios.$get('api/me', {
  //     headers: {
  //       Authorization: 'Bearer ' + localStorage.getItem('access_token'),
  //     },
  //   });
  //   console.log(res.data.user.email);
  // },
};
</script>
