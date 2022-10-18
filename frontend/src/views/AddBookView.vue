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
        <input
          type="text"
          class="form-control"
          id="bookTitle"
          placeholder="Prix"
          v-model="bookPrice"
        />
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
      bookCover: "",
    };
  },
  methods: {
    coverSelect: function () {
      this.bookCover = this.$refs.file.files[0];
      console.log(this.bookCover);
    },
    onSubmit: function () {
      const token = localStorage.getItem("jwt");

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
      formData.append("bookPrice", this.bookPrice);

      console.log(formData);
      axios
        .post("http://localhost:3000/api/book", formData, config)
        .then(() => {
          console.log("livre crée avec succé");
          router.push("/books");
        })
        .catch((error) => console.log(error));
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
