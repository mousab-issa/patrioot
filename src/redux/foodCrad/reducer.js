import { ADD_FOOD } from './types';
const initialState = {
  sourceData: [
    {
      id: 1,
      name: 'Cheese',
    },
    {
      id: 2,
      name: 'extra Cheese',
    },
    {
      id: 3,
      name: 'extra extra Cheese',
    },
    {
      id: 4,
      name: 'extra extra extra Cheese',
    },
    {
      id: 5,
      name: 'Tomato',
    },
  ],
};

const foodCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      const product = action.payload;
      return {
        sourceData: product,
      };
    default:
      return {
        ...state,
      };
  }
};

export default foodCardReducer;
