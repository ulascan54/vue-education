import {createStore} from "vuex"
import contact from "./modules/contact";
import taskmanager from "./modules/taskmanager";
const store= createStore({
  state:{
    mainName:"ulaşcan"
  },
  modules:{
    musteri:contact,
    taskmanager
  }
})
export default store;