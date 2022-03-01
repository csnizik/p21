# P21 Hompage slider work

The slider is using CSS animations, which are in a new file, `css/index.css`. 

## CSS Animations
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations) has very thorough documentation on using CSS animations, including a step-by-step tutorial. If you're unfamiliar with how they work, go here first.

### Named animations
There are four different animations that run concurrently and that are set to repeat infinitely while the page is active. For each of the animations, they are kept in sync by setting the first slide's animations to start with no delay; then setting a delay of +8 seconds on the animations for each of the succeeding slides' animations. Since there are 5 slides, the total length of time it takes for each named animation to run is 40 seconds. With the 8*n second delay on slides 2 through 5, they run in sync. (For example, as slide #1 hits the "slide out" action on its timeline, slide #2 is hitting the "slide in" action, etc.)
1. **The slide images**: `@keyframes autoplay` & `@keyframes autoplay-first` (index.css:73 - 112): These work together to rotate the main slide images. `autoplay-first` is assigned to the first slide; it has to be treated differently since it needs to load in-place when the page is loaded. Lines 174 - 193 are where `autoplay-first` and `autoplay` are assigned to each of the five slides. _This work is complete and shouldn't need anything additional._
2. **The slide text**: `@keyframes showtext` (index.css:114 - 133): This animation fades in the heading text and link on each slide. _This work is complete and shouldn't need anything additional._
3. **The slide numbers**: `@keyframes currentslidenum` (index.css:135 - 154): Gradually increases the opacity of the current slide number from 20% to 100% while its parent slide is active, then immediately returns the opacity to 20% when its parent slide begins to slide out. _This work is complete and shouldn't need anything additional._
4. **The progress bars**: `@keyframes currentprogbar` (index.css:156 - 172): When a slide becomes the current slide, the width of the progress bar is 0%. It uses linear animation (steady, no easing) to increase from 0% to 100% width over the 8 seconds that its parent slide is active, then immediately returns to 0% width when its parent slide begins to slide out. _This work is complete and shouldn't need anything additional._

## Remaining work
1. **Mobile screens**: On screens that are < 768 pixels wide, the slide number needs to be replaced with a dot. All five dots remain at 100% opacity for their entire lifespan. The dot for the current slide gets a white rounded border (circle) around it. This can be accomplished by:
    1. creating a `@media screen and (max-width: 767px)` style for `.pagination .pagenum .progressbar` with `display: none;` to hide the progress bar.
    2. replacing the page number with a dot on breakpoints < 767px. I added an svg file that can be used for this: `./images/pagenum-dot.svg`
    3. creating a `@media screen and (max-width: 767px)` version of `@keyframes currentslidenum` that uses the same timeline percentages, but instead of changing the opacity from 20% to 100% and back to 20%, it adds a white border that uses border-radius to be rendered as a circle around the dot when the current slide number is the active one, and then hides the border for the remainder of the timeline.
2. **Clickable slide numbers**: using JavaScript, attach a click handler to each slide number. The script that gets triggered on the click can either: 
    1. manipulate the DOM to reorder the slide divss and the pagination divs, putting the requested slide/pagination div as #1 (with the rest becoming #2, #3, etc as needed) and re-starting the timeline using that order, or
    2. manipulate the timeline, jumping it forward or backward to the point where the requested slide is about to slide in.

The clickable slide numbers would probably be best implemented using the DOM manipulation / reordering method. That way the script doesn't have to calculate the timelines' current positions and then adjust them, it just has to alter the DOM to re-render the slides and pagination divs in a new order.