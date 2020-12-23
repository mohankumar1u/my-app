const initialState = []
let i=0;
const cardReducer =(state=initialState,action)=>{
    switch(action.type){
      case "createCard":
        state[i]=action.payload;
        i++;
       console.log(action.payload, "hello")
       return state;
      case "updateCard":
          return state;
        default:
            return state;
    }
  }
  export default cardReducer;