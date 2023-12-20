import {defineStore} from "pinia";
import {computed, ref} from "vue";


export const useCartStore = defineStore('cartStore',
    () => {
        const items = ref([]);

        const addToCart = (item) => {
            //check if we have the product already in state and add it if it is not, else increase the count
            const index = items.value.findIndex(i => i.product.id === item.product.id)
            if (index === -1) {
                items.value.push(item);
            } else {
                items.value[index].count += item.count;
            }


        }

        const $reset = () => {
            items.value = [];
        }
        const totalItems = computed(() => {
            //just because we want to feel important with our reducer function :)
            return items.value.reduce((accumulator, current) => {
                return accumulator + current.count;
            }, 0)
        })

        return {addToCart, items, $reset, totalItems}

    })