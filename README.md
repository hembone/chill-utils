# chill-utils
#### Super chill javascript and sass utilities

Start project<br>
`npm install`

To minify js and compile sass<br>
`gulp`

---

`CHILL.cookie.set('cookieName', 'cookieValue', 7);`<br>
`CHILL.cookie.get('cookieName');`<br>
`CHILL.cookie.remove('cookieName');`


`CHILL.local.set('localName', 'localValue');`<br>
`CHILL.local.get('localName');`<br>
`CHILL.local.remove('localName');`


`CHILL.popupWindow('https://www.google.com/', 'Google', 400, 400);`


`CHILL.getPosition('.selector');`


`CHILL.windowWidth();`<br>
`CHILL.windowHeight();`


`CHILL.hasUrlSegment('segment-name');`


`CHILL.urlParams('name');`<br>
`CHILL.urlParams();`


`CHILL.resize.init(myOnResizeFunction);`


`CHILL.matchHeight('.fromSelector', '#toSelector');`


`CHILL.evenHeight('.elementClass');`


`CHILL.copyToClipboard('.selector');`


`CHILL.isVisible('.selector');`
