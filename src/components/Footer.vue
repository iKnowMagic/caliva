<template>
  <div class="app-footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-24">
          <div class="footer-content">
            Data Builder | <span class="versioninfo nowrap" v-b-modal.infoModal>Version Info <i class="far fa-info-circle"></i></span>
          </div>
        </div>
      </div>
    </div>

    <Modal id="infoModal" title="Data Builder Version Info">
      <table class="table">
        <tbody>
          <tr>
            <td><b>Licensed to</b></td>
            <td>ESQ Internal</td>
          </tr>
          <tr class="bghighlight">
            <td><b>License Expiration</b></td>
            <td>Thursday, July 31, 2018</td>
          </tr>
          <tr>
            <td><b>Server Version</b></td>
            <td>3.5.0 R1564 2017-10-17T21:53:22</td>
          </tr>
          <tr>
            <td><b>Database Version</b></td>
            <td>3.5</td>
          </tr>
          <tr>
            <td><b>Webserver</b></td>
            <td>Microsoft-IIS/8.5</td>
          </tr>
          <tr>
            <td><b>Operating System</b></td>
            <td>Microsoft Windows NT 6.3.9600.0</td>
          </tr>
          <tr>
            <td><b>App -?</b></td>
            <td>2017-10-17T21:53:40</td>
          </tr>
        </tbody>
      </table>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
export default {
  components: { Modal }
}
</script>

<style scoped>
</style>
