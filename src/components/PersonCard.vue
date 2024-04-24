<template>
    <div>
        <div v-for="(value, index) in data" :key="index">
            <b-row
              :class="
              name === 'MyCards' || name === 'Entry' || name === 'DateTime'
                ? 'cardPerson'
                : 'personCard'
              "
            >
                <b-col cols="3">
                    <img :src="value.src" class="img_specialist" />
                </b-col>
                <b-col>
                    <b>{{ value.surname }} {{ value.name }} {{ value.patronymic }}</b>
                    <p>|
                        <span v-for="(category, index) in value.category" :key="index">
              {{ category }} |
            </span>
                    </p>
                    <p class="registTime">На сайте с {{ new Date(value.date).toLocaleDateString() }}</p>
                    <p>{{ value.address }}</p>
                </b-col>
                <b-col
                   v-if="name === 'SearchSpecialist' || name === 'MySpecialists'"
                   cols="3"
                >
                    <button-template class="buttonStyles" href="/client/Entry" text="Записаться"/>
                    <button-template class="buttonStyles" href="/client/Portfolio" text="Портфолио" />
                </b-col>
                <b-col v-if="name === 'WorksSpecialists'" cols="3">
                    <button-template class="buttonStyles" href="/client/Works" text="Все работы" />
                    <button-template class="buttonStyles" href="/client/MyWorks" text="Мои работы" />
                </b-col>
                <b-col v-if="name === 'MyEntries'" cols="3">
                    <p class="time">{{ value.time }}</p>
                    <p class="date">
                        {{ new Date(value.date).toLocaleDateString() }}
                        ({{ getWeekDay(new Date(value.date)) }})
                    </p>
                    <button-template
                       class="buttonStyles"
                       href="/client/DateTime"
                       text="Перенести запись"
                    />
                </b-col>
                <i v-if="name === 'SearchSpecialist' || name === 'MyEntries'" class="bi bi-heart"></i>
                <i v-if="name === 'MySpecialists' || name === 'MyCards' || name === 'WorksSpecialists'" class="bi bi-heart-fill"></i>
                <i v-if="name === 'Entry' || name === 'DateTime' || name === 'Prices' || name === 'Works' || name === 'MyWorks' || name === 'Portfolio'" class="bi bi-box-arrow-up-right"></i>
            </b-row>
            <div v-if="name === 'Entry'">
                <entry :data="value" />
            </div>
            <div v-if="name === 'DateTime' || name === 'Portfolio'">
                <h4 v-if="name === 'Portfolio'">Выбор даты и времени:</h4>
                <date-time :data="value.entry" />
            </div>
            <div v-if="name === 'Works' || name === 'MyWorks' || name === 'Portfolio'">
                <h4 v-if="name === 'Portfolio'">Портфолио работ:</h4>
                <h4 v-if="name === 'Works'">Все работы</h4>
                <h4 v-if="name === 'MyWorks'">Мои работы</h4>
                <works v-if="name === 'MyWorks'" :data="value.works" :id="id"/>
                <works v-else :data="value.works"/>
            </div>
            <div v-if="name === 'MyCards' || name === 'Portfolio' && value.loyalty.length">
                <h4 v-if="name === 'Portfolio'">Система скидок:</h4>
                <loyalty :data="value.loyalty" />
            </div>
            <div v-if="name === 'Prices' || name === 'Portfolio'">
                <h4 v-if="name === 'Portfolio'">Прайс:</h4>
                <prices :data="value.prices" />
            </div>
        </div>
    </div>
</template>

<script>
  import ButtonTemplate from '@/components/ButtonTemplate';
  import Loyalty from '@/components/Loyalty';
  import Entry from '@/pages/client/Entry';
  import Prices from '@/pages/client/Prices';
  import DateTime from '@/pages/client/DateTime';
  import { getWeekDay } from '../../public/getWeekDay';
  import Works from '@/pages/client/Works'

  export default {
    name: 'PersonCard',
    components: { Works, DateTime, Prices, Entry, Loyalty, ButtonTemplate },
    props: {
      name: String,
      data: Array,
      id: String
    },
    methods: {
      getWeekDay(date) {
        return getWeekDay(new Date(date));
      },
    },
  };
</script>

<style scoped></style>
