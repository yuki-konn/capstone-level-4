import { StateVariables } from "./stateVariables";

export const stateSetters = {
  // Global
  isSignedIn: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.isSignedIn = newValue;
  },

  // Home.tsx (Page)
  Home_didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.Home_didMount = newValue;
  },
  Home_linkCard1: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Home_linkCard1 = newValue;
  },
  Home_linkCard2: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Home_linkCard2 = newValue;
  },
  Home_linkCard3: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Home_linkCard3 = newValue;
  },
  Home_triviaCard: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Home_triviaCard = newValue;
  },
  // HomeCarousel.tsx (Component)
  HomeCarousel_didMount: function (
    state: StateVariables,
    action: ActionBoolean
  ) {
    const newValue = action.payload;
    state.HomeCarousel_didMount = newValue;
  },

  // About.tsx (Page)
  About_didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.About_didMount = newValue;
  },

  // Contact Form in Contact.tsx (Page)
  Contact_didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.Contact_didMount = newValue;
  },
  Contact_formData1: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Contact_formData1 = newValue;
  },
  Contact_formName: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Contact_formName = newValue;
  },
  Contact_formEmail: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Contact_formEmail = newValue;
  },
  Contact_commentArea: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Contact_commentArea = newValue;
  },
  Contact_radioArea: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Contact_radioArea = newValue;
  },
  // Phone Form in Contact.tsx
  // Contact_FormData2: "",

  // Shop.tsx (Page)
  Shop_didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.Shop_didMount = newValue;
  },
  Shop_sectionTeaContent: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.Shop_sectionTeaContent = newValue;
  },

  // SignInArea.tsx (Page)
  SignIn_didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.SignIn_didMount = newValue;
  },
  SignIn_button: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.SignIn_button = newValue;
  },
  SignIn_isSignedIn: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.SignIn_isSignedIn = newValue;
  },
  // SignInModal.tsx
  SignIn_errorMessage: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.SignIn_errorMessage = newValue;
  },

  // CreateAccountArea.tsx (Page)
  CreateAccount_didMount: function (
    state: StateVariables,
    action: ActionBoolean
  ) {
    const newValue = action.payload;
    state.CreateAccount_didMount = newValue;
  },
  CreateAccount_button: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.CreateAccount_button = newValue;
  },
  // CreateAccountModal.tsx
  CreateAccount_response: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.CreateAccount_response = newValue;
  },

  // Server.tsx (Page)
  Server_didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.Server_didMount = newValue;
  },
  Server_response: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Server_response = newValue;
  },

  // Account.tsx (Page)
  Account_didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.Account_didMount = newValue;
  },
  Account_readResponse: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Account_readResponse = newValue;
  },
  Account_updateResponse: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.Account_updateResponse = newValue;
  },
  Account_deleteResponse: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.Account_deleteResponse = newValue;
  },

  // Quote.tsx (Component)
  Quote_quote: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Quote_quote = newValue;
  },
  Quote_author: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Quote_author = newValue;
  },
  Quote_url: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Quote_url = newValue;
  },
  Quote_tags: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Quote_tags = newValue;
  },
};

type ActionBoolean = {
  payload: boolean;
  type: string;
};
type ActionString = {
  payload: string;
  type: string;
};

// type ActionNumber = {
//   payload: number;
//   type: string;
// };
// type Action = {
//   payload: any;
//   type: string;
// };
