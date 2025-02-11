
import { create } from 'zustand'

const useConvo = create((set) => ({
  Selectedtalk: null,
  setSelectedtalk: (Selectedtalk) => set({ Selectedtalk }),
    messages: [],
    setMessages: (messages) => set({ messages }),

}));
export default useConvo;
