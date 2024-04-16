"use strict";

function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.querySelector('.content').style.marginLeft = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.querySelector('.content').style.marginLeft = "0";
}