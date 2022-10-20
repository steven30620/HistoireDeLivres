<template>
  <div id="formArea">
    <form enctype="multipart/form-data">
      <div class="form-group">
        <label for="bookTitle">Titre du livre :</label>
        <input
          type="text"
          class="form-control"
          id="book--title"
          placeholder="Titre"
          v-model="bookTitle"
        />
      </div>
      <div class="form-group">
        <label for="bookTheme">Thème :</label>
        <input
          type="text"
          class="form-control"
          id="book--theme"
          placeholder="Thème"
          v-model="bookTheme"
        />
      </div>
      <div class="form-group">
        <label for="bookResume">Résumé de l'histoire :</label>
        <textarea
          v-model="bookResume"
          class="form-control"
          id="book--resume"
          rows="5"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="bookTitle">Prix :</label>
        <div class="form-group-price">
          <div class="form-group-price-gauche">
            <input
              type="string"
              class="form-control-price form-control-price-int"
              id="bookPrice"
              placeholder="_ _ _"
              maxlength="3"
              v-model="bookPrice"
            />
          </div>
          <div class="form-control-price-comma" id="comma">,</div>
          <div class="form-group-price-droite">
            <input
              type="string"
              class="form-control-price form-control-price-cent"
              id="bookPriceCent"
              placeholder="_ _"
              maxlength="2"
              v-model="bookPriceCent"
            />
          </div>
          <div class="form-control-price-euro">€</div>
        </div>
      </div>
      <div class="form-group book--image">
        <label for="bookImage">Couverture du livre :</label>
        <div>
          <input
            @change="coverSelect"
            type="file"
            ref="file"
            class="form-control-file"
            id="book--file"
          />
        </div>
      </div>
      <div id="submit">
        <button
          id="submit--button"
          @click="onSubmit"
          type="submit"
          method="post"
        >
          Publier le livre !
        </button>
        <button @click="test">test</button>
      </div>
    </form>
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";

export default {
  name: "addBook",
  data() {
    return {
      bookTitle: "",
      bookTheme: "",
      bookResume: "",
      bookPrice: "",
      bookPriceCent: "",
      bookCover: "",
    };
  },
  methods: {
    calcPrice: function () {
      return this.fullPrice;
    },

    coverSelect: function () {
      this.bookCover = this.$refs.file.files[0];
    },

    onSubmit: function () {
      const token = localStorage.getItem("jwt");
      let price = this.calcPrice();

      if (token == null) {
        return console.log("erreur : vous n'êtes pas connecté");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const formData = new FormData();

      formData.append("image", this.bookCover);
      formData.append("bookTitle", this.bookTitle);
      formData.append("bookTheme", this.bookTheme);
      formData.append("bookResume", this.bookResume);
      formData.append("bookPrice", price);

      if (this.checkInput() == false) {
        return console.log("erreur de champs");
      }

      axios
        .post("http://localhost:3000/api/book", formData, config)
        .then(() => {
          console.log("livre crée avec succée");
          router.push("/books");
        })
        .catch((error) => console.log(error));
    },
    checkInput: function () {
      if (isNaN(this.bookPrice) || isNaN(this.bookPriceCent)) {
        console.log("ce n'es pas un prix");
      }
    },
  },
  computed: {
    fullPrice() {
      return parseInt(this.bookPrice) * 100 + parseInt(this.bookPriceCent);
    },
  },
  watch: {
    bookPrice: function () {
      let priceLength = this.bookPrice.length;
      if (priceLength == 3) {
        document.getElementById("bookPriceCent").focus();
      }
    },
    bookPriceCent: function () {
      let centLength = this.bookPriceCent.length;
      if (centLength == 0) {
        document.getElementById("bookPrice").focus();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#formArea {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  width: 50%;
  font-size: 25px;
}

.form-group-price {
  width: 18%;
  height: 64px;
  display: flex;
  justify-content: center;
  border: black solid 2px;
  position: relative;
  left: 40%;
  input:focus {
    outline: none;
  }
  &-gauche {
    input {
      text-align: right;
    }
  }
}
.form-control-price {
  &-int {
    height: 60px;
    width: 80px;
    border: none;
    &::placeholder {
      text-align: right;
      font-size: 27px;
    }
  }
  &-comma {
    padding-top: 3px;
    font-size: 40px;
  }
  &-euro {
    padding-top: 3px;
    font-size: 35px;
  }
  &-cent {
    height: 60px;
    width: 40px;
    border: none;
    padding-right: 5px;
    &::placeholder {
      text-align: left;
      font-size: 25px;
      position: relative;
      top: 0px;
    }
  }
}
.book {
  &--image {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
}

#submit {
  margin-top: 40px;
  &--button {
    background-color: #deb887;
  }
}
</style>
