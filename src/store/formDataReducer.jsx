const formData = [
  {
    id: '',
    title: '',
    description: '',
    complete: false,
  }
];

export const formDataReducer = (state = formData, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [action.payload, ...state]
    case 'COMPLETE_TASK':
      return state.map((todo) => {
        if (todo.id === action.payload.targetId) {
          return {
            ...todo,
            complete: action.payload.checked,
          };
        }
        return todo;
      });
    case 'REMOVE_CARD':
      return state.filter((task) => task.id !== action.payload);
    case 'REMOVE_ALL_CARDS':
      return state = [];
    default:
      return []
  }
}