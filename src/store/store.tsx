import create from 'zustand';

interface StoreState {
  name: string;
  counter: number;
  isRunning: boolean;
}

interface StoreActions {
  setName: (name: string) => void;
  resetCounter: () => void;
  toggleRunning: () => void;
  incrementCounter: () => void;
}

const useStore = create<StoreState & StoreActions>((set) => ({
  name: 'Aquib',
  counter: 0,
  isRunning: false,
  setName: (name: string) => set({ name }),
  resetCounter: () => set({ counter: 0 }),
  toggleRunning: () => set((state) => ({ isRunning: !state.isRunning })),
  incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
}));

export default useStore;
