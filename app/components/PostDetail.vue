<template>
  <Page>
    <ActionBar title="Detail"/>
    <StackLayout>
      <HtmlView :html="post" />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  name: 'PostDetail',
  props: {
    item: { type: Object, default: () => ({}) }
  },
  computed: {
    post () {
      return this.item.description[0]
    }
  }
}
</script>

<style>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

HtmlView {
  font-size: 20px;
  padding: 10px;
}
</style>
