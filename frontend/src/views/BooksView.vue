<template>
  <div id="bodyBook">
    <bookCardComponent></bookCardComponent>

    <div class="userComponent">
      <UserComponent></UserComponent>
    </div>
    <div id="bodyBook--CardsArea"></div>
  </div>
</template>

<script>
import UserComponent from "../components/UserComponents/UserComponent.vue";
import BookCardComponent from "../components/BookComponents/BookCardComponent.vue";

export default {
  name: "BookView",
  components: {
    UserComponent,
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
}
</style>
