import React, { Component } from 'React';
import { StateContext } from '../state.js.js.js';

class ThemedButton extends Component {
  static contextType = StateContext;

  render() {
    const [ { theme }, dispatch ] = this.context;

    return (
      <Button
        primaryColor={theme.primary}
        onClick={() => dispatch({
          type: 'changeTheme',
          newTheme: { primary: 'black '}
        })}
      >
        Click on button to set its new color
      </Button>
    )
  }
}
