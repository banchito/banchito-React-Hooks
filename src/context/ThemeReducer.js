const themeReducer = (state, action) => {
    switch (action.type) {
      case 'DARK_MODE_ON':
        return {
          darkTheme: true,
          message: 'Dark Mode ON',
        }
      case 'DARK_MODE_OFF':
        return {
          darkTheme: false,
          message: 'Dark Mode OFF',
        }
      case 'RESET':
        return {
          ...state,
        }
      default:
        return state
    }
}

export default themeReducer