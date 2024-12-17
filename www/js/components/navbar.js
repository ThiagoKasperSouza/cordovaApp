

function redirect(button, path) {
    // Atualiza o atributo aria-selected do botão clicado
    const otherButtons = document.querySelectorAll('.nav-link');
    otherButtons.forEach((btn) => {
        if (btn !== button) {
            btn.setAttribute('aria-selected', 'false');
            btn.classList.remove('active'); // Remove a classe active dos outros botões
        }
    });

    // Armazena o estado do botão selecionado no localStorage
    localStorage.setItem('selectedButton', button.id); // Supondo que cada botão tenha um ID único

    // Redireciona para o novo caminho
    window.location.pathname = path;
}


// function NavItem(img,nome,path) {
//     return `<li class="nav-item" role="presentation">
//           <button class="nav-link rounded-5" onclick="redirect(this, path)" style="padding:0"  id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabindex="-1">
//             ${img}
//             <p style="padding: 0 1em">${nome}</p>
//           </button>
//         </li>`;
// }


export function Navbar() {
    return `<nav class="nav nav-pills nav-fill gap-2 p-1 small bg-dark shadow-sm fixed-bottom" id="pillNav2" role="tablist" style="--bs-nav-link-color: rgba(255, 255, 255, .75); --bs-nav-link-hover-color: #fff; --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
            <a id="nav_home" class="nav-link rounded-5" href="/home" id="home-tab">Home</a>
            <a id="nav_dash" class="nav-link rounded-5" href="/dashboard" id="dash-tab" >Dashboard</a>
            <a id="nav_contact" class="nav-link rounded-5" href="/contact" id="contact-tab" >Contact</a>
            </nav>
        `;
}
/*
       
<li class="nav-item" role="presentation">
<button class="nav-link rounded-5" onclick="redirect(this, '/dashboard')" style="padding:0"  id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabindex="-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
    <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"/>
  </svg>
  <p style="padding: 0 1em">Dashboard</p>
  
</button>
</li>

<li class="nav-item" role="presentation">

          <a class="nav-link rounded-5"  href="/home" style="padding:0" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
            </svg>
            <p style="padding: 0 1em">Home</p>
          </a>
        </li>


${NavItem(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
    <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"/>
  </svg>`, 'Dashboard', '/dashboard')}
     
        <li class="nav-item" role="presentation">
          <button class="nav-link rounded-5"  onclick="redirect(this, '/contact')" style="padding:0" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabindex="-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
            </svg>
            <p style="padding: 0 1em">Contact</p>
          </button>
        </li>
      </nav>

*/