import {
  FOOD_API_FAIL,
  SECTION_ID, UPDATE_RESTAURANT
} from './types';

const initialState = {
  resturent_data: [
    
  ],
  selectedIndex: 0,
  foodCategories: [
    {
      id: 1,
      categoryName: 'Soups',
    },
    {
      id: 2,
      categoryName: 'Drinks',
    },
    {
      id: 3,
      categoryName: 'Combos',
    },
    {
      id: 4,
      categoryName: 'Main',
    },
    {
      id: 5,
      categoryName: 'Burgers',
    },
    {
      id: 6,
      categoryName: 'Snacks',
    },
    {
      id: 7,
      categoryName: 'Pizza',
    },
    {
      id: 8,
      categoryName: 'BBQ',
    },
  ],
  foodCategories_ar: [
    {
      id: 1,
      categoryName: 'الحساء',
    },
    {
      id: 2,
      categoryName: 'مشروبات',
    },
    {
      id: 3,
      categoryName: 'المجموعات',
    },
    {
      id: 4,
      categoryName: 'رئيسي',
    },
    {
      id: 5,
      categoryName: 'برجر',
    },
    {
      id: 6,
      categoryName: 'مقبلات',
    },
    {
      id: 7,
      categoryName: 'بيتزا',
    },
    {
      id: 8,
      categoryName: 'شواء',
    },
  ],
  isError: false,
  selectedVendorId: -1,
};

const search_resturent = (state = initialState, action) => {
  switch (action.type) {
    case SECTION_ID:
      return {
        ...state,
        selectedIndex: action.payload,
      };
    case UPDATE_RESTAURANT:
      return {
        ...state,
        resturent_data: action.payload.categories,
        foodCategories: action.payload.all_categories,
        isError: false,
        selectedVendorId: action.payload.vendor_id
      };
    case FOOD_API_FAIL:
      return {
        ...state,
        isError: true,
        selectedVendorId: -1
      };
    default:
      return state;
  }
};
export default search_resturent;