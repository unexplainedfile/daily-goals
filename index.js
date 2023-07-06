const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
showAllTasks();

function removeTasks(){
    tasks.forEach(()=>{
        const div = document.querySelector(".task");
        div.remove();
    })
}
function showAllTasks(){
    tasks.forEach((value,index) =>{
        const div = document.createElement("div");
        div.setAttribute("class","task");
        const innerDiv = document.createElement("div");
        innerDiv.setAttribute("class","innerTask");
        div.append(innerDiv);
        
        const ptag = document.createElement("p");
        ptag.innerText = value.title;
        innerDiv.append(ptag);

        const spantag = document.createElement("span");
        spantag.innerText = value.description;
        innerDiv.append(spantag);

        const btn = document.createElement("button");
        btn.setAttribute("class","deleteBtn");
        btn.innerText = "-";
        btn.addEventListener("click",()=>{
            removeTasks();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAllTasks();
        });

        div.append(btn);
        
        container.append(div);
    })
}
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    removeTasks();
    tasks.push({
        title: title.value,
        description:description.value,
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTasks();
});
