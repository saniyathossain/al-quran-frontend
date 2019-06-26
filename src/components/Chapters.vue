<template>
  <b-list-group>
    <b-list-group-item v-for="(chapter, index) in chapters" :key="`${index}`" :to="{ name: 'chapter', params: { id: chapter.id }}" class="flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ chapter.chapter_number }}. {{ chapter.name_simple }}</h5>
        <small>{{ chapter.verses_count }}</small>
      </div>

      <p class="mb-1">
        {{ chapter.translated_name.name }}
      </p>

      <small>{{ chapter.name_arabic }}</small>
    </b-list-group-item>
  </b-list-group>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import axios from 'axios';

  @Component
  export default class ChaptersList extends Vue {
    @Prop() public msg!: string;

    public endpoint: string = 'http://127.0.0.1:7100/php/al_quran_api/public/api/v1/';
    public chapters: object = {};

    public async created() {
      this.chapters = await this.getChapters().then((response) => {
        return response.data.chapters;
      });
    }

    public async getChapters() {
      try {
        const response: any = axios.get(this.endpoint + 'chapters');
        return response;
      } catch (error) {
        // console.error(error);
      }
    }
  }
</script>
