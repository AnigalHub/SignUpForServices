<template>
    <div class="loyalty">
        <div>
            <b-row v-for="(value, index) in data" :key="index" class="discount">
                <b-col v-for="(number, index) in maxNumberServices" :key="index">
                    <i v-for="(current_number) in value.number_services" v-if="current_number===number" class="bi bi-star" ></i>
                </b-col>
                <b-col class="size_discount">
                    {{value.discount}}
                </b-col>
            </b-row>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'Loyalty',
    props:{
      name: String,
      data: Array,
    },
    computed:{
      maxNumberServices(){
        return this.data.reduce((acc, curr) => acc.number_services > curr.number_services ? acc : curr).number_services
      }
    },
    created () {
      console.log('data', this.data)
    }
  }
</script>

<style scoped>

</style>
