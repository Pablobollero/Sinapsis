import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        value: {
            user: "userLogged",
            updatedAt: new Date().toLocaleString(),
            total: null,
            items: [],
        },
    },
    reducers: {
        //Funucion para agregar un Item al carrito y buscar si hay un producto repetido, si lo encuentra aplica la logica para no repetir el item (item item). Si lo encuentra, se utiliza un metodo .map para sumarlo y renderizarlo en uno solo (por ej: item x 2).
        addItem: (state, action) => {
            const productRepeated = state.value.items.find((item) => item.id === action.payload.id);

            if (productRepeated) {
                const itemsUpdated = state.value.items.map((item) => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity;
                        return item;
                    }
                    return item;
                });
                const total = itemsUpdated.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0);
                state.value = {
                    ...state.value, 
                    items: itemsUpdated,
                    total, 
                    updatedAt: new Date().toLocaleString(),
                };
            } else {
                //Si no lo encuentra en la lista, lo agrega al carrito
                state.value.items.push(action.payload);
                const total = state.value.items.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0);
                state.value = {
                ...state.value,
                total,
                updatedAt: new Date().toLocaleString(),
                };
            }
        },
        removeItem: (state, action) => {
            //Logica para remover el producto utilizando .filter por id
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;