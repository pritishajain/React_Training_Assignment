export const addItem = (data: string) => {
  return {
    type: "Add_Item",
    payload: {
      id: new Date().getTime().toString(),
      title: data,
    },
  };
};

export const completeItem = (itemid: string, data: string) => {
  return {
    type: "Complete_Item",
    payload: {
      id: itemid,
      title: data,
    },
  };
};

export const removeItem = (itemid: string, data: string) => {
  return {
    type: "Remove_Item",
    payload: {
      id: itemid,
      title: data,
    },
  };
};

export const removeAllItem = () => {
  return {
    type: "Remove_All_Item",
  };
};

export const completeItemRestore = (itemid: string, data: string) => {
  return {
    type: "Complete_Item_Restore",
    payload: {
      id: itemid,
      title: data,
    },
  };
};

export const deleteItemRestore = (itemid: string, data: string) => {
  return {
    type: "Delete_Item_Restore",
    payload: {
      id: itemid,
      title: data,
    },
  };
};
