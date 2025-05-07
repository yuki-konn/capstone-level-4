import { StateVariables } from "./stateVariables";

export const stateSetters = {
  // Global
  isSignedIn: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.isSignedIn = newValue;
  },

  // Home.tsx (Page)
  homeDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.homeDidMount = newValue;
  },
  homeLinkCard1: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.homeLinkCard1 = newValue;
  },
  homeLinkCard2: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.homeLinkCard2 = newValue;
  },
  homeLinkCard3: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.homeLinkCard3 = newValue;
  },
  homeTriviaCard: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.homeTriviaCard = newValue;
  },
  // HomeCarousel.tsx (Component)
  homeCarouselDidMount: function (
    state: StateVariables,
    action: ActionBoolean
  ) {
    const newValue = action.payload;
    state.homeCarouselDidMount = newValue;
  },

  // About.tsx (Page)
  aboutDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.aboutDidMount = newValue;
  },

  // Contact Form in Contact.tsx (Page)
  contactDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.contactDidMount = newValue;
  },
  contactFormData1: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.contactFormData1 = newValue;
  },
  contactFormName: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.contactFormName = newValue;
  },
  contactFormEmail: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.contactFormEmail = newValue;
  },
  contactCommentArea: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.contactCommentArea = newValue;
  },
  contactRadioArea: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.contactRadioArea = newValue;
  },
  contactResponse: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.contactResponse = newValue;
  },
  // Phone Form in Contact.tsx
  // contactFormData2: function (state: StateVariables, action: ActionString) {
  //   const newValue = action.payload;
  //   state.contactFormData2 = newValue;
  // },

  // Shop.tsx (Page)
  shopDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.shopDidMount = newValue;
  },
  shopSectionTeaContent: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.shopSectionTeaContent = newValue;
  },
  shopBlackTeaCard: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.shopBlackTeaCard = newValue;
  },
  shopGreenTeaCard: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.shopGreenTeaCard = newValue;
  },
  shopWhiteTeaCard: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.shopWhiteTeaCard = newValue;
  },
  shopOolongTeaCard: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.shopOolongTeaCard = newValue;
  },
  shopPuerhTeaCard: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.shopPuerhTeaCard = newValue;
  },
  shopPurpleTeaCard: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.shopPurpleTeaCard = newValue;
  },
  shopMatchaTeaCard: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.shopMatchaTeaCard = newValue;
  },
  shopMateTeaCard: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.shopMateTeaCard = newValue;
  },
  shopHerbalTeaCard: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.shopHerbalTeaCard = newValue;
  },
  shopRooibosTeaCard: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.shopRooibosTeaCard = newValue;
  },

  // SignInArea.tsx (Component)
  signInDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.signInDidMount = newValue;
  },
  signInButton: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.signInButton = newValue;
  },
  signInIsSignedIn: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.signInIsSignedIn = newValue;
  },
  // SignInModal.tsx
  signInErrorMessage: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.signInErrorMessage = newValue;
  },

  // CreateAccountArea.tsx (Component)
  createAccountDidMount: function (
    state: StateVariables,
    action: ActionBoolean
  ) {
    const newValue = action.payload;
    state.createAccountDidMount = newValue;
  },
  createAccountButton: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.createAccountButton = newValue;
  },
  // CreateAccountModal.tsx (Component)
  createAccountResponse: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.createAccountResponse = newValue;
  },

  // Server.tsx (Page)
  serverDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.serverDidMount = newValue;
  },
  serverResponse: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.serverResponse = newValue;
  },

  // Account.tsx (Page)
  accountDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.accountDidMount = newValue;
  },
  accountReadResponse: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.accountReadResponse = newValue;
  },
  accountUpdateResponse: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.accountUpdateResponse = newValue;
  },
  accountDeleteResponse: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.accountDeleteResponse = newValue;
  },
  accountResponseArray: function (state: StateVariables, action: ActionArray) {
    const newValue = action.payload;
    state.accountResponseArray = newValue;
  },
  accountResponseString: function (
    state: StateVariables,
    action: ActionString
  ) {
    const newValue = action.payload;
    state.accountResponseString = newValue;
  },

  // Quote.tsx (Component)
  quoteDidMount: function (state: StateVariables, action: ActionBoolean) {
    const newValue = action.payload;
    state.quoteDidMount = newValue;
  },
  quoteResponse: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.quoteResponse = newValue;
  },
  quoteQuote: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.quoteQuote = newValue;
  },
  quoteAuthor: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.quoteAuthor = newValue;
  },
  quoteUrl: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.quoteUrl = newValue;
  },
  quoteTags: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.quoteTags = newValue;
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
type ActionArray = {
  payload: Array<string>;
  type: string;
};
