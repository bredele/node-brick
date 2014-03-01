# nodes-plugin

  [Lego](https://github.com/bredele/lego) plugin to reference your dom nodes without using any query selections.

## Installation

with [component](http://github.com/component/component):

    $ component install bredele/nodes-brick

with [nodejs](http://nodejs.org):

    $ component install nodes-brick

## Usage

First, add the plugin to your view (see [lego](https://github.com/bredele/lego) to know more about views):

```js
view.add('var', require('nodes-brick'));
```

## Basic

```html
<a var="link"></a>
```

The plugin will create a `nodes` reference that holds your dom nodes.

```js
view.nodes.link; //print the link
```

see [live example](https://github.com/bredele/nodes-brick/tree/master/example)

## License

  The MIT License (MIT)

  Copyright (c) 2014 Olivier Wietrich <olivier.wietrich@gmail.com>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.