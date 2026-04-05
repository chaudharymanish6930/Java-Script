function one(){
    two();
    console.log("one");
}
function two(){
    three();
    console.log("two")
}
function three(){
  console.log("three")
}
one();
two();
three();

(() => {
    function one(){
        two();
        console.log("one");
    }
    function two(){
        three();
        console.log("two")
    }
    function three(){
        console.log("three")
    }

    one();
    two();
    three();
})();


const one = () => {
    two();
    console.log("one");
}

const two = () => {
    three();
    console.log("two");
}

const three = () => {
    console.log("three");
}

one();
two();
three();
