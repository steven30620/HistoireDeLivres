<template>
  <div id="bodyApp">
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/books">La bibliothèque</router-link>
    </nav>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
  props: {},
  data() {
    return {
      alerteMessage: false,
      isConnected: false,
      infoUser: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 15px;
  margin-bottom: 40px;
  border-bottom: solid 3px rgb(120, 38, 38);

  a {
    font-weight: bold;
    font-size: 30px;
    color: #2c3e50;
    &:hover {
      color: black;
    }

    &.router-link-exact-active {
      color: #d4b44a;
    }
  }
}
</style>
