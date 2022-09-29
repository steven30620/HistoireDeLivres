<template>
  <div id="bodyBook">
    <div class="home">
      <UserComponent></UserComponent>
    </div>
    <div id="books">
      <font-awesome-icon icon="fa-solid fa-eye" /><font-awesome-icon
        icon="fa-solid fa-eye"
      /><font-awesome-icon icon="fa-solid fa-eye" /><font-awesome-icon
        icon="fa-solid fa-eye"
      /><font-awesome-icon icon="fa-solid fa-eye" />
    </div>
  </div>
</template>

<script>
import UserComponent from "../components/UserComponent.vue";

export default {
  name: "BookView",
  components: {
    UserComponent,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
