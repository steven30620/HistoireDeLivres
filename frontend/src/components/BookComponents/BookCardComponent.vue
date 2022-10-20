<template>
  <div id="book" v-for="book in books" :key="book._id">
    <div class="bookCard" @click="displayBook(book._id)">
      <div class="bookCard--title">{{ book.title }}</div>
      <div class="bookCard--theme">{{ book.theme }}</div>
      <div class="bookCard--imagePlaceholder">
        <img class="bookCard--image" :src="book.image" />
      </div>
      <div class="bookCard--price">{{ book.price }}€</div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";

export default {
  name: "bookCardComponent",
  data() {
    return {
      books: [],
      bookPrice: Number,
    };
  },

  methods: {
    getBooks: function () {
      axios
        .get("http://localHost:3000/api/book")
        .then((res) => {
          let bookArray = res.data;
          let i = 0;
          for (this.book in bookArray) {
            this.books.push(bookArray[i]);
            bookArray[i].price = bookArray[i].price / 100;
            i++;
          }
        })
        .catch((error) => console.log(error));
    },
    displayBook: function (selectedBookId) {
      router.push("/book/" + selectedBookId);
    },
  },
  computed: {
    calculedPrice() {
      return this.book.price / 100;
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
    font-size: 20px;
    height: 30px;
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
  }
  &--price {
    font-size: 20px;
  }
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
}

.bookCard:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
