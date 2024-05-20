let listcontainer=document.getElementById('container')
let inputBox=document.getElementById('box')
function addTask(){
    if (inputBox.value===''){
        alert('add task')
    }
    else{
        let task=document.createElement('li')
        task.textContent=inputBox.value
        listcontainer.appendChild(task)
        let span=document.createElement('span');
        span.textContent='\u00d7';
        task.appendChild(span)
    }
    inputBox.value=''
}
listcontainer.addEventListener('click',(el)=>{
    if(el.target.tagName=='LI'){
        el.target.classList.toggle('checked')
    
    }
    else if(el.target.tagName=='SPAN'){
        el.target.parentElement.remove()
    }
    
})