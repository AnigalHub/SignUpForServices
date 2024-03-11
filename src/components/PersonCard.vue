<template>
    <div>
        <div v-for="(value,index) in data">
            <b-row :class="name === 'MyCards' ? 'cardPerson' : 'personCard'">
                <b-col cols="2">
                    <img :src="value.src" class="img_specialist">
                </b-col>
                <b-col>
                    <b>{{value.surname}} {{value.name}} {{value.patronymic}}</b>
                    <p>
                        | <span v-for="(category,index) in value.category"> {{category}} | </span>
                    </p>
                    <p>На сайте с {{value.date}}</p>
                    <p>{{value.address}}</p>
                </b-col>
                <b-col v-if="name === 'SearchSpecialist' || name === 'MySpecialists'"  cols="3">
                    <Button class="buttonStyles" href="" text="Записаться"/>
                    <Button class="buttonStyles" href="" text="Портфолио"/>
                </b-col>
                <b-col v-if="name === 'WorksSpecialists'"  cols="3">
                    <Button class="buttonStyles" href="" text="Все работы"/>
                    <Button class="buttonStyles" href="" text="Мои работы"/>
                </b-col>
                <b-col v-if="name === 'MyEntries'" cols="3">
                    <p class="time">{{value.time}}</p>
                    <p class="date">{{value.date}}</p>
                    <Button class="buttonStyles" href="" text="Перенести запись"/>
                </b-col>
                <b-col cols="1">
                    <i v-if="name === 'SearchSpecialist' || name === 'MyEntries'" class="bi bi-heart"></i>
                    <i v-if="name === 'MySpecialists' || name === 'MyCards' || name === 'WorksSpecialists'" class="bi bi-heart-fill"></i>
                </b-col>
            </b-row>
            <div v-if="name === 'MyCards' && value.loyalty.length">
                <Loyalty :data="value.loyalty"/>
            </div>
        </div>
    </div>
</template>

<script>
  import Button from '@/components/Button'
  import Loyalty from '@/components/Loyalty'

  export default {
    name: 'PersonCard',
    components: { Loyalty, Button },
    props:{
      name: String,
      data: Array,
    },
  }
</script>

<style scoped>

</style>
