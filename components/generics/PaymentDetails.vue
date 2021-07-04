<template>
  <section aria-labelledby="payment_details_heading">
    <form
      action="#"
      method="POST"
    >
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="bg-white py-6 px-4 sm:p-6">
          <div>
            <h2
              id="payment_details_heading"
              class="text-lg leading-6 font-medium text-gray-900"
            >
              Payment details
            </h2>
            <p class="mt-1 text-sm text-gray-500">
              Update your billing information. Please note that updating
              your location could affect your tax rates.
            </p>
          </div>

          <div class="mt-6 grid grid-cols-4 gap-6">
            <div class="col-span-4 sm:col-span-2">
              <label
                for="first_name"
                class="block text-sm font-medium text-gray-700"
              >First name</label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                autocomplete="cc-given-name"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>

            <div class="col-span-4 sm:col-span-2">
              <label
                for="last_name"
                class="block text-sm font-medium text-gray-700"
              >Last name</label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                autocomplete="cc-family-name"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>

            <div class="col-span-4 sm:col-span-2">
              <label
                for="email_address"
                class="block text-sm font-medium text-gray-700"
              >Email address</label>
              <input
                id="email_address"
                type="text"
                name="email_address"
                autocomplete="email"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>

            <div class="col-span-4 sm:col-span-1">
              <label
                for="expiration_date"
                class="block text-sm font-medium text-gray-700"
              >Expration date</label>
              <input
                id="expiration_date"
                type="text"
                name="expiration_date"
                autocomplete="cc-exp"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                placeholder="MM / YY"
              />
            </div>

            <div class="col-span-4 sm:col-span-1">
              <label
                for="security_code"
                class="flex items-center text-sm font-medium text-gray-700"
              >
                <span>Security code</span>
                <svg
                  class="ml-1 flex-shrink-0 h-5 w-5 text-gray-300"
                  x-description="Heroicon name: solid/question-mark-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </label>
              <input
                id="security_code"
                type="text"
                name="security_code"
                autocomplete="cc-csc"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>

            <div class="col-span-4 sm:col-span-2">
              <label
                for="country"
                class="block text-sm font-medium text-gray-700"
              >Country / Region</label>
              <select
                id="country"
                name="country"
                autocomplete="country"
                class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div class="col-span-4 sm:col-span-2">
              <label
                for="postal_code"
                class="block text-sm font-medium text-gray-700"
              >ZIP / Postal</label>
              <input
                id="postal_code"
                type="text"
                name="postal_code"
                autocomplete="postal-code"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            class="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Paymentdetails',

};
</script>
