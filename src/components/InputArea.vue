<template>
    <div class="inputArea grid-container">
        <div v-for="(value,index) in loginUp">
            <div class="input">
                <label :for="value.label"> {{value.label}}:</label>
                {{value.mask}}
                <b-form-input autocomplete="off"
                              :placeholder="value.placeholder"
                              :id="value.label"
                              :type="value.type"
                              v-mask="value.mask">
                </b-form-input>
            </div>
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
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        margin-bottom: 1.5rem;
    }
    .form-control{
        border-bottom: 2px solid rgba(0, 0, 0, 0.25) !important;
        border-top: none;
        border-left:none;
        border-right: none;
    }
</style>
