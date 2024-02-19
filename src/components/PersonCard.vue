<template>
    <div>
        <div v-for="(value,index) in data">
            <b-row :class="name === 'myCards' ? 'cardPerson' : 'personCard'">
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
                <b-col v-if="name === 'searchSpecialist' || name === 'mySpecialists'"  cols="3">
                    <Button :styles="styles.button_styles" href="" text="Записаться"/>
                    <Button :styles="styles.button_styles" href="" text="Портфолио"/>
                </b-col>
                <b-col v-if="name === 'myEntries'" cols="3">
                    <p class="time">{{value.time}}</p>
                    <p class="date">{{value.date}}</p>
                    <Button :styles="styles.button_styles" href="" text="Перенести запись"/>
                </b-col>
                <b-col cols="1">
                    <i v-if="name === 'searchSpecialist' || name === 'myEntries'" class="bi bi-heart"></i>
                    <i v-if="name === 'mySpecialists' || name === 'myCards'" class="bi bi-heart-fill"></i>
                </b-col>
            </b-row>
            <div v-if="name === 'myCards' && value.loyalty.length">
                <Loyalty :data="value.loyalty"/>
            </div>
        </div>
    </div>

</template>

<script>
  import styles from '../../public/styles.json'
  import Button from '@/components/Button'
  import Loyalty from '@/components/Loyalty'

  export default {
    name: 'PersonCard',
    components: { Loyalty, Button },
    props:{
      name: String,
      data: Array,
    },
    data(){
      return{
        styles: styles,
      }
    }
  }
</script>

<style scoped>
.img_specialist{
    border-radius: 50%;
    width: 140px;
    height: 140px;
}
.date,.time{
    text-align: center;
}
.time{
    font-size: 2.2rem;
    margin-bottom: 0;
}
    .personCard{
        background: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        margin-bottom: 1.5rem;
    }
    .cardPerson{
        background: rgba(255, 255, 255, 0.38);
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
        margin-bottom: 1.5rem;
    }
</style>
