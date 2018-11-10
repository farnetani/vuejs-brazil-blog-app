<template>
  <Page class="ListIndex">
    <ActionBar title="Vue.js Brasil Blog"/>
    <StackLayout>
      <ListView for="item in items">
        <v-template>
          <PostItem :item="item"/>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import axios from 'axios'
import { xmlParser } from '../utils/helpers'
import PostItem from './PostItem'

export default {
  name: 'Home',
  data: () => ({
    items: []
  }),
  components: { PostItem },
  created () {
    axios.get('https://vuejs-brasil.com.br/feed.xml')
      .then(response => xmlParser(response.data))
      .then(items => this.items = items)
      .catch(error => {
        console.log('Error on fetch feed', error)
      })
  }
}
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
</style>
