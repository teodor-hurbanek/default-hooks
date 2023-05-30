interface State {
  age: number
}

interface Action {
  type: string
}

const ageReducer = (state: State, action: Action) => {
  if (action.type === 'incremented_age') {
    return { age: state.age + 1 }
  }
  throw Error('Unknown action.' + action.type)
}

export default ageReducer
