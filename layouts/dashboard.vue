<template>
  <div>
    <NavigationBar />

    <div class="bg-gray-100">
      <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <Sidebar />

          <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <Nuxt />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
