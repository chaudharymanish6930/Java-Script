const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function(e){
        console.log(e);
        console.log(e.target);
        
        if(e.target.id ==='grey'){
        // body.style.bgc=grey;
        body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id ==='yellow'){
        body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id ==='blue'){
        body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id ==='white'){
        body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id ==='purple'){
        body.style.backgroundColor=e.target.id;
        }

    })
});


buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("mouseover", function(e){
        console.log(e);
        console.log(e.target);
        
        if(e.target.id ==='grey'){
        // body.style.bgc=grey;
        body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id ==='yellow'){
        body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id ==='blue'){
        body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id ==='white'){
        body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id ==='purple'){
        body.style.backgroundColor=e.target.id;
        }

    })
});


// switch case
buttons.forEach(function (button) {
    button.addEventListener("click", function(e){

        switch(e.target.id) {
            case "red":
                console.log("Red button clicked");
                break;

            case "green":
                console.log("Green button clicked");
                break;

            case "blue":
                console.log("Blue button clicked");
                break;

            default:
                console.log("Unknown button");
        }

    });
});