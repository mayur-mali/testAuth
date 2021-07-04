<template>
  <NuxtLink to="/">
    <div class="flex-shrink-0 flex items-center">
      <img
        class="block h-8 w-auto mr-2"
        src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg"
        alt="Workflow"
      />
      {{ $t('app.name') }}
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'Logo',
};
</script>
