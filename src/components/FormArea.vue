<template>
    <div class="formArea ">
        <div v-if="loginUp.find((obj) => obj.label === 'Имя')" class="grid-container">
            <div class="img">Загрузить изображение</div>
            <div class="recommendations">
                <h6>Рекомендации:</h6>
                <ul>
                    <li v-for="(value,index) in recommendations">{{value}}</li>
                </ul>
            </div>
        </div>
        <div class="grid-container">
            <div v-for="(value,index) in loginUp">
                <div class="input">
                    <label :for="value.label" :type="value.type"> {{value.label}}:</label>
                    <b-form-input autocomplete="off"
                                  :placeholder="value.placeholder"
                                  :id="value.label"
                                  :type="value.type"
                                  v-mask="value.mask"
                    >
                    </b-form-input>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'FormArea',
    props:{
      loginUp: Array,
    },
    data(){
      return{
        recommendations:[
          'На фото изображены вы;',
          'Размер фото не меньше 100х200 пикселей;',
          'Лицо видно полностью.'
        ]
      }
    },
  }
</script>

<style scoped>
    .formArea{
        background: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        margin-bottom: 1.5rem;
    }
    .form-control{
        border-bottom: 2px solid rgba(0, 0, 0, 0.25) ;
        border-top: none;
        border-left:none;
        border-right: none;
    }
    .recommendations,.img{
        background: #f5f5f5;
        padding: 5px;
        border: 0.25px solid rgba(0, 0, 0, 0.25);
    }
    .img{
        display: flex;
        font-weight: bold;
        justify-content: center;
        align-items: center;
    }

</style>
