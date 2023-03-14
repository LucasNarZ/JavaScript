let array = new Array(3, 3, 4, 5, 6, 3)
let set = new Set(array)
set.add(7)
set.delete(4)
console.log(set.has(5))
set.clear()
console.log(set.entries())
let map = new Map()
map.set("a", 1)
map.set("b", 2)
for (keys of map.keys()){
    console.log(keys)
}