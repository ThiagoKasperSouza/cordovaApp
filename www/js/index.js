/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
import {Navbar} from "./components/navbar.js";
import {Home} from "./pages/home.js";
import {Dashboard} from "./pages/dashboard.js";
import {Contact} from "./pages/contact.js";

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}


// Função para restaurar o estado do botão após o carregamento da página
function getCurrentPage() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(nav => {
        nav.classList.remove('active');
    });
    const main = document.getElementById('main');
    switch(window.location.pathname) {
        case '/contact':
            main.innerHTML = Contact();
            const navContact = document.getElementById("nav_contact");
            navContact.classList.add("active");
            break;
        case '/dashboard':
            main.innerHTML = Dashboard();
            const navDash = document.getElementById("nav_dash");
            navDash.classList.add("active");
            break;
        case '/home':
            main.innerHTML = Home();
            const navHome = document.getElementById("nav_home");
            navHome.classList.add("active");
            break;
        }
}

window.onload =()=> {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = Navbar();
    getCurrentPage();
}