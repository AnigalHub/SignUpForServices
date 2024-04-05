<template>
    <div class="prices">
        <b-table-simple hover>
            <b-thead>
                <b-tr>
                    <b-th style="width: 20%">Дата</b-th>
                    <b-th>Время</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="(td, index) in data" :key="index">
                    <td>
                        {{ new Date(td.date).toLocaleDateString() }}
                        ({{ getWeekDay(new Date(td.date)) }})
                    </td>
                    <td>
                        <div v-for="(time, index) in td.times" :key="index" class="times">
                            {{ time.time }}
                        </div>
                    </td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</template>

<script>
  import { getWeekDay } from '../../../public/getWeekDay';

  export default {
    name: 'DateTime',
    props: {
      name: String,
      title: String,
      data: Array,
    },
    methods: {
      getWeekDay(date) {
        return getWeekDay(new Date(date));
      },
    },
  };
</script>

<style scoped></style>
