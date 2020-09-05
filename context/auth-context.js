import create from 'zustand';

export const useAuth = create((set) => ({
	user: undefined,
	setUser: (newUser) => set({ user: newUser }),
}));
