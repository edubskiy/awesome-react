import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

StateProvider.propTypes = {
  /**
   * @returns {React.Node}
   */
  children: PropTypes.node.isRequired,

  /**
   * Initial state value object
   */
  initialState: PropTypes.shape({}).isRequired,

  /**
   * Reacts to dispatch actions
   * @param {object} state
   * @param {object} action
   */
  reducer: PropTypes.func.isRequired
};

export const getState = useContext(StateContext);
