<template>
  <div class="bookCard">
    <div class="bookCard--title">{{ bookTitle }}</div>
    <div class="bookCard--theme">{{ bookTheme }}</div>
    <div class="bookCard--imagePlaceholder">image</div>
    <div class="bookCard--price">{{ bookPrice }}€</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "bookCardComponent",
  data() {
    return {
      bookTitle: "",
      bookTheme: "",
      bookPrice: "",
      bookCover: "",
    };
  },
  methods: {
    getBooks: function () {
      axios
        .get("http://localHost:3000/api/book")
        .then((res) => {
          let array = res.data;
          array = array[0];
          this.bookTitle = array.title;
          this.bookTheme = array.theme;
          this.bookPrice = array.price;
        })
        .catch((error) => console.log(error));
    },
  },
  beforeMount() {
    this.getBooks();
  },
};
</script>

<style lang="scss" scoped>
.bookCard {
  border: solid black 2px;
  width: 250px;
  height: 350px;
  &--title {
    font-size: 25px;
    border-bottom: solid black 2px;
  }
  &--theme {
    font-size: 20px;
    border-bottom: solid black 2px;
  }
  &--imagePlaceholder {
    border-bottom: solid black 2px;
    height: 240px;
    &--image {
      height: 100%;
      object-fit: contain;
    }
  }
  &--price {
    font-size: 20px;
  }
}
</style>
