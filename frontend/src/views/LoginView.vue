<template>
  <div id="connexionZone">
    <div id="connexionZone--header">
      <div
        @click="connexion"
        id="connexionZone--header--connexion"
        :style="{ 'background-color': backgroundColorConnexion }"
      >
        <h2>Connexion</h2>
      </div>
      <div
        @click="inscription"
        id="connexionZone--header--inscription"
        :style="{ 'background-color': backgroundColorInscription }"
      >
        <h2>S'inscrire</h2>
      </div>
    </div>

    <div id="Form">
      <component :is="activeComponent" class="form"></component>
    </div>
  </div>
</template>

<script>
import SignInComponentVue from "../components/SignInComponent.vue";
import SignUpComponentVue from "../components/SignUpComponent.vue";

export default {
  components: {
    SignInComponentVue,
    SignUpComponentVue,
  },
  data() {
    return {
      backgroundColorConnexion: "",
      backgroundColorInscription: "",
      connexionIsSelected: true,
      inscriptionIsSelected: false,
      activeComponent: "",
    };
  },
  methods: {
    connexion: function () {
      this.backgroundColorInscription = "";
      this.backgroundColorConnexion = "#deb887";
      this.activeComponent = SignInComponentVue;
    },

    inscription: function () {
      this.backgroundColorInscription = "#deb887";
      this.backgroundColorConnexion = "";
      this.activeComponent = SignUpComponentVue;
    },
  },
};
</script>

<style lang="scss" scoped>
#connexionZone {
  border: 5px solid black;
  width: 80%;
  position: absolute;
  top: 150px;
  right: 10%;
  flex-direction: row;
  &--header {
    width: 100%;
    display: flex;
    flex-direction: row;
    &--connexion {
      width: 50%;
      &:hover {
        background-color: burlywood;
        cursor: pointer;
      }
    }
    &--inscription {
      border-left: 5px solid black;
      width: 50%;
      &:hover {
        background-color: #deb887;
        cursor: pointer;
      }
    }
  }
}
</style>
