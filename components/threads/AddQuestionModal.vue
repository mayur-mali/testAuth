<template>
  <div class="ml-5 mb-5 xl:ml-0 xl:mb-0">
    <button
      class="bg-indigo-700 text-white active:bg-indigo-500 font-bold uppercase text-sm xl:px-10 xl:py-3 xl:w-64 xl:h-auto w-16 h-16 flex justify-center items-center fixed bottom-0 right-0 mr-5 mb-20 xl:mr-0 xl:mb-0 lg:mr-32 xl:sticky rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      @click="toggleModal()"
    >
      <span class="hidden xl:block"> {{ $t ('addQuestionModal.modalName') }}</span>
      <FontAwesomeIcon
        icon="plus"
        class="xl:hidden block"
      />
    </button>
    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-end flex"
    >
      <div class="relative w-auto mx-auto max-w-3xl">
        <div class="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div class="overflow-hidden px-2 md:px-8">
            <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 class="text-xl font-semibold w-full">
                <input
                  v-model="data.title"
                  type="text"
                  :placeholder="$t('addQuestionModal.placeholder.inputTitle')"
                  class="outline-none w-full"
                />
              </h3>
              <button
                class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                @click="toggleModal()"
              >
                <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  <FontAwesomeIcon icon="times" />
                </span>
              </button>
            </div>

            <div class="relative p-6 flex-auto">
              <textarea
                v-model="data.question"
                rows="7"
                class="outline-none"
                :placeholder="$t('addQuestionModal.placeholder.textArea')"
              ></textarea>
            </div>

            <div class="flex items-center justify-end p-1 md:p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                class="text-gray-700 bg-gray-400 rounded-full font-bold uppercase mr-5 px-8 py-3 text-sm hover:text-blue-600 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ease-linear transition-all duration-150"
                type="button"
                @click="toggleModal()"
              >
                {{ $t ('addQuestionModal.modalButton.close') }}
              </button>
              <button
                class="text-white bg-indigo-500 hover:bg-indigo-700 rounded-full font-bold uppercase px-8 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="$nuxt.$emit('post-query')"
              >
                {{ $t ('addQuestionModal.modalButton.post') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showModal"
      class="opacity-25 fixed inset-0 z-40 bg-black"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'AddQuestionModal',
  props: {
    data: {
      type: Object,
      default: () => { return {}; },
    },
  },

  data () {
    return {
      showModal: false,
    };
  },

  methods: {
    toggleModal () {
      this.showModal = !this.showModal;
    },
  },
};
</script>
