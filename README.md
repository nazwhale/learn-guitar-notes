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

![Imgur](https://i.imgur.com/R8OygMS.png)

![Imgur](https://i.imgur.com/I7Zc9Il.png)

## V5

So now it does the job and the interface is much cleaner. But it's feeling pretty boring (especially since I removed the emoji's 😛).

I could put them back in, but I think it's worth thinking about the problem of boringness in a bit more depth.

So I did a bit of research on simple game mechanics and came up with something that felt good:

- add a running total (to give a feeling of progression)
- reset the total for an incorrect answer (add a feeling of pride for streaks of correct answers, top scores to beat)
- include a timer which gets faster as the score gets higher (difficulty increases with mastery)
- score starts decreasing if the timer fills up (same)

I feel like that could be kinda fun. In the spirit of the project, I'll implement these features incrementally. I know nothing about game design, and might learn a bit and have to course correct along the way.

##### Problem

- it's boring!

##### Solution

- add a running points total
- reset total on incorrect guess
- emoji feedback, getting smilier as the points go up

![Imgur](https://i.imgur.com/CpAlFZU.png)

![Imgur](https://i.imgur.com/sJEk9K5.png)

## V6

This is already much better. I've caught myself swearing when getting one wrong and losing all my points, which is surely a good thing.

##### Problem

It's _kind of_ fun. But the app doesn't have my full attention - there's no urgency to the gameplay. There's nothing stopping me from taking ages figuring out an answer, and I'm assured that I'll get it right eventually, which means there's no tension.

##### Solution

- add a timer with a limit per guess

---

## Random ideas

- feedback button
- running score ✅
- image of fretboard instead of string and fret in text
- results page
- welcome page
- add timing between guesses
- save personal progress (login + accounts)
- graph progress over time
