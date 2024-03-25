<template>
    <div>
        <div v-for="(value,index) in data">
            <b-row :class="name === 'MyCards' ||  name === 'Entry' || name === 'DateTime' ? 'cardPerson' : 'personCard'">
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
                    <Button class="buttonStyles" href="Entry" text="Записаться"/>
                    <Button class="buttonStyles" href="" text="Портфолио"/>
                </b-col>
                <b-col v-if="name === 'WorksSpecialists'"  cols="3">
                    <Button class="buttonStyles" href="" text="Все работы"/>
                    <Button class="buttonStyles" href="" text="Мои работы"/>
                </b-col>
                <b-col v-if="name === 'MyEntries'" cols="3">
                    <p class="time">{{value.time}}</p>
                    <p class="date">
                        {{new Date(value.date).toLocaleDateString()}}
                        ({{getWeekDay(new Date(value.date))}})
                    </p>
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
            <div v-if="name === 'Entry'">
                <Entry :data="value"/>
            </div>
            <div v-if="name === 'Prices'">
                <Prices :data="value.prices"/>
            </div>
            <div v-if="name === 'DateTime'">
                <DateTime :data="value.entry"/>
            </div>
        </div>
    </div>
</template>

<script>
  import Button from '@/components/Button'
  import Loyalty from '@/components/Loyalty'
  import Entry from '@/pages/client/Entry'
  import Prices from '@/pages/client/Prices'
  import DateTime from '@/pages/client/DateTime'
  import { getWeekDay } from "../../public/getWeekDay";

  export default {
    name: 'PersonCard',
    components: { DateTime, Prices, Entry, Loyalty, Button },
    props:{
      name: String,
      data: Array,
    },
    methods:{
      getWeekDay(date){
        return getWeekDay(new Date(date))
      }
    }
  }
</script>

<style scoped>

</style>
