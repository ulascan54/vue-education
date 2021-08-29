import { createStore } from 'vuex'
const store = createStore({
  state:{
    person:{
      name:"ulaş",
      lname:"can",
      age:33
    },
    user:{
      name:"ulaş",
      lname:"can",
      age:33,
      adress:{},
      password:3333321,
      tc:11111,
    },
    theme:"dark",
    fullName:"defne kandemir",
    permissions:[1,2,3,4,5,6],
    userList:["gokan","tayfun","ilker"],
    itemList:[
      {id:1,title:"masa",type:"mobilya"},
      {id:2,title:"sandalye",type:"mobilya"},
      {id:3,title:"tv",type:"elektronik"},
      {id:4,title:"monitor",type:"elektronik"},
      {id:5,title:"bardak",type:"plastik"},
    ]
  },
  //* mutations anlık olarak senkron şekilde güncelleme yapar
  mutations:{
    newItem(state,item){
        state.itemList.push(item)
    }
  },
  //* actions asenkron çalışır
  actions:{
      newItem({commit},item){//* context vuexin clonu gibi birşeydir objedir
        console.log('item :>> ', item);
        setTimeout(() => {
          // context.state
          // context.dispatch
          // context.commit("newItem",item)
          commit("newItem",item)
        }, 2000);
      }
  },
  getters: {//* state verileri filterlayıp kullanmamızı sağlar ve kod bütününden tasarruf ederiz
   _woodItems : state => state.itemList.filter(i=> i.type ==="mobilya"),
    _activeUser(state){
      const user = {...state.user};
      delete user.password
      return user
    }
  }
})
export default store;