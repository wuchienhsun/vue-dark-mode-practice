export const increment = state => {
  state.count++
  state.history.push('increment')
}

export const decrement = state => {
  state.count--
  state.history.push('decrement')
}

export const changeMode = state => {
  if (state.mode === 'dark') {
    state.mode = 'ligth'
  } else {
    state.mode = 'dark'
  }
}