export const stateVariables = {
  // Global
  isSignedIn: false,

  // Home.tsx (Page)
  Home_DidMount: false,
  Home_LinkCard1: "",
  Home_LinkCard2: "",
  Home_LinkCard3: "",
  Home_TriviaCard: "",
  // HomeCarousel.tsx (Component)
  HomeCarousel_DidMount: false,

  // About.tsx (Page)
  About_DidMount: false,

  // Contact Form in Contact.tsx (Page)
  Contact_DidMount: false,
  Contact_FormData1: "",
  Contact_FormName: "",
  Contact_FormEmail: "",
  Contact_CommentArea: "",
  Contact_RadioArea:
    "<b style={{ color: 'gold' }}>Processing contact form...</b>",
  // Phone Form in Contact.tsx
  // Contact_FormData2: "",

  // Shop.tsx (Page)
  Shop_DidMount: false,
  Shop_SectionTeaContent: "",

  // SignInArea.tsx (Page)
  SignIn_DidMount: false,
  SignIn_Button: "",
  SignIn_IsSignedIn: false,
  // SignInModal.tsx
  SignIn_ErrorMessage: "",

  // CreateAccountArea.tsx (Page)
  CreateAccount_DidMount: false,
  CreateAccount_Button: "",
  // CreateAccountModal.tsx
  CreateAccount_Response: "",

  // Server.tsx (Page)
  Server_DidMount: false,
  Server_Response: "",

  // Account.tsx (Page)
  Account_DidMount: false,
  Account_ReadResponse: "",
  Account_UpdateResponse: "",
  Account_DeleteResponse: "",

  // Quote.tsx (Component)
  Quote_Quote: "",
  Quote_Author: "",
  Quote_Url: "",
  Quote_Tags: "",
};

export type StateVariables = typeof stateVariables;
