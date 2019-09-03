
const map = new Map([
    ['name','zhangsan'],
    ['title','Auther']
]);

map.size;

map.has('name');
map.get('name');

const map1 = new Map();

map.forEach(
    ([key,value])=>map1.set(key,value)
);

console.log(map);

const promise = new Promise(function(resolve,reject){
    if(1){
        resolve(map);
    }else{
        reject(new Error());
    }
});

function timeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,'done');
    });
}

timeout(100).then((value) =>{
    console.log(value);
});

let promise1 = new Promise((resolve,reject)=>{
    console.log('Promise1');
    resolve();
});

promise1.then(()=>{
    console.log('then');
});

var str = "你好啊";

str.substr(2)

