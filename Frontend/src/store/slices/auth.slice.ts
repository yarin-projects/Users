import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginFormData, SignUpFormData } from '../../schemas/auth.schema';
import {
  AuthResponse,
  loginRequest,
  logoutRequest,
  signUpRequest,
  VerifyAuthResponse,
  verifyCurrentUserRequest,
} from '../../api/api';
import { getErrorMessage } from '../../utls/axios-error-handler.utils';
import { TOKENS } from '../../strings/tokens';

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

export const login = createAsyncThunk(
  TOKENS.actions.auth.login,
  async (formData: LoginFormData, { rejectWithValue }) => {
    try {
      const response: AuthResponse = await loginRequest(formData);
      return {
        token: response.token,
        email: formData.email,
      };
    } catch (error) {
      const errorMessage: string = getErrorMessage(error);
      return rejectWithValue(errorMessage);
    }
  }
);

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

export const logout = createAsyncThunk(
  TOKENS.actions.auth.logout,
  async (_, { rejectWithValue }) => {
    try {
      await logoutRequest();
    } catch (error) {
      const errorMessage: string = getErrorMessage(error);
      return rejectWithValue(errorMessage);
    }
  }
);

export const verifyCurrentUser = createAsyncThunk(
  TOKENS.actions.auth.verifyCurrentUser,
  async (_, { rejectWithValue }) => {
    try {
      const response: VerifyAuthResponse = await verifyCurrentUserRequest();
      return {
        token: response.token,
        email: response.email,
        name: response.name,
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
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.email = action.payload.email;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.token = TOKENS.empty;
        state.email = TOKENS.empty;
        state.name = TOKENS.empty;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      })
      .addCase(logout.fulfilled, state => {
        state.token = TOKENS.empty;
        state.email = TOKENS.empty;
        state.name = TOKENS.empty;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.token = TOKENS.empty;
        state.email = TOKENS.empty;
        state.name = TOKENS.empty;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      })
      .addCase(verifyCurrentUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(verifyCurrentUser.rejected, (state, action) => {
        state.token = TOKENS.empty;
        state.email = TOKENS.empty;
        state.name = TOKENS.empty;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
