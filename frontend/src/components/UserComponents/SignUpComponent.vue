<template>
  <div id="connexionArea">
    <div id="connexionArea--formArea">
      <form>
        <div id="connexionArea--formArea--name">
          <label for="connexionArea--formArea--name--input">Prénom :</label>
          <input
            v-model="nameInput"
            type="text"
            id="connexionArea--formArea--name--input"
          />
        </div>
        <div id="connexionArea--formArea--email">
          <label for="connexionArea--formArea--email--input">E-mail :</label>
          <input
            v-model="emailInput"
            type="text"
            id="connexionArea--formArea--email--input"
          />
        </div>
        <div id="connexionArea--formArea--password">
          <label for="connexionArea--formArea--password--input"
            >Mot de passe :</label
          >
          <input
            v-model="passwordInput"
            type="password"
            id="connexionArea--formArea--password--input"
          />
        </div>
        <div id="connexionArea--formArea--premium">
          <label for="connexionArea--formArea--premium">Compte premium :</label>
          <input
            type="checkbox"
            id="connexionArea--formArea--premium--checkbox"
            v-model="isPremium"
          />
        </div>

        <div id="connexionArea--formArea--footer">
          <button
            @click="onSubmit"
            id="connexionArea--formArea--footer--button"
            type="submit"
          >
            Connexion
          </button>
        </div>
      </form>
      <div
        v-if="userCreated"
        id="connexionArea--formArea--footer--confirmation "
      >
        Utilisateur crée avec succée
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  props: {
    texte: String,
  },
  data() {
    return {
      nameInput: "",
      emailInput: "",
      passwordInput: "",
      isPremium: false,
      userCreated: false,
    };
  },
  methods: {
    onSubmit: function (e) {
      e.preventDefault();
      axios
        .post("http://localhost:3000/api/user/signup", {
          name: this.nameInput,
          email: this.emailInput,
          password: this.passwordInput,
          premium: this.isPremium,
        })
        .then(() => {
          this.userCreated = true;
          setTimeout(() => {
            this.userCreated = false;
          }, 3000);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#connexionArea {
  display: flex;
  justify-content: center;
  &--formArea {
    width: 100%;
    padding: 5px;
    border-top: solid 3px black;
    font-size: 30px;
    &--name {
      flex-direction: column;
      display: flex;
      &--input {
        font-size: 25px;
        height: 30px;
        margin-top: 20px;
        margin-left: 50px;
        margin-right: 50px;
      }
    }
    &--email {
      flex-direction: column;
      display: flex;
      &--input {
        font-size: 25px;
        height: 30px;
        margin-top: 20px;
        margin-left: 50px;
        margin-right: 50px;
      }
    }
    &--password {
      flex-direction: column;
      display: flex;
      &--input {
        font-size: 25px;
        margin-left: 50px;
        margin-right: 50px;
        height: 30px;
        margin-top: 20px;
      }
    }
    &--premium--checkbox {
      position: relative;
      top: 10px;
      height: 30px;
      width: 30px;
    }
    &--footer {
      padding-top: 20px;
      height: 80px;
      &--button {
        height: 50px;
        width: 200px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
label {
  position: relative;
  top: 4px;
}
</style>
