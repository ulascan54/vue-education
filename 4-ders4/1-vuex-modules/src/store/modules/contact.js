export default{
  namespaced:true,
  //* namespaced olarark tanımlanmasını istediğimiz modullerin başına namespased eklersek çağırken bu modlün ismini söylmemiz gerekir
  state:{
    contactName:"puresol",
    contactAddress:"kanada",
    propertyList:[]
  },
  mutations:{
    setItem(state,name){
      state.contactName=name
    }
  },
  getters:{
    _contactName:state=>state.contactName,
    // _itemList:state=> state.propertyList
  }
}