var gettxtarea = document.getElementById("textarea");

function boldfun(){
    gettxtarea.style.fontWeight = "bold";
}

function italicfun(){
	gettxtarea.style.fontStyle = "italic";
}

function underlinefun(){
	gettxtarea.style.textDecoration = "underline";
}

function laglgfun(){
	gettxtarea.style.textAlign= "left";
}

function calgfun(){
	gettxtarea.style.textAlign = "center";
}

function ralgfun(){
	gettxtarea.style.textAlign = "right";
}

function upcasefun(){
	gettxtarea.style.textTransform = "uppercase";
}

function lwcase(){
	gettxtarea.style.textTransform = "lowercase";
}

function capcasefun(){
	gettxtarea.style.textTransform = "capitalize";
}

function clearfun(){
	gettxtarea.style.fontWeight = "normal";
	gettxtarea.style.fontStyle = "normal";
	gettxtarea.style.textDecoration = "none"
	gettxtarea.style.textAlign = "left";
	gettxtarea.value = "";
}