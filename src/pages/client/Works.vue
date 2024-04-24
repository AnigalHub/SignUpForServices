<template>
    <div class="works">
        <div v-for="(el, index) in filterData" :key="index">
            <div>
                <img :src="el.src">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Works',
    props: {
      data: Array,
      id: String
    },
    computed: {
      filterData() {
          return this.id ? this.data.filter((el) => el.id_client === this.id) : this.data;
      }
    }
  }
</script>

<style scoped></style>
