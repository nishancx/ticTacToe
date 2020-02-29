let user = ['O', 'X'];
let temp;
let leftContainerInner = document.querySelector("#leftContainerInner");
let rightContainerInner = document.querySelector("#rightContainerInner");
function set(elem){
  console.log(user[0]);
  console.log(user[1]);
  console.log(temp);
  elem.innerHTML = `<div>${user[0]}</div>`;
  elem.removeAttribute("onclick");
  if(user[0] == 'O'){
    leftContainerInner.classList.remove("userActive");
    rightContainerInner.classList.add("userActive");
  }else{
    leftContainerInner.classList.add("userActive");
    rightContainerInner.classList.remove("userActive");
  }
  temp = user[0];
  user[0] = user[1];
  user[1] = temp;
}