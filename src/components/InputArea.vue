<template>
    <div class="inputArea">
        <div v-for="(value,index) in loginUp">
            <b-form-group :label="value.label" :label-for="index" label-cols-sm="1">
                <b-form-input :id="index"></b-form-input>
            </b-form-group>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'InputArea',
    props:{
      loginUp: Array,
    },
  }
</script>

<style scoped>
    .inputArea{
        background: white;
    }
    .form-control {
        border: white;
    }
</style>
