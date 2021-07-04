export const state = () => ({
  errors: {},
});

export const actions = {
  /**
   * Set validation errors.
   *
   * @param commit
   * @param errors
   */
  setErrors ({ commit }, errors) {
    commit('setValidationErrors', errors);
  },

  /**
   * Clear validation errors.
   *
   * @param commit
   */
  clearErrors ({ commit }) {
    commit('setValidationErrors', {});
  },
};

export const mutations = {
  /**
   * Set validation errors.
   *
   * @param state
   * @param errors
   */
  setValidationErrors (state, errors) {
    state.errors = errors;
  },
};

export const getters = {
  errors: state => state.errors,
};
