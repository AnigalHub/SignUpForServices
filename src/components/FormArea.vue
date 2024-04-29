<template>
    <div :class="[name === 'SearchSpecialist' ? 'searchArea' : 'formArea']">
        <div v-if="img"  class="grid-container">
            <div v-if="!dataBase" class="img">
                Загрузить изображение
            </div>
            <img v-if="dataBase" :src="dataBase[0].src" />
        </div>
        <div class="flexBlock">
            <div :class="[name === 'SearchSpecialist' || name === 'SettingsProfile' ? 'blockSearch' : name === 'SettingsInterface' ? 'blockTheme' : 'blockInput' ]">
                <div v-for="(value, index) in pushArray" :key="index">
                    <div :class="[name === 'SearchSpecialist' ? 'inputSearch' : 'input']">

                        <label v-if="value.label" :for="value.label" :type="value.type">
                            {{ value.label }}:
                        </label>
                        <div :class="[name === 'SearchSpecialist' ? 'inputSearch' : 'input']">
                            <div v-if="name === 'SearchSpecialist'" class="icon">
                                <i class="bi bi-search"></i>
                            </div>
                            <b-form-input
                                    :id="value.label"
                                    v-model="value.value"
                                    v-mask="value.mask"
                                    autocomplete="off"
                                    :placeholder="value.placeholder"
                                    :type="value.type"
                            >
                            </b-form-input>
                        </div>
                    </div>
                </div>
            </div>
            <i @click="showModal(pushArray)" v-if="name === 'SettingsProfile'" class="bi bi-pencil-square"></i>
        </div>
        <b-modal ref="my-modal" id="img" size="lg" centered>
            <div>
                <div v-if="img"  class="grid-container">
                    <div v-if="!dataBase" class="img">
                        Загрузить изображение
                    </div>
                    <img v-if="dataBase" :src="dataBase[0].src" />
                </div>
                <div class="flexBlock">
                    <div class="blockInput">
                        <div v-for="(value, index) in pushArray" :key="index">
                            <div class="input">
                                <label v-if="value.label" :for="value.label" :type="value.type">
                                    {{ value.label }}:
                                </label>

                                <div class="input">
                                    <div v-if="name === 'SearchSpecialist'" class="icon">
                                        {{name}}
                                        <i class="bi bi-search"></i>
                                    </div>
                                    <b-form-input
                                            :id="value.label"
                                            v-model="value.value"
                                            v-mask="value.mask"
                                            autocomplete="off"
                                            :placeholder="value.placeholder"
                                            :type="value.type"
                                    >
                                    </b-form-input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button-template class="buttonStyles" text="Сохранить"/>
                <button-template class="buttonCancelStyles" text="Отменить"/>
            </div>
        </b-modal>
    </div>
</template>

<script>
  import ButtonTemplate from '@/components/ButtonTemplate'
  export default {
    name: 'FormArea',
    components: { ButtonTemplate },
    props: {
      name: String,
      data: Array,
      dataBase: Array,
      model: String,
      img: Boolean
    },
    data() {
      return {
        array: [],
        modalShow: false,
        selectedLicense:{
          href:''
        },
      };
    },
    created () {
      console.log('this.data', { data: this.dataBase})
    },
    computed: {
      pushArray() {
        this.array = Object.assign([], this.data);

        if (this.dataBase) {
          this.array.forEach((el) => {
            this.dataBase.forEach((param) => {
              Object.keys(param).forEach((key) => {
                if (el.name === key) {
                  el.value = this.dataBase[0][key];
                }
              });
            });
          });
        } else {
          this.array.forEach((el) => {
            if(this.model){
              el.value = this.model
            }
            else{
              el.value = '';
            }
          });
        }
        return this.array;
      },
    },
    methods: {
      showModal(license) {
        this.selectedLicense = license;
        this.$refs['my-modal'].show()
      },
    }
  };
</script>

<style scoped>
    img {
        height: 230px;
        width: 185px;
    }
    .icon {
        margin-top: 1.25%;
        margin-right: 0.5%;
    }
    .icon i:before {
        font-size: 1rem;
    }
    label {
        margin-bottom: -0.05rem;
    }
    .searchArea {
        background: var(--backgroundDiv);
        border-radius: 50px;
        padding: 2px 20px;
        box-shadow: var(--shadow);
        margin-bottom: 1.5rem;
    }
    .formArea {
        background: var(--backgroundDiv);
        border-radius: var(--borderRadiusDiv);
        padding: 20px;
        box-shadow: var(--shadow);
        margin-bottom: 1.5rem;
    }
    .form-control {
        border-radius: 0;
        border-bottom: 1.5px solid rgba(0, 0, 0, 0.25);
        border-top: none;
        border-left: none;
        border-right: none;
        padding: 0.375rem 0.15rem;
        margin-bottom: 1rem;
        margin-left: -12px;
    }
    .recommendations,
    .img {
        background: #f5f5f5;
        padding: 5px;
        border: 0.25px solid rgba(0, 0, 0, 0.25);
    }
    .img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 230px;
        width: 185px;
    }
    .grid-container {
        float: left;
        text-align: center;
        margin-right: 3%;
    }
</style>
