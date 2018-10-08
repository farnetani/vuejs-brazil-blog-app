<template>
  <StackLayout>
    <Label
      class="LabelSpacing title"
      width="100%"
      textWrap="true">
      <Span
        :style="{
          color: '#666'
        }"
        :text="item.title[0]"
        fontStyle="bold" />
    </Label>

    <Label
      class="LabelSpacing date"
      width="100%"
      textWrap="true">
      <Span
        :style="{
          color: '#999'
        }"
        :text="formatDate(item.pubDate[0])"
        fontStyle="italic" />
    </Label>
  </StackLayout>
</template>

<script>
import { format } from 'date-fns'
export default {
  name: 'PostItem',
  props: ['item'],
  methods: {
    formatDate (date) {
      return format(date, 'DD/MM/YYYY')
    }
  }
}
</script>

<style scoped>
.LabelSpacing {
  margin-top: 10px;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
}
.title {
  font-size: 20px;
  font-weight: 700;
}
.date {
  padding-top: 0px;
  padding-bottom: 20px;
}
</style>
