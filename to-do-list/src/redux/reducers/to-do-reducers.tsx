interface myAction {
  type: string;
  payload: { id: string; title: string };
}

interface myState {
  active: { id: string; title: string }[];
  complete: { id: string; title: string }[];
  recycleBin: { id: string; title: string }[];
}

const initialState: myState = {
  active: [],
  complete: [],
  recycleBin: [],
};

const itemReducer = (state: myState = initialState, action: myAction) => {
  switch (action.type) {
    case "Add_Item":
      return {
        ...state,
        active: [...state.active, action.payload],
      };

    case "Complete_Item":
      return {
        ...state,
        complete: [...state.complete, action.payload],
        active: [...state.active].filter((element) => action.payload.id !== element.id),
      };

    case "Remove_Item":
      return {
        ...state,
        recycleBin: [...state.recycleBin, action.payload],
        active: [...state.active].filter((element) => action.payload.id !== element.id),
      };

    case "Remove_All_Item":
      return {
        ...state,
        recycleBin: [...state.recycleBin, ...state.active],
        active: [],
      };

    case "Complete_Item_Restore":
      return {
        ...state,
        complete: [...state.complete].filter((element) => action.payload.id !== element.id),
        active: [...state.active, action.payload],
      };

    case "Delete_Item_Restore":
      return {
        ...state,
        recycleBin: [...state.recycleBin].filter((element) => action.payload.id !== element.id),
        active: [...state.active, action.payload],
      };

    default: {
      return state;
    }
  }
};

export default itemReducer;
