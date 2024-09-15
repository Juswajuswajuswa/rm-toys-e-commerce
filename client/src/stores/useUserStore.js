import { create } from "zustand";
import {persist, createJSONStorage} from 'zustand/middleware'

export const useUserStore = create(persist(
    (set) => ({
        currentUser: null, 
        setCurrentUser: (user) => set({currentUser: user}),
        clearUser: () => {
            set({ currentUser: null })

            localStorage.removeItem("user-store")
        },
    }),
    {
        name: 'user-store', // Unique name for localStorage key
        storage: createJSONStorage(() => localStorage)
    }
))