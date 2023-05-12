# LiteTTS

> Code Example 1

```
const liteTTS = require('lite-tts').LiteTTS;
const s = new liteTTS('win32');
 
s.speak('Hello World!');
//s.stop();
```

> Code Example 2

```
const liteTTS = require('lite-tts').LiteTTS;
const s = new liteTTS('win32');
 
s.speak('Hello World!', 'Microsoft Zira Desktop', 1.0);
//s.stop();
```

> Code Example 3
```
const liteTTS = require('lite-tts').LiteTTS;
const s = new liteTTS('win32');

s.export("Hello World! It's me Lite TTS", 'Microsoft Zira Desktop', 0.9, 'halloworld.wav', (err) => {
    if (err) {
      return console.error(err)
    }
    console.log('Text has been saved to halloworld.wav.')
});
```
