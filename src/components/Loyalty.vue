<template>
    <div class="loyalty">
        <div >
            <b-row v-for="(value) in data" class="discount">
                <b-col v-for="(number) in maxNumberServices" >
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
    .discount{
        margin-bottom: 8px;
    }
    .size_discount{
        font-size: 1.6rem;
        margin-top: -5px;
        margin-bottom: 0;
    }
    .loyalty{
        background: white;
        border-radius: 10px;
        padding: 20px;
        width: calc(36px + 100%);
        margin-left: -18px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        margin-bottom: 1.5rem;
    }
</style>
