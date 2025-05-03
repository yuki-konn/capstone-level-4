export const stateVariables = {
  // Global
  isSignedIn: false,

  // Home.tsx (Page)
  Home_didMount: false,
  Home_linkCard1: "",
  Home_linkCard2: "",
  Home_linkCard3: "",
  Home_triviaCard: "",
  // HomeCarousel.tsx (Component)
  HomeCarousel_didMount: false,

  // About.tsx (Page)
  About_didMount: false,

  // Contact Form in Contact.tsx (Page)
  Contact_didMount: false,
  Contact_formData1: "",
  Contact_formName: "",
  Contact_formEmail: "",
  Contact_commentArea: "",
  Contact_radioArea:
    "<b style={{ color: 'gold' }}>Processing contact form...</b>",
  // Phone Form in Contact.tsx
  // Contact_FormData2: "",

  // Shop.tsx (Page)
  Shop_didMount: false,
  Shop_sectionTeaContent: "",

  // SignInArea.tsx (Page)
  SignIn_didMount: false,
  SignIn_button: "",
  SignIn_isSignedIn: false,
  // SignInModal.tsx
  SignIn_errorMessage: "",

  // CreateAccountArea.tsx (Page)
  CreateAccount_didMount: false,
  CreateAccount_button: "",
  // CreateAccountModal.tsx
  CreateAccount_response: "",

  // Server.tsx (Page)
  Server_didMount: false,
  Server_response: "",

  // Account.tsx (Page)
  Account_didMount: false,
  Account_readResponse: "",
  Account_updateResponse: "",
  Account_deleteResponse: "",

  // Quote.tsx (Component)
  Quote_quote: "",
  Quote_author: "",
  Quote_url: "",
  Quote_tags: "",
};

export type StateVariables = typeof stateVariables;
