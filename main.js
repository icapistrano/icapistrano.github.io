function aboutExtend() {
    // button onclick calls function, so outside class
    
    let moreInfo = document.getElementById("about-info");
    let buttonText = document.getElementById("about-button");

    moreInfo.classList.toggle("hide-element");
    if (buttonText.innerHTML === "Read More"){
        buttonText.innerHTML = "Read Less";
    }   
    else {
        buttonText.innerHTML = "Read More";
    }
};


class BasicWebFuncs {
    constructor(button, info){
        this.button = document.getElementById(button);
        this.info = document.getElementById(info);
    }

    toggleElement(element='hide-element') {
        // toggle element states
        this.info.classList.toggle(element);
    }

    applyRotation(){
        // apply rotation 180deg
        this.button.classList.toggle('rotation');
    }

    projectFunctions(){
        // context of 'this' changes when function() {} syntax is used, arrow function is used defined with '() => {}'.

        this.button.addEventListener('click', () => {
            this.toggleElement();
            this.applyRotation();
        });
    }

    navFunctions(){
        // context of 'this' changes when function() {} syntax is used, arrow function is used defined with '() => {}'.

        this.button.addEventListener('click', () => {
            this.toggleElement('hide-nav');
        });
    }
}



let airHockeyP = new BasicWebFuncs("projectMenu1", "project1");
airHockeyP.projectFunctions();

let abbDrawing = new BasicWebFuncs("projectMenu2", "project2");
abbDrawing.projectFunctions();

let abbWelding = new BasicWebFuncs("projectMenu3", "project3");
abbWelding.projectFunctions();

let labviewRobot = new BasicWebFuncs("projectMenu4", "project4");
labviewRobot.projectFunctions();

let turtlebotOpenCV = new BasicWebFuncs("projectMenu5", "project5");
turtlebotOpenCV.projectFunctions();

let navMenu = new BasicWebFuncs("menu", "nav");
navMenu.navFunctions();