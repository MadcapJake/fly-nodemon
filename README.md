<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [Nodemon](http://nodemon.io/) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation][nodemon-docs] to see the available options.

### Install

```a
npm install -D fly-nodemon
```

### Example

```js
const paths = {
  scripts: ["src/**/*.js", "!src/ignore/**/*.js"]
}

export default function* () {
  yield this.watch(paths.scripts, ["restart"])
}

export function* restart () {
  yield this.nodemon({
    script: "src/app.js",
    events: {
      restart: "google-chrome http://localhost:3000/"
    }
  })
}
```

# License

[MIT][mit] © [Jake Russo][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/MadcapJake
[contributors]: https://github.com/MadcapJake/fly-nodemon/graphs/contributors
[releases]:     https://github.com/MadcapJake/fly-nodemon/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-nodemon
[npm-ver-link]: https://img.shields.io/npm/v/fly-nodemon.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-nodemon.svg?style=flat-square
[travis-link]:  https://travis-ci.org/MadcapJake/fly-nodemon
[travis-badge]: http://img.shields.io/travis/MadcapJake/fly-nodemon.svg?style=flat-square
[nodemon-docs]: https://github.com/remy/nodemon/blob/master/doc/requireable.md
