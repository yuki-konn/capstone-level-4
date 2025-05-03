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
    state.Home_DidMount = newValue;
  },
  Home_linkCard1: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Home_LinkCard1 = newValue;
  },
  Home_linkCard2: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Home_LinkCard2 = newValue;
  },
  Home_linkCard3: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Home_LinkCard3 = newValue;
  },
  Home_triviaCard: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Home_TriviaCard = newValue;
  },
  // HomeCarousel.tsx (Component)
  HomeCarousel_didMount: function (
    state: StateVariables,
    action: ActionBoolean
  ) {
    const newValue = action.payload;
    state.HomeCarousel_DidMount = newValue;
  },

  // About.tsx (Page)
  About_didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.About_DidMount = newValue;
  },

  // Contact Form in Contact.tsx (Page)
  Contact_didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.Contact_DidMount = newValue;
  },
  Contact_formData1: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Contact_FormData1 = newValue;
  },
  Contact_formName: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Contact_FormName = newValue;
  },
  Contact_formEmail: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Contact_FormEmail = newValue;
  },
  Contact_commentArea: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Contact_CommentArea = newValue;
  },
  Contact_radioArea: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Contact_RadioArea = newValue;
  },
  // Phone Form in Contact.tsx
  // Contact_FormData2: "",

  // Shop.tsx (Page)
  Shop_didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.Shop_DidMount = newValue;
  },
  Shop_sectionTeaContent: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.Shop_SectionTeaContent = newValue;
  },

  // SignInArea.tsx (Page)
  SignIn_didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.SignIn_DidMount = newValue;
  },
  SignIn_button: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.SignIn_Button = newValue;
  },
  SignIn_isSignedIn: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.SignIn_IsSignedIn = newValue;
  },
  // SignInModal.tsx
  SignIn_errorMessage: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.SignIn_ErrorMessage = newValue;
  },

  // CreateAccountArea.tsx (Page)
  CreateAccount_didMount: function (
    state: StateVariables,
    action: ActionBoolean
  ) {
    const newValue = action.payload;
    state.CreateAccount_DidMount = newValue;
  },
  CreateAccount_button: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.CreateAccount_Button = newValue;
  },
  // CreateAccountModal.tsx
  CreateAccount_response: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.CreateAccount_Response = newValue;
  },

  // Server.tsx (Page)
  Server_didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.Server_DidMount = newValue;
  },
  Server_response: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Server_Response = newValue;
  },

  // Account.tsx (Page)
  Account_didMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.Account_DidMount = newValue;
  },
  Account_readResponse: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Account_ReadResponse = newValue;
  },
  Account_updateResponse: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.Account_UpdateResponse = newValue;
  },
  Account_deleteResponse: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.Account_DeleteResponse = newValue;
  },

  // Quote.tsx (Component)
  Quote_quote: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Quote_Quote = newValue;
  },
  Quote_author: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Quote_Author = newValue;
  },
  Quote_url: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Quote_Url = newValue;
  },
  Quote_tags: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.Quote_Tags = newValue;
  },
};

type ActionBoolean = {
  payload: boolean;
  type: string;
};

type ActionNumber = {
  payload: number;
  type: string;
};
type ActionString = {
  payload: string;
  type: string;
};

type Action = {
  payload: any;
  type: string;
};
