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
  contactRadioArea:
    "<b style={{ color: 'gold' }}>Processing contact form...</b>",
  // Phone Form in Contact.tsx
  // contactFormData2: "",

  // Shop.tsx (Page)
  shopDidMount: false,
  shopSectionTeaContent: "",

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

  // Quote.tsx (Component)
  quoteDidMount: false,
  quoteResponse: "",
  quoteQuote: "",
  quoteAuthor: "",
  quoteUrl: "",
  quoteTags: "",
};

export type StateVariables = typeof stateVariables;
