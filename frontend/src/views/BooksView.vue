<template>
  <div id="bodyBook">
    <bookCardComponent></bookCardComponent>
  </div>
</template>

<script>
import BookCardComponent from "../components/BookComponents/BookCardComponent.vue";

export default {
  name: "BooksView",
  components: {
    BookCardComponent,
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#bodyBook {
  display: flex;
  flex-flow: row wrap;
  border: solid black 2px;
  justify-content: center;
  align-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
