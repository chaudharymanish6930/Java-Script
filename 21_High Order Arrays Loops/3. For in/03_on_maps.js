const map= new Map()
map.set('IN',"india")
map.set('USA',"united state of America")
map.set('fr',"france")
map.set('IN',"india") // not again print 
// it contains only uniique value

// console.log(map)

for(const i in map){
    console.log(i)  // no print anything
}