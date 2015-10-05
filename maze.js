"use strict";
var win = true;
function overBoundary() {
  $("boundary1").onmouseover = changeColor;
}
function changeColor() {
  $("boundary1").addClassName("youlose");
}

function changeColor2() {
	var change = $$("div#maze div.boundary");
	for (var i = 0; i < change.length; i++) {
	change[i].addClassName("youlose");
	}
	win = false;
	$("status").textContent = "You lose!!!";
}

function overRemainingBoundarys() {
  var change = $$("div#maze div.boundary");
  for (var i = 0; i < change.length; i++) {
  change[i].onmouseover = changeColor2;
  } 
}

function the_end(){
	$("end").onmouseover = gameOver;			
}
function gameOver() {
	if(win) {	
	$("status").textContent = "You win!!!!";
	}
		
}

function restart(){
	$("start").onclick = newGame;	
}
function newGame() {
  var newgame = $$("div#maze div.boundary");
  for (var i = 0; i < newgame.length; i++) {
  newgame[i].removeClassName("youlose");
  }
  win = true;
  $("status").textContent = "Start Moving through the maze.";
}

function cheater(){
	$("maze").onmouseover = noCheating;
}
function noCheating(){
var x = document.getElementsById("maze");
  x.style.borderLeft.onmouseout = changeColor2;
  
  
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}
addLoadEvent(overBoundary);
addLoadEvent(overRemainingBoundarys);
addLoadEvent(the_end);
addLoadEvent(restart);
addLoadEvent(cheater);
addLoadEvent(function() {});
