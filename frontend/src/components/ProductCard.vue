<script setup>
// imports
import {ref} from "vue";
import AppCountInput from "./AppCountInput.vue";

// props
defineProps({
  product: {
    type: Object
  },
});

// emits
defineEmits(["addToCart"])

// data
const count = ref(0);
</script>
<template>
  <li class="card">
    <img :src="`/images/${product.imageURL}`" class="mb-3" width="300" alt=""/>
    <div>
      {{ product.name }} - <span class="text-green-500">${{ product.price }}</span>
      <div class="text-center m-4">
        <AppCountInput v-model="count"/>
      </div>
      <AppButton
          :disabled="count === 0"
          class="primary" @click="$emit('addToCart', count), (count = 0)"
      >Add to Cart
      </AppButton>
    </div>
  </li>
</template>
