export const stateVariables = {
  // Global
  isSignedIn: false,

  // Home.tsx (Page)
  homeDidMount: false,
  homeLinkCard1: "",
  homeLinkCard2: "",
  homeLinkCard3: "",
  homeTriviaCard: "",
  // HomeCarousel.tsx (Component)
  homeCarouselDidMount: false,

  // About.tsx (Page)
  aboutDidMount: false,

  // Contact Form in Contact.tsx (Page)
  contactDidMount: false,
  contactFormData1: "",
  contactFormName: "",
  contactFormEmail: "",
  contactCommentArea: "",
  contactRadioArea: "",
  contactResponse: "",
  // contactResponse: "<b style={{ color: 'gold' }}>Processing contact form...</b>",
  // Phone Form in Contact.tsx
  // contactFormData2: "",

  // Shop.tsx (Page)
  shopDidMount: false,
  shopSectionTeaContent: "",
  shopBlackTeaCard: "",
  shopGreenTeaCard: "",
  shopWhiteTeaCard: "",
  shopOolongTeaCard: "",
  shopPuerhTeaCard: "",
  shopPurpleTeaCard: "",
  shopMatchaTeaCard: "",
  shopMateTeaCard: "",
  shopHerbalTeaCard: "",
  shopRooibosTeaCard: "",

  // SignInArea.tsx (Page)
  signInDidMount: false,
  signInButton: "",
  signInIsSignedIn: false,
  // SignInModal.tsx
  signInErrorMessage: "",

  // CreateAccountArea.tsx (Page)
  createAccountDidMount: false,
  createAccountButton: "",
  // CreateAccountModal.tsx
  createAccountResponse: "",

  // Server.tsx (Page)
  serverDidMount: false,
  serverResponse: "",

  // Account.tsx (Page)
  accountDidMount: false,
  accountReadResponse: "",
  accountUpdateResponse: "",
  accountDeleteResponse: "",
  accountResponseMessage: "",

  // Quote.tsx (Component)
  quoteDidMount: false,
  quoteResponse: "",
  quoteQuote: "",
  quoteAuthor: "",
  quoteUrl: "",
  quoteTags: "",

  // AppEngine.tsx (Component)
  appEngineDidMount: false,
  appEngineServerDemo: "",
  appEngineResponse: {},
};

export type StateVariables = typeof stateVariables;
