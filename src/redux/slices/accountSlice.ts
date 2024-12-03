import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Account {
  id: string;
  bankName: string;
  accountAlias: string;
  balance: number;
}

interface AccountsState {
  accounts: Account[];
}

const initialState: AccountsState = {
  accounts: [],
};

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<Account>) => {
      state.accounts.push(action.payload);
    },
    removeAccount: (state, action: PayloadAction<string>) => {
      state.accounts = state.accounts.filter(
        account => account.id !== action.payload,
      );
    },
  },
});

export const {addAccount, removeAccount} = accountSlice.actions;
export default accountSlice.reducer;
