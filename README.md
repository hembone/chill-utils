# chill-utils
####Super chill javascript and sass utilities

Start project
`npm install`

To minify js and compile sass
`gulp`

---

`CHILL.cookie.set('cookieName', 'cookieValue', 7);`
`CHILL.cookie.get('cookieName');`
`CHILL.cookie.remove('cookieName');`


`CHILL.local.set('localName', 'localValue');`
`CHILL.local.get('localName');`
`CHILL.local.remove('localName');`


`CHILL.popupWindow('https://www.google.com/', 'Google', 400, 400);`


`CHILL.getPosition('.selector');`


`CHILL.windowWidth();`
`CHILL.windowHeight();`


`CHILL.hasUrlSegment('segment-name');`


`CHILL.urlParams('name');`
`CHILL.urlParams();`


`CHILL.resize.init(myOnResizeFunction);`


`CHILL.matchHeight('.fromSelector', '#toSelector');`


`CHILL.evenHeight('.elementClass');`


`CHILL.copyToClipboard('.selector');`


`CHILL.isVisible('.selector');`