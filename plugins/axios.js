const HTTP_UNPROCESSABLE_ENTITY = 422;

export default function ({ $axios, store }) {
  $axios.onError((error) => {
    if (error.response && error.response.status === HTTP_UNPROCESSABLE_ENTITY) {
      store.dispatch('validation/setErrors', error.response.data.errors);
    }

    return Promise.reject(error);
  });

  $axios.onRequest(() => {
    store.dispatch('validation/clearErrors');
  });
}
