<template>
    <div class="entryes">
        <div v-for="(el, index) in filterArray" :key="index" class="entry">
            <a :href="outputOfInformation(el).href">
                <b>{{ outputOfInformation(el).label }}</b>
                <div class="pre">
                    {{ outputOfInformation(el).description }}
                </div>
            </a>
        </div>
    </div>
</template>

<script>
  import information from '../../../public/information.json';

  export default {
    name: 'Entry',
    props: {
      name: String,
      title: String,
      data: Object,
    },
    data() {
      return {
        information,
        array: ['entry', 'prices', 'works', 'reviews'],
      };
    },
    computed: {
      filterArray() {
        const filterArray = [];
        this.array.forEach((el) => {
          if (this.data[el]) {
            filterArray.push(el);
          }
        });
        return filterArray;
      },
    },
    methods: {
      outputOfInformation(params) {
        return this.information.entry.filter((inf) => inf.name === params)[0];
      },
    },
  };
</script>

<style scoped lang="scss"></style>
