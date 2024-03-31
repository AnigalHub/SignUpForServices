<template>
    <div>
        <h3>{{title}}</h3>
        <FormArea v-if="name === 'SearchSpecialist'" :name="name" :data="information.search"/>
        <PersonCard :name="name" :data="dataToShow"/>
        <div class="buttons">
            <Button class="buttonBackStyles" text="Назад"/>
        </div>
    </div>
</template>

<script>
  import FormArea from '@/components/FormArea'
  import Button from '@/components/Button'
  import information from '../../../public/information.json'
  import PersonCard from '@/components/PersonCard'

  export default {
    components: { PersonCard, FormArea, Button },
    props: {
      name: String
    },
    name: 'Common',
    data(){
      return{
        information: information,
      }
    },
    computed:{
        currentClass(){
            return this.$store.state[this.name]
        },
        title(){
          return this.currentClass?.title ?? ""
        },
        dataToShow(){
          return this.$store.state[this.name].items;
        }
    },
    methods:{
      async getData(newClass){
        await this.$store.dispatch(`${newClass}/getData`)
      }
    },
    watch:{
      async name(newClass){
        await this.getData(newClass);
      }
    },
    async created () {
      await this.getData(this.name);
    }
  }
</script>

<style scoped>

</style>
