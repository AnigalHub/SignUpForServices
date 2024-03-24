<template>
    <div class="prices">
        <b-table-simple hover >
            <b-thead>
                <b-tr>
                    <b-th style="width: 20%">Дата</b-th>
                    <b-th>Время</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="td in data">
                    <td>
                        {{td.date}}
                    </td>
                    <td >
                        <div v-for="time in td.times" style="
                            width: 100px;
                            background: #F3F3F4;
                            padding: 5px;
                            border-radius: 15px;
                            float: left;
                            margin-right: 10px;
                            text-align: center;
                            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);

">
                    {{time.time}}</div>
                    </td>
                </b-tr>
            </b-tbody>


        </b-table-simple>
    </div>
</template>

<script>
  export default {
    name: 'DateTime',
    props:{
      name: String,
      title: String,
      data: Object
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
