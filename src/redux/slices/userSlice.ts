import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  sessionToken: string | null;
  email: string | null;
}

const initialState: UserState = {
  sessionToken: null,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSessionToken: (state, action: PayloadAction<string>) => {
      state.sessionToken = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    clearUser: (state) => {
      state.sessionToken = null;
      state.email = null;
    },
  },
});

export const { setSessionToken, setEmail, clearUser } = userSlice.actions;

export default userSlice.reducer;
