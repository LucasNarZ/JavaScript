/*As callbacks são funções que são passadas para outras funções como argumento
que é invocada dentro da função externa para realizar alguma rotina ou tarefa*/
/*
function loadScript(script, callbackFunctions){
    setTimeout(function(){console.log(script)}, 5000)
    callbackFunctions([print1, print2])
};
function usefulFunctions(funcs){
    for( let i of funcs){
        i();
    }
}
function print1(){
    console.log("Hello")
}
function print2(){
    console.log("World!")
}
loadScript("Bah", usefulFunctions)

*/
/*Promises representam um valor que pode estar disponível agora, no futuro ou nunca.
Com ela podemos executar funções apenas quando o valor da promise estiver disponível,
ou agir em caso de algum erro*/
/*
const timeOut = () =>{
    return new Promise((resolve, rejected) => {
        resolve(console.log("No errors"))
        rejected("There is an error")
    })
}
timeOut()
.then(function() {
    console.log("Pass")
},function() {
    console.log("error")
})
.catch(function() {
    console.log("Bah")
})

const p = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve('yay')
    reject('no')
})
  
p.then(console.log()).catch(console.error)
console.log("asdadsadasdasd ")



async function show() {
    let sa = await new Promise((resolved, reject) => setTimeout(() => console.log("Bsaaaaa"), 5000))
    sa.then(() => console.log(sa))

}
show()

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })

}
  
delay(3000).then(() => console.log("banana"));

*/
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } 
    throw new HttpError(response);
  }
  
  // Ask for a user name until github returns a valid user
   async function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");
    try{
        let user = await loadJson(`https://api.github.com/users/${name}`);
        alert(`Full name: ${user.name}.`);
        return user;
    }
    catch(err){
        if (err instanceof HttpError && err.response.status == 404) {
          alert("No such user, please reenter.");
          return demoGithubUser();
        } else {
          throw err;
        }
      };

  }
  
  demoGithubUser();

