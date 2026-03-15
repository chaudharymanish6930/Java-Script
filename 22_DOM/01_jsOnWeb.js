document.getElementById("title")
<h1 id=​"title">​Hello, DOM!​</h1>​
document.getElementById('title').id
'title'
document.getElementById('title').class
undefined
document.getElementById("title").className

document.getElementById("title").className;
'h1'
// full explaination
document.getElementById("title")
<h1 id=​"title" class=​"h1">​Hello, DOM!​</h1>​
document.getElementById("Title")
null
document.getElementById("title").getAttribute("id");
'title'
document.getElementById("title").getAttribute("class")
'h1'

// now setAttribute
document.getElementById('title').setAttribute('class', "new_Class");
undefined
document.getElementById('title').setAttribute('class', 'new_Class h1');
undefined
document.getElementById('title').setAttribute('class', 'new_Class h1 old_Class');
undefined
document.getElementById('title').setAttribute('class');
VM2684:1 Uncaught TypeError: Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only 1 present.
    at <anonymous>:1:34
(anonymous) @ VM2684:1
document.getElementById('title').getAttribute('class');
'new_Class h1 old_Class'

// style in the js
const title=document.getElementById('title');
undefined
title
<h1 id=​"title" class=​"new_Class h1 old_Class">​Hello, DOM!​</h1>​
title.sytle.backgroundColor='Brown'
VM3042:1 Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
    at <anonymous>:1:28
(anonymous) @ VM3042:1
title.style.backgroundColor='yellow'
'yellow'
title.style.borderRadius='20px';
'20px'
title.style.padding='10px';
'10px'


// content in the html tags
title
<h1 id=​"title" class=​"h1">​Hello, DOM!​</h1>​
title.textContent
'Hello, DOM!'
title.innerHTML
'Hello, DOM!'
title.innerText
'Hello, DOM!'
// diffence between textContent and innerText
// textContent will give you the content of the element as it is in the html
// , including hidden elements, while innerText will give you the content of the element as it is rendered on the page,
//  excluding hidden elements and taking into account CSS styles.
title.textContent;
'Hello, DOM! highlight'
title.innerText
'Hello, DOM!'
title.innerHTML
'Hello, DOM! <span id="highlight" style="display:none">highlight</span>'
highlight.innerContent;
undefined

// now document.getElementByClassName
document.getElementsByClassName("heading")
HTMLCollection [][[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()length: 1name: "namedItem"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object
document.getElementByClassName("bg-black")
VM4265:1 Uncaught TypeError: document.getElementByClassName is not a function
    at <anonymous>:1:10
(anonymous) @ VM4265:1
document.getElementByClassName('h1')
VM4451:1 Uncaught TypeError: document.getElementByClassName is not a function
    at <anonymous>:1:10
(anonymous) @ VM4451:1
document.getElementsByClassName('h1')
HTMLCollection [h1#title.h1, title: h1#title.h1]0: h1#title.h1title: h1#title.h1length: 1[[Prototype]]: HTMLCollection
document.getElementsByClassName('bg-black')
HTMLCollection [body.bg-black]

// now here QuerySelector
document.querySelector("h1")
<h1 id=​"title" class=​"h1">​"Hello, DOM! "<span id=​"highlight" style=​"display:​none">​highlight​</span>​</h1>​
document.querySelectorAll("h1")
NodeList(3) [h1#title.h1, h1, h1]0: h1#title.h1attributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}baseURI: "http://127.0.0.1:5500/22_DOM/one.html"childElementCount: 1childNodes: NodeList(2) [text, span#highlight]children: HTMLCollection [span#highlight, highlight: span#highlight]classList: DOMTokenList ['h1', value: 'h1']className: "h1"clientHeight: 38clientWidth: 194contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}firstChild: textfirstElementChild: span#highlightid: "title"innerHTML: "Hello, DOM! <span id=\"highlight\" style=\"display:none\">highlight</span>"innerText: "Hello, DOM!"isConnected: truelastChild: span#highlightlastElementChild: span#highlightlocalName: "h1"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: h2#subtitle.h2nextSibling: textnodeName: "H1"nodeType: 1offsetHeight: 38offsetLeft: 8offsetParent: body.bg-blackoffsetTop: 21offsetWidth: 194outerHTML: "<h1 id=\"title\" class=\"h1\">Hello, DOM! <span id=\"highlight\" style=\"display:none\">highlight</span></h1>"outerText: "Hello, DOM!"ownerDocument: documentparentElement: body.bg-blackparentNode: body.bg-blackpart: DOMTokenList [value: '']previousSibling: textscrollHeight: 38scrollWidth: 194spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "H1"textContent: "Hello, DOM! highlight"translate: truewritingSuggestions: "true"[[Prototype]]: HTMLHeadingElement1: h1attributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}baseURI: "http://127.0.0.1:5500/22_DOM/one.html"childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']clientHeight: 75clientWidth: 194contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}firstChild: textinnerHTML: "I am Manish Choudhary "innerText: "I am Manish Choudhary"isConnected: truelastChild: textlocalName: "h1"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: h2nextSibling: textnodeName: "H1"nodeType: 1offsetHeight: 75offsetLeft: 8offsetParent: body.bg-blackoffsetTop: 131offsetWidth: 194outerHTML: "<h1>I am Manish Choudhary </h1>"outerText: "I am Manish Choudhary"ownerDocument: documentparentElement: body.bg-blackparentNode: body.bg-blackpart: DOMTokenList [value: '']previousElementSibling: h2#subtitle.h2previousSibling: textscrollHeight: 75scrollWidth: 194spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "H1"textContent: "I am Manish Choudhary "translate: truewritingSuggestions: "true"[[Prototype]]: HTMLHeadingElement2: h1attributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}baseURI: "http://127.0.0.1:5500/22_DOM/one.html"childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']clientHeight: 75clientWidth: 194contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}firstChild: textinnerHTML: "jai Shree Krishna"innerText: "jai Shree Krishna"isConnected: truelastChild: textlocalName: "h1"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: h2nextSibling: textnodeName: "H1"nodeType: 1offsetHeight: 75offsetLeft: 8offsetParent: body.bg-blackoffsetTop: 278offsetWidth: 194outerHTML: "<h1>jai Shree Krishna</h1>"outerText: "jai Shree Krishna"ownerDocument: documentparentElement: body.bg-blackparentNode: body.bg-blackpart: DOMTokenList [value: '']previousElementSibling: h2previousSibling: textscrollHeight: 75scrollWidth: 194spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "H1"textContent: "jai Shree Krishna"translate: truewritingSuggestions: "true"[[Prototype]]: HTMLHeadingElementlength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
document.querySelectorAll("h2")
NodeList(5) [h2#subtitle.h2, h2, h2, h2, h2]0: h2#subtitle.h2attributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}baseURI: "http://127.0.0.1:5500/22_DOM/one.html"childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList ['h2', value: 'h2']className: "h2"clientHeight: 29clientWidth: 194contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}firstChild: textid: "subtitle"innerHTML: "This is a subtitle"innerText: "This is a subtitle"isConnected: truelastChild: textbaseURI: "http://127.0.0.1:5500/22_DOM/one.html"childNodes: NodeList []data: "This is a subtitle"isConnected: truelength: 18nodeName: "#text"nodeType: 3nodeValue: "This is a subtitle"ownerDocument: documentparentElement: h2#subtitle.h2parentNode: h2#subtitle.h2textContent: "This is a subtitle"wholeText: "This is a subtitle"[[Prototype]]: TextlocalName: "h2"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: h1nextSibling: textnodeName: "H2"nodeType: 1offsetHeight: 29offsetLeft: 8offsetParent: body.bg-blackoffsetTop: 80offsetWidth: 194outerHTML: "<h2 id=\"subtitle\" class=\"h2\">This is a subtitle</h2>"outerText: "This is a subtitle"ownerDocument: documentparentElement: body.bg-blackparentNode: body.bg-blackpart: DOMTokenList [value: '']previousElementSibling: h1#title.h1previousSibling: textscrollHeight: 29scrollWidth: 194spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "H2"textContent: "This is a subtitle"translate: truewritingSuggestions: "true"[[Prototype]]: HTMLHeadingElement1: h2attributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}baseURI: "http://127.0.0.1:5500/22_DOM/one.html"childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']clientHeight: 29clientWidth: 194contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}firstChild: textinnerHTML: "I love my India"innerText: "I love my India"isConnected: truelastChild: textlocalName: "h2"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: h1nextSibling: textnodeName: "H2"nodeType: 1offsetHeight: 29offsetLeft: 8offsetParent: body.bg-blackoffsetTop: 227offsetWidth: 194outerHTML: "<h2>I love my India</h2>"outerText: "I love my India"ownerDocument: documentparentElement: body.bg-blackparentNode: body.bg-blackpart: DOMTokenList [value: '']previousElementSibling: h1previousSibling: textscrollHeight: 29scrollWidth: 194spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "H2"textContent: "I love my India"translate: truewritingSuggestions: "true"[[Prototype]]: HTMLHeadingElement2: h2attributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}baseURI: "http://127.0.0.1:5500/22_DOM/one.html"childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']clientHeight: 58clientWidth: 194contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}firstChild: textinnerHTML: "Banke Bihari lal ki jai..."innerText: "Banke Bihari lal ki jai..."isConnected: truelastChild: textlocalName: "h2"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: h2nextSibling: textnodeName: "H2"nodeType: 1offsetHeight: 58offsetLeft: 8offsetParent: body.bg-blackoffsetTop: 374offsetWidth: 194outerHTML: "<h2>Banke Bihari lal ki jai...</h2>"outerText: "Banke Bihari lal ki jai..."ownerDocument: documentparentElement: body.bg-blackparentNode: body.bg-blackpart: DOMTokenList [value: '']previousElementSibling: h1previousSibling: textscrollHeight: 58scrollWidth: 194spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "H2"textContent: "Banke Bihari lal ki jai..."translate: truewritingSuggestions: "true"[[Prototype]]: HTMLHeadingElement3: h2attributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}baseURI: "http://127.0.0.1:5500/22_DOM/one.html"childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']clientHeight: 29clientWidth: 194contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}firstChild: textinnerHTML: "Jai Shree Ram"innerText: "Jai Shree Ram"isConnected: truelastChild: textlocalName: "h2"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: h2nextSibling: textnodeName: "H2"nodeType: 1offsetHeight: 29offsetLeft: 8offsetParent: body.bg-blackoffsetTop: 452offsetWidth: 194outerHTML: "<h2>Jai Shree Ram</h2>"outerText: "Jai Shree Ram"ownerDocument: documentparentElement: body.bg-blackparentNode: body.bg-blackpart: DOMTokenList [value: '']previousElementSibling: h2previousSibling: textscrollHeight: 29scrollWidth: 194spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "H2"textContent: "Jai Shree Ram"translate: truewritingSuggestions: "true"[[Prototype]]: HTMLHeadingElement4: h2attributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}baseURI: "http://127.0.0.1:5500/22_DOM/one.html"childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']clientHeight: 29clientWidth: 194contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}firstChild: textinnerHTML: "All Are indian"innerText: "All Are indian"isConnected: truelastChild: textlocalName: "h2"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: scriptnextSibling: textnodeName: "H2"nodeType: 1offsetHeight: 29offsetLeft: 8offsetParent: body.bg-blackoffsetTop: 500offsetWidth: 194outerHTML: "<h2>All Are indian</h2>"outerText: "All Are indian"ownerDocument: documentparentElement: body.bg-blackparentNode: body.bg-blackpart: DOMTokenList [value: '']previousElementSibling: h2previousSibling: textscrollHeight: 29scrollWidth: 194spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "H2"textContent: "All Are indian"translate: truewritingSuggestions: "true"[[Prototype]]: HTMLHeadingElementlength: 5[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
document.querySelector("h2");
<h2 id=​"subtitle" class=​"h2">​This is a subtitle​</h2>​

document.querySelector('#title')
<h1 id=​"title" class=​"h1">​"Hello, DOM! "<span id=​"highlight" style=​"display:​none">​highlight​</span>​</h1>​
document.querySelector('.h1')
<h1 id=​"title" class=​"h1">​…​</h1>​

document.querySelector('input[type="pasword"]');
null
document.querySelector('input[type="password"]');
<input type=​"password" name=​"form" id>​

// ul  and li
document.querySelector('ul')
<ul>​…​</ul>​
const myul=document.querySelector('ul');
undefined
myul.querySelector("li")
<li>​::marker​"one"</li>​
const turnGreen= myul.querySelector('li');
undefined
turnGreen.style.backgroundColor='green'
'green'
turnGreen.style.padding='10px';
'10px'
turnGreen.innerText;
'one'

// NodeList
document.querySelectorAll('li')
NodeList(4) [li, li, li, li]0: li1: li2: li3: lilength: 4[[Prototype]]: NodeList
const templiList = document.querySelectorAll('li');
undefined
templiList
NodeList(4) [li, li, li, li]0: li1: li2: li3: lilength: 4[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
const myArr=[1,2,3,4]
undefined
myArr;
(4) [1, 2, 3, 4]0: 11: 22: 33: 4length: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
templiList.style.color='green';
VM2028:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:23
(anonymous) @ VM2028:1
templiList[1].style.color='red';
'red'
templiList[1].style.color='yellow';
'yellow'
templiList[0].style.color='red';
'red'
const myh1=document.querySelectorAllL('h1');
VM2271:1 Uncaught TypeError: document.querySelectorAllL is not a function
    at <anonymous>:1:21
(anonymous) @ VM2271:1
const myh1=document.querySelectorAll('h1');
undefined
myh1
NodeList(3) [h1#title.h1, h1, h1]
myh1[0].style.color='green';
'green'
myh1[3].style.color='green';
VM2510:1 Uncaught TypeError: Cannot read properties of undefined (reading 'style')
    at <anonymous>:1:9
(anonymous) @ VM2510:1
myh1[1].style.color='green';
'green'
myh1[2].style.color='green';

'green'
templiList.forEach(function (i) {
    l.style.color="safron"})
VM2685:2 Uncaught ReferenceError: l is not defined
    at <anonymous>:2:5
    at NodeList.forEach (<anonymous>)
    at <anonymous>:1:12
(anonymous) @ VM2685:2
(anonymous) @ VM2685:1
templiList.forEach(function (i) {
    i.style.color="safron"})
undefined
templiList.forEach(function (i) {
    i.style.backgroundColor='red';
})
undefined

{/* Nodelist Converted into the array then, i can apply any method of array on the nodelist */}
document.getElementsByClassName('list-item');
HTMLCollection [][[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object
const tempClassList =document.getElementsByClassName('list-item');

undefined
tempClassList.forEach(function (li){
    console.log(li);
})
VM3045:1 Uncaught TypeError: tempClassList.forEach is not a function
    at <anonymous>:1:15
(anonymous) @ VM3045:1
tempClassList
HTMLCollection []
Array.from(tempClassList)
[]length: 0[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
const = myConvertedArray=Array.from(tempClassList)
VM3279:1 Uncaught SyntaxError: Unexpected token '='
const  myConvertedArray=Array.from(tempClassList);
undefined
myConvertedArray
    
[]
myConvertedArray.forEach(function (li) {
    li.style.color='orange';});
undefined