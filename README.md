# Strum

[![Netlify Status](https://api.netlify.com/api/v1/badges/cecf8501-8458-495e-a9d6-75211e041e71/deploy-status)](https://app.netlify.com/sites/fervent-leakey-947339/deploys)

<https://strum.bsteph.com>

Based on strumming exercise seen in this [video by JustinGuitar](https://www.youtube.com/watch?v=CjM5fyXoV8w)

## Installation

1. `nvm use`
2. `npm install`
3. `npm start`
4. <http://localhost:8081>

## Commands

### Build

Build production version of the site.

1. `npm run build`
2. output goes to `./dist`

### Serve

Serve the `./dist` directory.

1. npm run build
2. npm run serve
3. <http://localhost:8080>

### Clean build folder

Delete the `./dist` folder.

1. npm run clean

## Accessibility

- [Lighthouse](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fstrum.bsteph.com)
- [Web accessibility evaluation tool](https://wave.webaim.org/report#/https://strum.bsteph.com)

## References

- <https://www.11ty.dev>
- <https://tailwindcss.com>

## Hosting Details

- CI & Hosting on Netlify.
- GoSquared analytics added as post processing step in Netlify.

## Roadmap

- [x] tailwind setup
- [x] prettier setup
- [x] deploy to the world
- [x] some sort of templating
- [x] allow toggle of strum pattern
- [x] add query params for loading specific patterns
- [x] shuffle button for random strum patterns
- [x] add screen reader friendly labels to buttons
- [x] pick out better colorblind friendly colors/contrasts
- [x] 🐞 anchors broken
- [x] 🐞 active state is stuck on touch devices
- [x] add apple touch icon
- [x] add favicon
- [ ] add a share button
- [ ] make pwa
- [ ] dark/light modes
- [ ] add some sort of buy me a beer button
- [ ] make repo public
- [ ] add multiple time signatures
