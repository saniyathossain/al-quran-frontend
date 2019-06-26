<template>
  <b-container>
    <Chapter/>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChapterComponent from '@/components/Chapter.vue'; // @ is an alias to /src

@Component({
  components: {
    ChapterComponent,
  },
})
export default class Chapter extends Vue {}
</script>
