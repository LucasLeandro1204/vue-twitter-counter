# Vue Twitter Counter

Counter component inspired in Twitter with Vue

> You can see examples in [here](https://lucasleandro1204.github.io/vue-twitter-counter)

## Getting started

### Install
Simple install it via npm (or yarn if you want to)

``$ npm install vue-twitter-counter --save``

### Usage

It's super easy to use it =)

``` vue
  <textarea v-model="message"></textarea>
  <vue-twitter-counter :current-length="message.length"></vue-twitter-counter>
```
It's super easy to use it =)
The only thing you HAVE to do is pass the `current-length` prop.

### Props list

| Prop          | Type    | Default  | Description                                |
|:------=------:|:-------:|:--------:|:------------------------------------------:|
| warnLength    | Number  | 20       | The min rest to show the warns             |
| dangerAt      | Number  | 280      | The length to be in danger                 |
| currentLength | Number  | REQUIRED | The current length of whatever you want to |
| underlay      | String  | #ccd6dd  | Underlay counter color                     |
| safe          | String  | #1da1f2  | Safe color                                 |
| warn          | String  | #ffad1f  | Warn color                                 |
| danger        | String  | #e0245e  | Danger color                               |
| animate       | Boolean | false    | Animate the progress circle                |
| speed         | Number  | 150      | The animation speed in ms                  |

_Color props are required to be HEX with hash prefix, they are validate =)_

## Development

If you want to help this project, first of all clone it

``$ git clone git@github.com:LucasLeandro1204/vue-twitter-counter.git``

To run for development run

``$ npm run dev``

This will host the application at localhost:8080

To build for production run

``$ npm run build``

The above command bundle the app and also features minification to help reduce file size

## License

MIT