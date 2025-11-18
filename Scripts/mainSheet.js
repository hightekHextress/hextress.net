"use strict";

// Nav Bar HTML 
const header = `
    <div style="width: 50px; height:auto; margin: 0.5%;"><img class='pfp'src="../Media/Space_Aspect.png"></div>
    <ul class="navBar" id="navBar">
        <li><a href="./main.html">Home</a></li>
        <li><a href="./projectPage.html">Projects</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="about.html">About</a></li>
    </ul>
`
let headerElement = document.getElementById("header");
headerElement.innerHTML = header;