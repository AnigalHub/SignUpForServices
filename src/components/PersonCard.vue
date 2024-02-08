<template>
    <div class="personCard">
        <b-row v-for="(value,index) in data">
            <b-col cols="2">
                <img src="./../../public/img.jpg" class="img_specialist">
            </b-col>
            <b-col>
                <b>{{value.surname}} {{value.name}} {{value.patronymic}}</b>
                <p>{{value.category}}</p>
                <p>На сайте с {{value.date}}</p>
                <p>{{value.address}}</p>
            </b-col>
            <b-col cols="3">
                <Button :styles="styles.button_styles" href="" text="Записаться"/>
                <Button :styles="styles.button_styles" href="" text="Портфолио"/>
            </b-col>
            <b-col cols="1">
                <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: 35px;" width="25"  fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  import styles from '../../public/styles.json'
  import Button from '@/components/Button'

  export default {
    name: 'PersonCard',
    components: { Button },
    props:{
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
    .personCard{
        background: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        margin-bottom: 1.5rem;
    }
</style>
