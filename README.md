## Mayers Briggs Personality Test

Acknoweldgements/ Sources:

Source links

Test code as a basis: https://codepen.io/pulpexploder/pen/pNpdeq
Content and imagery: https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator
https://www.16personalities.com/
https://getbootstrap.com/docs/5.3/getting-started/introduction/

Myers Briggs Personality Indicator Test

A test that was developed in the Second World War, based on the personality type work of the Psychologist, Carl Jung. The test was designed to simplify his work into a basic test in order to help assign people to appropriate posts in the war.

The test is broken down into 4 sections, with a 2 option answer which will give an outcome of a dominant trait These are based on an extraversion or introversion on all 4 sections.

Extraversion (E) or Introversion (I)
Sensing (S) or Intuition (N)
Thinking (T) or Feeling (F)
Judging (J) or Perceiving (P)

For each section the responses are counted up to show which is more dominant, if the count is split, the first trait takes precedence as a more dominant personality trait.

Design:

The site designs purpose is to provide information and history, with appropriate supporting external links, giving a brief history of the test and visual understanding of what results it produces.
With also the opportunity for the user to take the test themselves and see their own personality traits.

Page Functions:

Homepage- index.html
Navbar links for test (bootstrap)
Take Test button (bootstrap with JS) This is so the standard href redirect doesn’t action before the javascript in the quiz.js file.

Test/ Quiz pages

Extraversion (E) or Introversion (I) - ei.html
Sensing (S) or Intuition (N) - sn.html
Thinking (T) or Feeling (F) - tf.html
Judging (J) or Perceiving (P) - jp.html

Bootstrap quiz form
With form-check-input classes
With input label classes
‘required ‘ for validation.

UX

Accessibility

The site will be using a learning difficulty friendly font with high contrast background vs foreground color.

Clickability

There are 40 questions in total, 10 per section. And each question will be a 2-option multiple radio button style setup.

Validation

Bootstrap 5 validation will be used to ensure each section has full answers with appropriate visual warnings.
