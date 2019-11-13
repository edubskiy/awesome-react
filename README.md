# React Utility functions library

Manage state in React with new Context API:
1. React.createContext is passed the initial value. It returns an object with a Provider and a Consumer.
2. The Provider component is used higher in the tree and accepts a prop called value. This value can be anything!
3. The Consumer component is used anywhere below the Provider in the tree and accepts a prop called children and must be a function that can accept a value and return a JSX.
