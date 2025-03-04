import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SignUpFormData } from '../../schemas/auth.schema';
import { AuthResponse, signUpRequest } from '../../api/api';
import { getErrorMessage } from '../../utls/axios-error-handler';
import { TOKENS } from '../../config/tokens';

interface AuthState {
  name: string;
  email: string;
  token: string;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  name: TOKENS.empty,
  email: TOKENS.empty,
  token: TOKENS.empty,
  isAuthenticated: false,
  error: null,
};

export const signUp = createAsyncThunk(
  TOKENS.actions.auth.signUp,
  async (formData: SignUpFormData, { rejectWithValue }) => {
    try {
      const response: AuthResponse = await signUpRequest(formData);
      return {
        token: response.token,
        email: formData.email,
        name: formData.name,
      };
    } catch (error) {
      const errorMessage: string = getErrorMessage(error);
      return rejectWithValue(errorMessage);
    }
  }
);

const authSlice = createSlice({
  name: TOKENS.auth,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.token = TOKENS.empty;
        state.email = TOKENS.empty;
        state.name = TOKENS.empty;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
