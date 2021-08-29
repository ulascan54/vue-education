import { createStore } from 'vuex'
const store = createStore({
  state:{
    person:{
      name:"ulaş",
      lname:"can",
      age:33
    },
    theme:"dark",
    permissions:[1,2,3,4,5,6]
  }
})
export default store;