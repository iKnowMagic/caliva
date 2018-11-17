<template>
<div>
    <div class="popover table-popover animated fastest fadeIn" :class="{hide: isHidden}" :id="popupId">
    <div class="popover-body">
      <button type="button" class="dropdown-item">Edit</button>
      <button type="button" class="dropdown-item">Delete</button>
    </div>
  </div>
  <div id="popover-reference"></div>
</div>

</template>

<script>
import Popper from 'popper.js'
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState('popover', {
      isHidden: state => state.hidden,
      popupId: state => state.popoverPopupId,
      referenceId: state => state.popoverReferenceId
    })
  },
  methods: {
    ...mapMutations('popover', {
      hidePopover: 'POPOVER_HIDE',
      assignPopover: 'POPOVER_SET_IDS'
    })
  },
  mounted() {
    this.assignPopover({ referenceId: 'popover-trigger', popupId: 'popover-default' })
    this.hidePopover(false)
    const popper = new Popper(
      document.getElementById(this.popupId),
      document.getElementById(this.referenceId),
      {
        placement: 'top',
        modifiers: {
          enabled: true,
          offset: 10
        }
      }
    )
  }
}
</script>

<style scoped>

</style>
