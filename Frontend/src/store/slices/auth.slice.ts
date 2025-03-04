import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SignUpFormData } from '../../schemas/auth.schema';
import { AuthResponse, signUpRequest } from '../../api/api';
import { getErrorMessage } from '../../utls/axios-error-handler';

interface AuthState {
  name: string;
  email: string;
  token: string;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  name: '',
  email: '',
  token: '',
  isAuthenticated: false,
  error: null,
};

export const signUp = createAsyncThunk(
  'auth/signup',
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
  name: 'auth',
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
        state.token = '';
        state.email = '';
        state.name = '';
        state.isAuthenticated = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
