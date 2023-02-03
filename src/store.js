import { createStore } from "vuex";
import product from "./pages/store/modules/product";
import cart from "./pages/store/modules/cart";

const store = createStore({
        modules: {
            prods: product,
            crt: cart
        },
        state() {
            return {
                isLoggedIn: false
            }
        },
    mutations: {
            login(state) {
                state.isLoggedIn = true
            },
            logout(state) {
                state.isLoggedIn = false
            }
    },

    actions: {
        login(context) {
            context.commit('login')
        },
        logout(context) {
            context.commit('logout')
        }
    },

    getters: {
            isAuthenticated(state) {
                return state.isLoggedIn
            }
    }
})

export default store