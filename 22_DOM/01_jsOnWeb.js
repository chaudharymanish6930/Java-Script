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