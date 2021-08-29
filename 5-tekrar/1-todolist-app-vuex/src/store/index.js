import {createStore} from "vuex"
import axios from "axios"

const store = createStore({
  state:{
    itemList:[]
  },
  mutations:{
    getItem(state,item){
      state.itemList=item
      console.log('item :>> ', item);
    },
    saveItem(state,item){
      state.itemList.push(item)
    },
    deleteItem(state,id){
      state.itemList= state.itemList.filter(i=> i.id !== id)
    }
  },
   actions:{
    async getItemFromAxios({commit},item){
      await commit("getItem",item)
    },
    async saveItemToAxios({commit},item){
      const saveObject={
        title:item,
        created_at:new Date().getDate(),
        completed:false,
      }
      axios.post("http://localhost:3000/items",saveObject)
      .then(async response=>{
        await commit("saveItem",response)
      })
      
    },
    async deleteItemFromAxios({commit},id){
      axios.delete(`http://localhost:3000/items/${id}`)
      .then(async delete_response=>{
        await commit("deleteItem",delete_response)
        }
      )
    }
  },
  getters:{
    _itemList: state=>state.itemList,
    _itemListCount:state=>state.itemList.length
  }
})
export default store