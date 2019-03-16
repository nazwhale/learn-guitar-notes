# Learn Guitar Notes

I've always meant to memorise all the notes on the neck of a guitar, but never got round to it. I reckon it'll be pretty useful in learning to apply music theory.

This app aims to help me (and the rest of the world) to do that.

It's also an exercise in hitting MVP fast and iterating in the smallest steps possible.

Design-wise I'm going to resist making any design decisions until I encounter problems that I wish to solve through design (rather than putting pretty colours on for the sake of it - something I've been guilty of in the past! 🙈).

## Install

`yarn start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## V1

Guessing in user's head.

![Imgur](https://i.imgur.com/8dp6Sng.png)

## V2

Guessing in the app. Emoji confirmation 🎉 / 😭

![Imgur](https://i.imgur.com/WOrRenK.png)

## V3

##### Problems

It's all too small and fiddly and cluttered!

- too hard to see fret and note to guess
- note selection buttons too fiddly to pick
- next button fiddly to click
- no need for next button when selecting a note
- lots of copy doesn't add any value and has the cost of making other elements stand out less

##### Solutions

- larger copy for string and fret value, so the more dynamic content stands out from the static labels
- larger buttons
- remove unnecessary button
- remove unnecessary copy

![Imgur](https://i.imgur.com/GPEw9ru.png)

![Imgur](https://i.imgur.com/7mVlbZT.png)

## V4

V3 felt useable! I played around on my phone for a bit and felt like I was learning 🎉

##### Problems

- jumping around of elements between selection and confirmation states states (e.g. when the notes disappear to reveal the answer and next button) is hectic for the user and harms ease of use
- location of next button always feels a bit unexpected
- "#"s are cluttering and make it harder to pick out the right notes

##### Solutions

- build confirmation state into the note buttons, using colour to solve the problem
- disable the next button instead of hiding it in selection state
- reduce size of "#"s

## Idea Backlog

- feedback button
- running score
- results page
- welcome page
- add timing between guesses
- save personal progress (login + accounts)
- graph progress over time
