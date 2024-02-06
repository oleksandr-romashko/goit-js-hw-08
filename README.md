# goit-js-hw-08

Homework for `NPM`, `Modular JavaScript` and `Local Storage` topics.

The project uses [Lodash](https://lodash.com/) and [SimpleLightbox](https://simplelightbox.com/) libraries.

## Vanilla App Template

This project was created using the `vanilla-app-template` as a template. Learn more about its usage [in Ukrainian](./README.vanilla-app-template.uk.md) / [in Romanian](./README.vanilla-app-template.ro.md) README file or refer to the documentation [vanilla-app-template repository on GitHub](https://github.com/goitacademy/vanilla-app-template).

This project was created on the basis of the `Vite` development environment tool. To familiarize yourself with the tool and configure additional features [refer to the documentation at vitejs.dev](https://vitejs.dev/).

## Quickstart

This project is deployed to GitHub Pages.

For the local build, follow the instruction below:

1. Copy repo files.
1. At the command line use `npm install` command inside project root folder to install all necessary project dependancies.
1. At the command line use `npm run dev` to start local web server.
1. Open [http://localhost:5173/](http://localhost:5173/) (by default) page in your browser.
1. To stop web server use `Ctrl + C` (for Windows) or 
`Control + C` (for MacOS і Linux) command at the command line . 

### Acceptance criteria

* Repository name `goit-js-hw-08`.
* Deployed to `GitHub Pages`.
* During live page visit, there are no errors or warnings generated in the console.
* Project built with [vanilla-app-template](https://github.com/goitacademy/vanilla-app-template).
* Code formatted with `Prettier`.

### Startup files

[Download the startup files](./assets/src.zip) with the layout, styles, and attached script files for each task. Copy them to your project, completely overwriting the `src` folder in [vanilla-app-template](https://github.com/goitacademy/vanilla-app-template).

### Task 1 - `SimpleLightbox` library

Do this task in the `01-gallery.html` and `01-gallery.js` files. Break it down into several subtasks:

1. Add the [SimpleLightbox](https://simplelightbox.com/) library as a project dependency using `npm` (the CDN link from [your past work](https://github.com/oleksandr-romashko/goit-js-finalproject) is no longer needed).
1. Use your JavaScript code from [the previous homework](https://github.com/oleksandr-romashko/goit-js-finalproject), but refactor it given that the library was installed via `npm` (import/export syntax).

In order to add the CSS code of the library to the project, you need to add one more import, aside from the one described in the documentation.

```javascript
// Described in documentation;
import SimpleLightbox from "simplelightbox";

// Additional styles import
import "simplelightbox/dist/simple-lightbox.min.css";
```

### Task 2 - video player

In HTML, there is `<iframe>` with video for Vimeo player. Write a script that will save the current video playback time to local storage and, upon page reload, continue to play the video from that time.

```html
<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>
```

Do this task in the `02-video.html` and `02-video.js` files. Break it down into several subtasks:

1. Check out the [documentation](https://github.com/vimeo/player.js/#vimeo-player-api) of the Vimeo player library.
1. Add the library as a project dependency via `npm`.
1. Initialize the player in the script file as described in the [pre-existing player](https://github.com/vimeo/player.js/#pre-existing-player) section, but note that you have added the player as an `npm` package, not via `CDN`.
1. Read the documentation of the [on()](https://github.com/vimeo/player.js/#onevent-string-callback-function-void) method and start tracking the [timeupdate](https://github.com/vimeo/player.js/#events) event - playback time update.
1. Save playback time to local storage. Let the key for the storage be the `"videoplayer-current-time"` string.
1. When reloading the page, use the [setCurrentTime()](https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror) method to resume playback from the saved position.
1. Add the [lodash.throttle](https://www.npmjs.com/package/lodash.throttle) library to the project and make sure that the playback time is updated in the storage once a second or less frequent.

### Task 3 - feedback form

In HTML, there is form markup. Write a script that will save field values to local storage when the user types something.

```html
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
```

Do this task in the `03-feedback.html` and `03-feedback.js` files. Break it down into several subtasks:

1. Track the `input` event on the form, and each time write to local storage an object with the `email` and `message` fields, in which you save the current values of the form fields. Let the key for the storage be the `"feedback-form-state"` string.
1. When loading the page, check the state of the storage, and if it stores some data, use it to fill in the form fields. Otherwise, the fields must be empty.
1. When submitting the form, clear the storage and form fields, and also display the object with the `email` and `message` fields and their current values in the console.
1. Make sure that the storage is updated no more than once every 500 milliseconds. To do this, add to the project and use the [lodash.throttle](https://www.npmjs.com/package/lodash.throttle) library.