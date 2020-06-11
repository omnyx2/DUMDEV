import _ from 'lodash';

export default ( state={}, action) => {
	switch (action.type){
		case "CREATE_POST": return { ...state, [action.payload.id]: action.payload };
					//		case "FETCH_POST": return {...state, [action.payload.id]: action.payload }; 
		case "FETCH_POSTS": return { ...state, ..._.mapKeys(action.payload, 'id') }; 
		case "EDIT_POST": return {...state, [action.payload.id]: action.payload }; 
		case "DELETE_POST": return _.omit(state, action.payload);
		default: return state ;
	}
}
