<template>
  <b-container>
    <Chapters/>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Chapters from '@/components/Chapters.vue'; // @ is an alias to /src

@Component({
  components: {
    Chapters,
  },
})
export default class Home extends Vue {}
</script>
