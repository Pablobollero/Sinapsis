import { createSlice } from "@reduxjs/toolkit";
import allProducts from '../../data/products.json';//Remover y modificar logica
import allCategories from '../../data/categories.json';//Remover y modificar logica

export const shopSlice = createSlice({
    name: 'shopo',
    initialState: {
        value: {
            products: allProducts,//remover y acomodar logica
            categories: allCategories,//remover y acomodar logica
            categorySelected: '',
            productIdSelected: null,
            productsFilteredByCategory: [],
        }
    },
    reducers: {
        setCategorySelected: (state, action) => {
            const categorySelected = action.payload
            const productsFiltered = allProducts.filter((product) => product.category === categorySelected)
            state.value.categorySelected = categorySelected
            state.value.productsFilteredByCategory = productsFiltered; 
            
        },
        setProductIdSelected: (state, action) => {
            state.value.productIdSelected = action.payload
        }
    }
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer