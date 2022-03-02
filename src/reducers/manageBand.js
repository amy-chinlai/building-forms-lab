export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
    case 'ADD_BAND':
      console.log(action.payload.name)
      console.log([...state])
      console.log(state.bands)
      console.log({ bands: [...state.bands, action.payload.name]})
      return { ...state, bands: [...state.bands, action.band]}

      default:
        return state
  }
};
