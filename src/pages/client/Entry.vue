<template>
    <div class="entryes">
        <div v-for="(el, index) in array" :key="index">
            <div v-if="data[el]" class="entry">
                <a :href="outputOfInformation(el).href">
                    <b>{{ outputOfInformation(el).label }}</b>
                    <div class="pre">
                        {{ outputOfInformation(el).description }}
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
  import information from '../../../public/information.json';

  export default {
    name: 'Entry',
    props: {
      name: String,
      title: String,
      data: Object,
    },
    data() {
      return {
        information,
        array: ['entry', 'prices', 'works', 'reviews'],
      };
    },
    methods: {
      outputOfInformation(params) {
        return this.information.entry.filter((inf) => inf.name === params)[0];
      },
    },
  };
</script>

<style scoped lang="scss">
    .entryes {
        margin-right: -50px;
        margin-left: -18px;
        a {
            color: var(--colorText);
            &:hover {
                text-decoration: none;
            }
        }
    }
    .pre {
        margin-top: 2%;
        white-space: pre-line;
    }
    .entry {
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
