<template>
    <div>
        <div v-if="name === 'desktop'" class="name">
            {{ informationClient[0].name }}
            {{ informationClient[0].surname.charAt(0) }}.
        </div>
        <b-nav-item
            v-for="(list, index) in data"
            :key="index"
            class="menu"
            :href="list.href"
        >
            <b-icon v-if="list.name === 'Выход'" icon="box-arrow-in-right"/>
            {{ list.name }}
        </b-nav-item>
    </div>
</template>

<script>
  import { searchClient } from '../../public/searchDatabase';
  import informationDatabase from '../../public/informationDatabase.json';

  export default {
    name: 'ClientCard',
    props: {
      data: Array,
      name:String,
    },
    computed: {
      informationClient() {
        return searchClient('22', informationDatabase.clients);
      },
    },
  };
</script>

<style scoped></style>
