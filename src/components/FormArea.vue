<template>
    <div :class="[name === 'SearchSpecialist' ? 'searchArea' : 'formArea']">
        <div v-if=" name === 'Registration' || name === 'SettingsProfile'" class="grid-container">
            <div v-if="!dataBase || !dataBase.src" class="img">Загрузить изображение</div>
            <img v-if="dataBase && dataBase.src" :src="dataBase.src">
        </div>
        <div  :style="layoutStyles" style="display: grid">
            <div v-for="(value,index) in pushArray">
                <div style="margin: 0 10px">
                    <label v-if="value.label" :for="value.label" :type="value.type"> {{value.label}}:</label>
                    <div class="input">
                        <div class="icon" v-if="name === 'SearchSpecialist'">
                            <i class="bi bi-search"></i>
                        </div>
                        <b-form-input autocomplete="off"
                                      :placeholder="value.placeholder"
                                      :id="value.label"
                                      :type="value.type"
                                      v-mask="value.mask"
                                      v-model="value.value"
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
      dataBase: Object,
      layoutStyles: {
        type: Object,
        default: () => ({}),
      },
    },
    data(){
      return{
        array:[],
      }
    },
    computed:{
        pushArray(){
          this.array = Object.assign([], this.data);

          if(this.dataBase){
            this.array.forEach((el) =>{
              for (let key in this.dataBase) {
                if(el.name === key){
                  el.value = this.dataBase[key]
                }
              }
            })
          }
          else{
            this.array.forEach((el) =>{
                  el.value = ''
            })
          }
          return this.array
        }
    }
  }
</script>

<style scoped>
    img{
        height: 230px;
        width: 185px;
    }
    .icon{
        margin-top: 1.25%;
        margin-right: .5%;
    }
    .icon i:before {
        font-size: 1rem;
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
        border-bottom: 1.5px solid rgba(0, 0, 0, 0.25) ;
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
        height: 230px;
        width: 185px;
    }
    .grid-container{
        float: left;
        text-align: center;
        margin-right: 3%;
    }

</style>
