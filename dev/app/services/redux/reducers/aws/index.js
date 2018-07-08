import {FILE_UPLOAD} from '../../actions/aws';

const initialState = {
  gettingSignedUrl: false,
}


const awsStatusReducer = (state = initialState, action) => {
    switch(action.type){
      case FILE_UPLOAD:
        return {...state, ...action.payload};
    
      default:
        return state;
    }
}


export default awsStatusReducer;
