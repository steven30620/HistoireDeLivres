<template>
  <div id="boucle" v-for="book in books" :key="book.id">
    <div class="bookCard">
      <div class="bookCard--title">{{ book.title }}</div>
      <div class="bookCard--theme">{{ book.theme }}</div>
      <div class="bookCard--imagePlaceholder">image</div>
      <div class="bookCard--price">{{ book.price }}€</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "bookCardComponent",
  data() {
    return {
      books: [],
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
          this.books = res.data;
          let i = 0;
          for (this.book of this.books) {
            this.book = this.books[i];
            i++;
          }
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
  transition: all 0.2s ease-in-out;
  margin: 30px;
  border: solid black 2px;
  width: 250px;
  height: 350px;
  border-radius: 25px;
  &--title {
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    font-size: 13px;
    background-color: #deb885;
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

.bookCard:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
