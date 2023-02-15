

export {content, createEl, pageLoad };



const content = document.querySelector('#content');


const createEl = (el,className, text = "") => {
   
    let element = document.createElement(`${el}`);
    element.classList.add(className);
    element.textContent = `${text}`;
    content.appendChild(element);
    
}

// createEl("div", "header", "testingthis");

function pageLoad(){

    // create the heading of the app 
    createEl("div", "header", "Home");
    createEl("div", "header", "Menu");
    createEl("div", "header", "Contact");


    // toggle pages individual's set-up

        // home 

    createEl("div", "body");

};


