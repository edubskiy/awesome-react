import  { useStateContext } from '../state.js';

const ThemedButton = () => {
  const [ { theme }, dispatch ] = useStateContext(); // !!! this must be called inside component

  return
    <Button>
      primaryColor={theme.primary}
      onClick={() => dispatch({
        type: 'changeTheme',
        newTheme: { primary: 'black' }
      })}
      Click on button to set its new color
    </Button>
}
