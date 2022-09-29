<template>
  <div id="connexionArea">
    <div id="connexionArea--formArea">
      <form>
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
            :type="text"
            id="connexionArea--formArea--password--input"
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
          <button class="displayPassword" @click="visible">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      emailInput: "",
      passwordInput: "",
      text: "password",
    };
  },
  methods: {
    onSubmit: function () {
      axios
        .post("http://localhost:3000/api/user/login", {
          email: this.emailInput,
          password: this.passwordInput,
        })
        .then((res) => {
          let userData = res.data.info_Utilisateur;
          localStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("jwt", res.data.token);
          router.push("/books");
        })
        .catch((error) => console.log(error));
    },
    visible: function () {
      if (this.text == "text") {
        this.text = "password";
      } else {
        this.text = "text";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#connexionArea {
  justify-content: center;
  display: flex;
  width: 100%;
  height: 300px;
  &--formArea {
    width: 100%;
    border-top: solid 3px black;
    font-size: 30px;
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
  .displayPassword {
    margin-left: 50px;
    height: 50px;
    width: 50px;
  }
}
label {
  position: relative;
  top: 4px;
}
</style>
