import { StateVariables } from "./stateVariables";

// Home.tsx (Page)
export function selectHomeDidMount(state: StateVariables): boolean {
  const { homeDidMount } = state;
  return homeDidMount;
}
export function selectHomeLinkCard1(state: StateVariables): string {
  const { homeLinkCard1 } = state;
  return homeLinkCard1;
}
export function selectHomeLinkCard2(state: StateVariables): string {
  const { homeLinkCard2 } = state;
  return homeLinkCard2;
}
export function selectHomeLinkCard3(state: StateVariables): string {
  const { homeLinkCard3 } = state;
  return homeLinkCard3;
}
export function selectHomeTriviaCard(state: StateVariables): string {
  const { homeTriviaCard } = state;
  return homeTriviaCard;
}

// HomeCarousel.tsx (Component)
export function selectHomeCarouselDidMount(state: StateVariables): boolean {
  const { homeCarouselDidMount } = state;
  return homeCarouselDidMount;
}

// About.tsx (Page)
export function selectAboutDidMount(state: StateVariables): boolean {
  const { aboutDidMount } = state;
  return aboutDidMount;
}

// // Contact Form in Contact.tsx (Page)
export function selectContactDidMount(state: StateVariables): boolean {
  const { contactDidMount } = state;
  return contactDidMount;
}
export function selectContactFormData1(state: StateVariables): string {
  const { contactFormData1 } = state;
  return contactFormData1;
}
export function selectContactFormName(state: StateVariables): string {
  const { contactFormName } = state;
  return contactFormName;
}
export function selectContactFormEmail(state: StateVariables): string {
  const { contactFormEmail } = state;
  return contactFormEmail;
}
export function selectContactCommentArea(state: StateVariables): string {
  const { contactCommentArea } = state;
  return contactCommentArea;
}
export function selectContactRadioArea(state: StateVariables): string {
  const { contactRadioArea } = state;
  return contactRadioArea;
}
export function selectContactResponse(state: StateVariables): string {
  const { contactResponse } = state;
  return contactResponse;
}
// // Phone Form in Contact.tsx
// export function selectContactFormData2(state: StateVariables) {
//   const { contactFormData2 } = state;
//   return contactFormData2;
// }

// Shop.tsx (Page)
export function selectShopDidMount(state: StateVariables): boolean {
  const { shopDidMount } = state;
  return shopDidMount;
}
export function selectShopSectionTeaContent(state: StateVariables): string {
  const { shopSectionTeaContent } = state;
  return shopSectionTeaContent;
}
export function selectShopBlackTeaCard(state: StateVariables): string {
  const { shopBlackTeaCard } = state;
  return shopBlackTeaCard;
}
export function selectShopGreenTeaCard(state: StateVariables): string {
  const { shopGreenTeaCard } = state;
  return shopGreenTeaCard;
}
export function selectShopWhiteTeaCard(state: StateVariables): string {
  const { shopWhiteTeaCard } = state;
  return shopWhiteTeaCard;
}
export function selectShopOolongTeaCard(state: StateVariables): string {
  const { shopOolongTeaCard } = state;
  return shopOolongTeaCard;
}
export function selectShopPuerhTeaCard(state: StateVariables): string {
  const { shopPuerhTeaCard } = state;
  return shopPuerhTeaCard;
}
export function selectShopPurpleTeaCard(state: StateVariables): string {
  const { shopPurpleTeaCard } = state;
  return shopPurpleTeaCard;
}
export function selectShopMatchaTeaCard(state: StateVariables): string {
  const { shopMatchaTeaCard } = state;
  return shopMatchaTeaCard;
}
export function selectShopMateTeaCard(state: StateVariables): string {
  const { shopMateTeaCard } = state;
  return shopMateTeaCard;
}
export function selectShopHerbalTeaCard(state: StateVariables): string {
  const { shopHerbalTeaCard } = state;
  return shopHerbalTeaCard;
}
export function selectShopRooibosTeaCard(state: StateVariables): string {
  const { shopRooibosTeaCard } = state;
  return shopRooibosTeaCard;
}

// SignInArea.tsx (Component)
export function selectSignInDidMount(state: StateVariables): boolean {
  const { signInDidMount } = state;
  return signInDidMount;
}
export function selectSignInButton(state: StateVariables): string {
  const { signInButton } = state;
  return signInButton;
}
export function selectSignInIsSignedIn(state: StateVariables): boolean {
  const { signInIsSignedIn } = state;
  return signInIsSignedIn;
}
// SignInModal.tsx (Component)
export function selectSignInErrorMessage(state: StateVariables): string {
  const { signInErrorMessage } = state;
  return signInErrorMessage;
}

// // CreateAccountArea.tsx (Component)
export function selectCreateAccountDidMount(state: StateVariables): boolean {
  const { createAccountDidMount } = state;
  return createAccountDidMount;
}
export function selectCreateAccountButton(state: StateVariables): string {
  const { createAccountButton } = state;
  return createAccountButton;
}
// CreateAccountModal.tsx (Component)
export function selectCreateAccountResponse(state: StateVariables): string {
  const { createAccountResponse } = state;
  return createAccountResponse;
}

// Server.tsx (Page)
export function selectServerDidMount(state: StateVariables): boolean {
  const { serverDidMount } = state;
  return serverDidMount;
}
export function selectServerResponse(state: StateVariables): string {
  const { serverResponse } = state;
  return serverResponse;
}

// Account.tsx (Page)
export function selectAccountDidMount(state: StateVariables): boolean {
  const { accountDidMount } = state;
  return accountDidMount;
}
export function selectAccountReadResponse(state: StateVariables): string {
  const { accountReadResponse } = state;
  return accountReadResponse;
}
export function selectAccountUpdateResponse(state: StateVariables): string {
  const { accountUpdateResponse } = state;
  return accountUpdateResponse;
}
export function selectAccountDeleteResponse(state: StateVariables): string {
  const { accountDeleteResponse } = state;
  return accountDeleteResponse;
}

// Quote.tsx (Component)
export function selectQuoteDidMount(state: StateVariables): boolean {
  const { quoteDidMount } = state;
  return quoteDidMount;
}
export function selectQuoteResponse(state: StateVariables): string {
  const { quoteResponse } = state;
  return quoteResponse;
}
export function selectQuoteQuote(state: StateVariables): string {
  const { quoteQuote } = state;
  return quoteQuote;
}
export function selectQuoteAuthor(state: StateVariables): string {
  const { quoteAuthor } = state;
  return quoteAuthor;
}
export function selectQuoteUrl(state: StateVariables): string {
  const { quoteUrl } = state;
  return quoteUrl;
}
export function selectQuoteTags(state: StateVariables): string {
  const { quoteTags } = state;
  return quoteTags;
}
