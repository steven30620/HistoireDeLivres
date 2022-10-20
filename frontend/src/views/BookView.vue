<template>
  <div class="bookCard">
    <div class="bookCard--title">{{ bookTitle }}</div>
    <div class="bookCard--theme">{{ bookTheme }}</div>
    <div class="bookCard--imagePlaceholder">
      <img class="bookCard--image" :src="bookImage" />
    </div>
    <div class="bookCard--price">{{ bookPrice }}€</div>
    <div>{{ bookResume }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BookView",
  components: {},

  data() {
    return {
      bookTitle: "",
      bookPrice: "",
      bookResume: "",
      bookTheme: "",
      bookImage: "",
    };
  },

  methods: {
    getOneBook: function () {
      let productId = this.$route.params.id;

      axios
        .get("http://localHost:3000/api/book/" + productId)
        .then((res) => {
          let bookData = res.data;
          console.log(bookData);
          this.bookTitle = bookData.title;
          this.bookTheme = bookData.theme;
          this.bookResume = bookData.resume;
          this.bookPrice = bookData.price / 100;
          this.bookImage = bookData.image;
        })
        .catch((error) => console.log(error));
    },
  },
  beforeMount() {
    this.getOneBook();
  },
};
</script>

<style lang="scss" scoped></style>
