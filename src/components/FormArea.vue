<template>
    <div :class="[name === 'search' ? 'searchArea' : 'formArea']">
        <div v-if="name === 'registration'" class="grid-container">
            <div class="img">Загрузить изображение</div>
            <div class="recommendations">
                <h6>Рекомендации:</h6>
                <ul>
                    <li v-for="(value,index) in recommendations">{{value}}</li>
                </ul>
            </div>
        </div>
        <div>
            <div v-for="(value,index) in data">
                <div >
                    <label v-if="value.label" :for="value.label" :type="value.type"> {{value.label}}:</label>

                    <div class="input">
                        <div class="icon" v-if="name === 'search'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </div>
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

    </div>
</template>

<script>
  export default {
    name: 'FormArea',
    props:{
      name: String,
      data: Array,
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
    .icon{
        margin-top: .8%;
        border-bottom: 2px solid rgba(0, 0, 0, 0.25);
    }
    .input{
        display: flex;
    }
    label{
        margin-bottom: -0.05rem;
    }
    .searchArea{
        background: white;
        border-radius: 50px;
        padding: 2px 20px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        margin-bottom: 1.5rem;
    }
    .formArea{
        background: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        margin-bottom: 1.5rem;
    }
    .form-control{
        border-radius: 0;
        border-bottom: 2px solid rgba(0, 0, 0, 0.25) ;
        border-top: none;
        border-left:none;
        border-right: none;
        padding: 0.375rem 0.15rem;;
        margin-bottom: 1rem;
    }
    .recommendations,.img{
        background: #f5f5f5;
        padding: 5px;
        border: 0.25px solid rgba(0, 0, 0, 0.25);
    }
    .img{
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
