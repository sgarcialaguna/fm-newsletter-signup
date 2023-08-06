# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/sgarcialaguna/fm-newsletter-signup)
- Live Site URL: [Add live site URL here](https://sgarcialaguna.github.io/fm-newsletter-signup/)

## My process

### Built with

- UnoCSS (https://unocss.dev/)
- Vanilla HTML and JS

### What I learned

I didn't know about the `<picture>` element as a way to supply multiple images according to media queries.

I also used the `<dialog>` element for the first time. That was a breeze to use.

I actually spent most of the time on getting the form validation just right. Usually I would just use a library for this, but for these small challenges I don't want to use a lot of JS.

The way I want it to behave:

- Do not show an error on first render
- Do not show errors before the first blur event. We don't want to yell at the user while they are still typing.
- After that, show the error until the input becomes valid

For this, I used a tiny bit of JavaScript to set a dirty flag on the form after the first blur event. I tried to do it without any JS, and [this](https://www.bram.us/2021/01/28/form-validation-you-want-notfocusinvalid-not-invalid/) was pretty close, but it failed the third requirement. Also the selectors were somewhat unwieldy.

### Useful resources

- [You want :not(:focus):invalid, not :invalid by Bramus](https://www.bram.us/2021/01/28/form-validation-you-want-notfocusinvalid-not-invalid/) - A CSS-only way of styling invalid input fields without being overly annoying. Ultimately, I went with another approach.
