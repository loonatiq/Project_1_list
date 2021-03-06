//Justifing Const
const toDoList = document.querySelector('#tdl');
const tBox = document.querySelector('#newThing');
const things = toDoList.children;

//Event Handler
// 1. 내용 추가
document.querySelector('#addBtn').addEventListener('click', addNew);
document.querySelector('#newThing').addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    addNew();
  }
});
document.querySelector('#dltBtn').addEventListener('click', deleteBtn);
//Functions
// 1. 내용 있을 시 리스트 추가 가능
function addNew(){
  if(tBox.value !== ''){
    // 1-1. 리스트 컨테이너
    const item = document.createElement('div');
    toDoList.append(item);
    item.classList.add('item');
    // 1-2. 리스트 내용
    let inputValue = tBox.value;
    const thing = document.createElement('li');
    thing.textContent = inputValue;
    item.append(thing);
    tBox.value = '';
    // 1-3. 삭제 아이콘
    const icon = document.createElement('i');
    ////////////////시행착오////////////////
    ////// icon.setAttribute('class', 'fas fa-minus-square');
    icon.setAttribute('class', 'fas');
    item.append(icon);
    // 1-4. 리스트 완료 표시 요소 선택
      for(let i = 0; i < things.length; i++){
        things[i].children[0].addEventListener('click', done);
      }
      ////////////////시행착오////////////////
      // 1-5. 리스트 삭제 요소 선택
      // for(let i = 0; i < things.length; i++){
      //   things[i].children[1].addEventListener('click', deleteList);
      // }
  }
}

// 2. 리스트 완료 표시
function done(){
  this.classList.toggle('done');
}

// 3-1. 삭제 버튼 토글
function deleteBtn(){
  for(let i = 0; i < things.length; i++){
    things[i].children[1].classList.toggle('fa-minus-square');
    things[i].children[1].addEventListener('click', deleteList);
  }
}


// 3-2. 리스트 삭제
function deleteList(){
  this.parentElement.remove();
}

////////////////시행착오////////////////
// function deleteBtn(){
//     for(let i = 0; i < things.length; i++){
//       const icon = document.createElement('i');
//       icon.setAttribute('class', 'fas fa-minus-square');
//       things[i].append(icon);
//       things[i].children[1].addEventListener('click', deleteList);
//     }
// }
// function deleteBtn(){
//   let minusIcn = document.querySelector('.fa-minus-square');
//   minusIcn.classList.toggle('fa-minus-square');
// }