# DESCRIPTION

Capstone Level 4 Project

Folders with folders inside.

- assets
  - fonts
  - images
- src
  - controllers
  - modules
    - Shop: For Shop.js specific modules
  - utils
  - Views

Made with React JS, Bootstrap, and SASS.<br>
API used [OpenTDB](https://opentdb.com/api_config.php)

# NOTES

In the index.html there is one internal style.
In the Home.js there is one inline style.

# TO DO

## Top Priority:

### Contact.js

- Convert PhoneContact Form output feedback to react.
- Put handleClickAddCart in componentDidUpdate in shop.js (Output feedback)

## Medium Priority:

- Update small files to jsx.
- Create 5 more tests.
  - tests for contactForm and PhoneForm

## Low Priority:

- Make handleSubmitTrivia.js do something. Currently disabled in viewResponse.js

## Working but can improve:

### Contact.js

- Convert ContactForm promises to Async and await.
- Convert PhoneForm promises to Async and await.

### Ideas:

- Create catagories for products based on tea type for shop page. Make a Navigation with tea types and add more pictures of each type of tea.

- Create signed in specific pages. Like a profile page, settings page, forum page, etc.
