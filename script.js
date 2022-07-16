// Create a "close" button and append it to each list item
// Eg. <span class="close">x</span>

var itemLists = document.getElementsByTagName("li");
var i;
for (i = 0; i < itemLists.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7"); //Hex MULTIPLICATION SIGN
  span.className = "close";
  span.appendChild(txt);
  itemLists[i].appendChild(span);
}

// Click on a close button to hide the current list item
// Eg. <li style="display:none"> Breakfast <span class="close">x</span> </li>
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    // var parent_of_close = this.parentElement;
    // parent_of_close.style.display = "none";
    this.parentElement.style.display="none";
  }
}

// Add a "checked" symbol when clicking on a list item
//
var list = document.querySelector('ul'); // select the first ul
list.addEventListener('click', function(ev) {    //addEventListener(event_name, function_call, boolean_value(Event Bubbling or Event Capturing) ) //https://www.w3schools.com/js/js_htmldom_eventlistener.asp
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');  //li will change/toggle to class=checked
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please write a task...!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}