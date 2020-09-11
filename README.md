<div align="center">
  <h1><a href="https://midiblocks.com">midiblocks</a> <a href="https://github.com/google/blockly"><img src="https://tinyurl.com/built-on-blockly"></a></h1>
  <h2>A smart, drag-and-drop, programmable MIDI mapper</h2>
  <br>
  <h3>🚧 coming soon! 🚧</h3>
</div>

<br>

![](https://midiblocks.com/wp-content/uploads/2020/09/latest-screenshot-scaled.jpg)

---



## Browser Support
This project works in all browsers that natively support the [Web MIDI API](https://webaudio.github.io/web-midi-api/). Currently, the following browsers have built-in support:

- Chrome (macOS, GNU/Linux, Android & Windows)
- Opera (macOS, GNU/Linux, Windows)
- Android WebView component (KitKat and above)
- Edge (Windows)

For more info, including on how to support Firefox, Internet Explorer, and Safari see the [WebMidi docs](https://github.com/djipco/webmidi#browser-support)

> Starting with version 77, [Chrome deprecates Web MIDI usage on insecure origins](https://www.chromestatus.com/feature/5138066234671104). This means that, going forward, the page will need to be hosted on a secure origin (e.g. https://, localhost: or file:///) and the user will need to explicitely authorize usage (no matter if sysex is used or not).



---



## Limitations

- **Generated code must be in ES5.** We use [JS Interpreter](https://github.com/NeilFraser/JS-Interpreter) to run code in a sandboxed environment which only supports ES5, but we will be providing ES6 support soon!



---



# Setup

## WordPress

- Install a vanilla [WordPress](https://wordpress.org/) site (I use [Local by Flywheel](https://localwp.com/) to do this quickly)
- [Download this theme package]() and install it into your site at `/wp-admin/themes.php`

## Menus

Create at least the following pages and/or menu items and add them to the `Main Nav Panel` menu location:

```bash
/
/studio
/factory
/library
```

- Add [Font Awesome](https://fontawesome.com/icons?d=gallery) classes (`fas fa-home`) and descriptions. You may need to enable Classes and Descriptions from the Menu Edit screen by clicking <kbd>Screen Options</kbd> and enable them to see these options



---



## API
```bash
# Override the api baseurl (useful for testing between enviroments)
?apiDomain=https://example.com
```



---



# License: [MIT](https://opensource.org/licenses/MIT)

Copyright 2020 midiblocks

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.