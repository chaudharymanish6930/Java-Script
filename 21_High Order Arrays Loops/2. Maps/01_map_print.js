const map= new Map()
map.set('IN',"india")
map.set('USA',"united state of America")
map.set('fr',"france")
map.set('IN',"india") // not again print 
// it contains only uniique value

console.log(map)
console.log(typeof map); // object

// accessing through key in loop
for(var mp of map){
    console.log(mp)
}