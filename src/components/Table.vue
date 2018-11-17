<template>
<div>
  <div ref="table" class="table tabulator tabulator-filtered"></div>
  <Popover />
</div>

</template>

<script>
import Tabulator from 'tabulator-tables'
import Popover from '@/components/Popover'

export default {
  components: {
    Popover
  },
  data() {
    return {
      tabulator: null,
      tableData: [{ 'connectionId': 1, 'dataConnectionName': 'ESQ_WPG_EDIT', 'type': 'MS SQL Server', 'description': 'Description Test edit from inside of connections page', 'numberOfDataSources': 1, 'numberOfEntities': 1 }, { 'connectionId': 2, 'dataConnectionName': 'ESQ VEGAS', 'type': 'MS SQL Server', 'description': 'edit from inside of connection page', 'numberOfDataSources': 0, 'numberOfEntities': 0 }],
      columns: [
        {
          title: 'Connection Name',
          field: 'dataConnectionName'
        },
        {
          title: 'Data Connection Type',
          field: 'type'
        },
        {
          title: 'Description',
          field: 'description'
        },
        {
          title: 'Number of Data Sources',
          field: 'numberOfDataSources'
        },
        {
          title: 'Number of Entity Types',
          field: 'numberOfEntities'
        },
        {
          title: '',
          cssClass: 'action-column',
          formatter: function(data) {
            const dataSourceId = data.getRow().getPosition()
            return `
            <button id="row-actions${dataSourceId}" class="btn btn-secondary-icon table-row-actions"><i class="far fa-ellipsis-v"></i></button>
            `
          },
          formatterParams: {

          }
        }
      ]
    }
  },
  watch: {
    // update table if data changes
    tableData: {
      handler(newData) {
        this.tabulator.replaceData(newData)
      }
    }
  },
  mounted() {
    console.log(this.$refs)
    // instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.$refs.table, {
      data: this.tableData, // link data to table
      columns: this.columns // define table columns
    })
    // $('#popover-content-row-actions0').removeClass('hide')
    // $('#popover-content-row-actions0').show()
  }
}
</script>

<style scoped>

</style>
