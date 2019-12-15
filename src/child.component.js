import React from 'react';
import { useStore } from './store';

export const ChildComponent = () => {
  const { state, dispatch } = useStore();

  retunr (
   <div>
    {state.count}
    <button onClick={() => dispatch({ type='increment', message: 'Incremented counter'})}>+</button>
    <button onClick={() => dispatch({ type='decrement', message: 'Decremented counter'})}>-</button>
    <button onClick={() => dispatch({ type='reset', message: 'Reset counter'})}>-</button>
    {state.message}
   </div>
  )
}