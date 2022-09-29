<template>
  <div>
    <div id="userArea" v-if="isConnected">
      <div class="userArea--dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div id="userArea--name">Bienvenue {{ userName }}</div>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button @click="logout" class="dropdown-item" type="button">
            Déconnexion
          </button>
          <button class="dropdown-item" type="button">Profil</button>
          <button @click="goToAddBook" class="dropdown-item" type="button">
            Ajouter un livre
          </button>
          <button class="dropdown-item" type="button" @click="deleteAccount">
            Supprimer le compte
          </button>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
// import axios from "axios";

export default {
  components: {},
  props: {},
  data() {
    return {
      isConnected: false,
      isNotConnected: true,
      userName: "",
    };
  },
  methods: {
    logout: function () {
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");
      this.isConnected = false;
    },
    getName: function () {
      let localUserName = localStorage.getItem("user");
      let getToken = localStorage.getItem("jwt");

      localUserName = JSON.parse(localUserName);
      if (localUserName !== null) {
        if (getToken !== null) {
          this.isConnected = true;
          this.isNotConnected = false;
          this.userName = localUserName.name;
        }
      } else {
        console.log("pas connecté");
        this.isNotConnected = true;
        this.isConnected = false;
      }
    },
    // deleteAccount: function () {
    //   const userIdToDelete = axios.delete;
    // },
    goToAddBook: function () {
      router.push("/addBook");
    },
  },
  mounted() {
    this.getName();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#userArea {
  position: absolute;
  top: 5px;
  right: 80px;
  height: 60px;
  width: 200px;
}
#dropdownMenu {
  background-color: #deb887;
  color: black;
}
.dropdown-menu {
  background-color: #deb887;
  border: solid black 1px;
  transform: translate3d(20px, 59px, 0px) !important;
}
.dropdown-item {
  background-color: #deb887;
  &:hover {
    background-color: #e8c597;
  }
}
</style>
