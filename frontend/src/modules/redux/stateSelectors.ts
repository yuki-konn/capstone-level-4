import { StateVariables } from "./stateVariables";

// GLOBAL
export function selectGlobalAccount(state: StateVariables) {
  const { globalAccount } = state;
  return globalAccount;
}
export function selectGlobalCredentials(state: StateVariables) {
  const { globalCredentials } = state;
  return globalCredentials;
}
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

// Cart.tsx (Component)
export function selectCartDidMount(state: StateVariables): boolean {
  const { cartDidMount } = state;
  return cartDidMount;
}
export function selectCartCountArray(state: StateVariables): Array<number> {
  const { cartCountArray } = state;
  return cartCountArray;
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
export function selectCreateAccountResponseType(state: StateVariables): string {
  const { createAccountResponseType } = state;
  return createAccountResponseType;
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
export function selectAccountReadComponent(state: StateVariables): string {
  const { accountReadComponent } = state;
  return accountReadComponent;
}
export function selectAccountUpdateResponse(state: StateVariables): string {
  const { accountUpdateResponse } = state;
  return accountUpdateResponse;
}
export function selectAccountUpdateComponent(state: StateVariables): string {
  const { accountUpdateComponent } = state;
  return accountUpdateComponent;
}
export function selectAccountDeleteResponse(state: StateVariables): string {
  const { accountDeleteResponse } = state;
  return accountDeleteResponse;
}
export function selectAccountDeleteComponent(state: StateVariables): string {
  const { accountDeleteComponent } = state;
  return accountDeleteComponent;
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

// AppEngine.tsx (Component)
export function selectAppEngineDidMount(state: StateVariables): boolean {
  const { appEngineDidMount } = state;
  return appEngineDidMount;
}
export function selectAppEngineServerDemo(state: StateVariables): string {
  const { appEngineServerDemo } = state;
  return appEngineServerDemo;
}
export function selectAppEngineResponse(state: StateVariables): Object {
  const { appEngineResponse } = state;
  return appEngineResponse;
}

// AiInterfaceArea.tsx (Component)
export function selectAiInterfaceAreaDidMount(state: StateVariables): boolean {
  const { aiInterfaceAreaDidMount } = state;
  return aiInterfaceAreaDidMount;
}
export function selectAiInterfaceAreaIsShown(state: StateVariables): boolean {
  const { aiInterfaceAreaIsShown } = state;
  return aiInterfaceAreaIsShown;
}
export function selectAiInterfaceAreaContent(state: StateVariables): string {
  const { aiInterfaceAreaContent } = state;
  return aiInterfaceAreaContent;
}
// AiInterface.tsx (Component)
export function selectAiInterfaceDidMount(state: StateVariables): boolean {
  const { aiInterfaceDidMount } = state;
  return aiInterfaceDidMount;
}
export function selectAiInterfaceContext(state: StateVariables): string {
  const { aiInterfaceContext } = state;
  return aiInterfaceContext;
}
export function selectAiInterfaceAnswer(state: StateVariables): string {
  const { aiInterfaceAnswer } = state;
  return aiInterfaceAnswer;
}
