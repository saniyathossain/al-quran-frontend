<template>
  <div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import axios from 'axios';

  @Component
  export default class Chapter extends Vue {
    @Prop() public msg!: string;

    public endpoint: string = 'http://127.0.0.1:7100/php/al_quran_api/public/api/v1/';
    public chapter: object = {};

    public async created() {
      this.chapter = await this.getChapter().then((response) => {
        return response.data.chapters;
      });
      // console.table(this.chapter);
    }

    public async getChapter() {
      try {
        const response: any = axios.get(this.endpoint + 'chapters/' + this.$route.params.id);
        return response;
      } catch (error) {
        // console.error(error);
      }
    }
  }
</script>
