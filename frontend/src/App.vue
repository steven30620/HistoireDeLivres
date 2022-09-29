<template>
  <nav>
    <i class="fas fa-eye"></i>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/books">La bibliothèque</router-link>
    <div id="alerteConnexion" v-if="alerteMessage">
      Vous devez êtres connecté pour acceder à la bibliothèque
    </div>
  </nav>
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
  margin-bottom: 80px;
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

#alerteConnexion {
  position: absolute;
  top: 100px;
  left: 85px;
  font-size: 30px;
}
</style>
