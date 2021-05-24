



document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu');
    let menu_bar = document.querySelector('#menu-bar');

    menu_bar.addEventListener('click', function () {
        menu.classList.toggle("menu-toggle");
    });

    let shorInputButton = document.querySelector('#shorten');
    let containerLink = document.querySelector('.renderLinks'); 
    //let renderedContainerLink = document.querySelector('.rendered-link'); 

        
        
        //fetchLinks('https://api.shrtco.de/v2/shorten?url=http://frontendmentor.io'); 

    shorInputButton.addEventListener('click' , (e) => {
        e.preventDefault(); 
        let shortenInput = document.querySelector('#shortenInput').value; 
        let fetchedUrl = `https://api.shrtco.de/v2/shorten?url=${shortenInput}`;  

        async function fetchLinks(url) {
            try {
              const response = await fetch(url);
              const data = await response.json();

              const {result} = data ; 
             
              console.log('sadfsdfdsf'); 
             console.log(result.full_short_link);  
             
             
             
             containerLink.innerHTML += `
                <div class="result-links" >
                    <span> ${shortenInput} </span>
                    <span> 
                        <a href='${result.full_short_link}' target="_blank">
                            ${result.full_short_link} 
                         </a>
                     </span>
                </div>
             ` ; 
             
            }
            catch (err) {
              console.log('fetch failed', err);
            }
        }
        

        // containerLink.innerHTML += `
        //         <div class="link-right" >
        //             <span> ${shortenInput} </span>
        //         </div>
        //     `
        // ;


              
        fetchLinks(fetchedUrl); 
    } )
})
