function Car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
}
const auto =new Car('Honda',"Accord",1998);
// output : true;

console.log(auto instanceof Car);
console.log(auto instanceof Object)