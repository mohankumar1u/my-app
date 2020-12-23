const initialState = []
  let i=0;
const rowReducer =(state=initialState,action)=>{
    switch(action.type){
      case "addRow":
            // eslint-disable-next-line no-undef
            state[i]=action.payload;
           i++;
          console.log(action.payload, "hello")
          return state;
      case "removeRow": 
      console.log(action.payload);
      let data =[...state]
      state=data.filter((element,index)=>{
       if(index!=action.payload){
           return element;
       } 
      });
      return state;
        default:
            return state;
    }
  }
  export default rowReducer;