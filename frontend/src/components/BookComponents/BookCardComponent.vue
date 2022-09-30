<template>
  <div class="bookCard">
    <div class="bookCard--title">One piece</div>
    <div class="bookCard--theme">Shonen</div>
    <div class="bookCard--imagePlaceholder">
      <img
        class="bookCard--imagePlaceholder--image"
        src="../../assets/One-Piece-Edition-originale.jpg"
      />
    </div>
    <div class="bookCard--price">9,99€</div>
  </div>
</template>

<script></script>

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
