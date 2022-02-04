# a-detector-d 🚫🕵

You can detect nasty ad blockers via ONE-LINE 🙀;

Check here [https://carl-jin.github.io/a-detector-d/](https://carl-jin.github.io/a-detector-d/)

# Installation

```shell
$ npm install a-detector-d

# or

$ yarn add a-detector-d
```

# Usage

```javascript
import ADDetector from "a-detector-d";
(async () => {
  const isAdBlockerOn = await ADDetector();

  console.log(`AD Blockers is ${isAdBlockerOn ? "On" : "Off"}`);
})();
```
