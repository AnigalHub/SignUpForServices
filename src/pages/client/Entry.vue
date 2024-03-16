<template>
    <div class="entryes">
        <div v-if="data.entry" class="entry">
            <b>{{outputOfInformation('entry').label}}</b>
            <div class="pre">
                {{outputOfInformation('entry').description}}
            </div>
        </div>
        <div v-if="data.prices" class="entry">
            <b>{{outputOfInformation('prices').label}}</b>
            <div class="pre">
                {{outputOfInformation('prices').description}}
            </div>
        </div>
        <div v-if="data.works" class="entry">
            <b>{{outputOfInformation('works').label}}</b>
            <div class="pre">
                {{outputOfInformation('works').description}}
            </div>
        </div>
        <div v-if="data.reviews" class="entry">
            <b>{{outputOfInformation('reviews').label}}</b>
            <div class="pre">
                {{outputOfInformation('reviews').description}}
            </div>
        </div>
    </div>
</template>

<script>
  import information from '../../../public/information.json'

  export default {
    name: 'Entry',
    props:{
      name: String,
      title: String,
      data: Object
    },
    data() {
      return {
        information: information,
      }
    },
    created () {
     // this.outputOfInformation();
    },
    methods:{
      outputOfInformation(params) {
        //let params = "entry";
        console.log('---', this.information.entry.filter((inf) => inf.name === params)[0].description)
        return this.information.entry.filter((inf) => inf.name === params)[0];
      }
    }
  }
</script>

<style scoped>
    .entryes{
        margin-right: -50px;
        margin-left: -18px;
    }
    .pre {
        margin-top: 2%;
        white-space: pre-line;
    }
    .entry{
        background: var(--backgroundDiv);
        border-radius: var(--borderRadiusDiv);
        padding: 20px;
        width: 48%;
        margin-right: 1%;
        float: left;
        box-shadow: var(--shadow);
        margin-bottom: 1.5rem;
    }
</style>
