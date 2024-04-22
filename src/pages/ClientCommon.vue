<template>
    <div>
        <h3>{{ title }}</h3>
        <form-area
           v-if="name === 'SearchSpecialist'"
           :name="name"
           :data="information.search"
           :model="searchName"
        />
        <person-card :name="name" :data="dataToShow" :id="id"/>
        <div class="buttons">
            <button-template class="buttonBackStyles" text="Назад" />
        </div>
    </div>
</template>

<script>
  import FormArea from '@/components/FormArea';
  import ButtonTemplate from '@/components/ButtonTemplate';
  import information from '../../public/information.json';
  import PersonCard from '@/components/PersonCard';

  export default {
    name: 'ClientCommon',
    components: { PersonCard, FormArea, ButtonTemplate },
    props: {
      name: String,
    },
    data() {
      return {
        information,
      };
    },
    computed: {
      searchName(){
        return this.currentClass?.search ?? ''
      },
      id(){
        return this.currentClass?.id ?? ''
      },
      currentClass() {
        return this.$store.state[this.name];
      },
      title() {
        return this.currentClass?.title ?? '';
      },
      dataToShow() {
        return this.$store.state[this.name].items;
      },
    },
    watch: {
      async name(newClass) {
        await this.getData(newClass);
      },
    },
    async created() {
      await this.getData(this.name);
    },
    methods: {
      async getData(newClass) {
        await this.$store.dispatch(`${newClass}/getData`);
      },
    },
  };
</script>

<style scoped></style>
