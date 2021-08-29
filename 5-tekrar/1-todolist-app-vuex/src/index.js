import {createStore} from "vuex"
import axios from "axios"

const store = createStore({
  state:{
    itemList:[]
  },
  mutations:{
    setItem(state){
      axios.get("http://localhost:3000/posts")
      .then((item_response)=>{
        console.log('item_response :>> ', item_response)
        state.itemList=item_response.data || 0
        console.log('state.itemList :>> ', state.itemList);
      })

    }
  }
})
export default store