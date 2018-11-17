export const state = {
  hidden: true,
  popoverReferenceId: '',
  popoverPopupId: ''
}

export const mutations = {
  POPOVER_HIDE: (state, hide) => {
    state.hidden = hide
  },
  POPOVER_SET_IDS: (state, data) => {
    state.popoverReferenceId = data.referenceId
    state.popoverPopupId = data.popupId
  }
}
