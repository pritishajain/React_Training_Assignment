export interface myAction {
  type: string;
  payload: { id: string; title: string };
}

export interface myState {
  active: { id: string; title: string }[];
  complete: { id: string; title: string }[];
  recycleBin: { id: string; title: string }[];
}
