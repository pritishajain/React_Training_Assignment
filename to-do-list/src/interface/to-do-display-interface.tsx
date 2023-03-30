export interface myState {
  data: string;
}

export interface dispatchProps {
  addItem: (data: string) => void;
  removeAllItem: () => void;
}
