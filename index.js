
document.getElementById('signin-btn').addEventListener('click', function(){
     const userName = document.getElementById('username');
    const usernameValue = userName.value;

    const password = document.getElementById('password');
    const passwordValue = password.value;

    const signIn = document.getElementById('signin-section');
    const allCard = document.getElementById('all-card-section');


    if(usernameValue === 'admin' & passwordValue === 'admin123'){
        signIn.classList.add('hidden');
        allCard.classList.remove('hidden');

    }
    else if(usernameValue !== 'admin'){
        alert('Invalid Username');
    }
    else if(passwordValue !== 'admin123'){
        alert('Invalid Password');
    }
})


//------------------------------------------------------------------------------------

const totalIssues = document.getElementById('total-issue');

const loadingSpinier = document.getElementById('loading-spainer');


const lodAllIssues = () => {
    loadingSpinier.classList.remove('hidden');
fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then((res) => res.json())
.then((data) => {
    loadingSpinier.classList.add('hidden');
    displayAllIssues(data.data)
}
)
}

lodAllIssues();




 const displayAllIssues = (issues) => { 
 
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
  issues.forEach((issue) => { 
    const showBtn = issue.labels[1] && issue.labels[1].trim() !== "";        
        const hideBtn = showBtn ? "" : "";
        
        const colorPriority = {
            "high": "bg-c",
            "medium": "bg-b",
            "low": "bg-a",
        };

       const imagePriority = {
        "high": "./assets/Open-Status.png",
        "medium": "./assets/Open-Status.png",
         "low": "./assets/Closed- Status .png",
       } ;

       const cardBorder = {
        "high": "border-a",
        "medium": "border-b",
         "low": "border-c",
       }
        const bgColor = colorPriority[issue.priority] ;
        const image = imagePriority[issue.priority];
        const borderColor = cardBorder[issue.priority]; 

   const card = document.createElement('div');
   card.className = `card bg-base-100 shadow-sm p-6 space-y-4  ${borderColor}`;
   card.innerHTML = `
                    <div class="flex justify-between" onclick="showModal(${issue.id})">
                       <img src="${image}" alt="${issue.priority}">
                       <button class="btn btn-soft btn-secondary rounded-2xl ${bgColor}">${issue.priority.toUpperCase()}</button>
                    </div>

                    <h1 class="text-xl font-medium">${issue.title}</h1>
                    <p class="text-sm text-[#64748b]">${issue.description}</p>

                    <div class="flex w-full ">
                        <button class="label-btn rounded-2xl">${issue.labels[0]}</button>
                        <button class="label-btn1 rounded-2xl  ${hideBtn}"> ${issue.labels[1]}</button>
                    </div>
                    <hr>
                    <div class="space-y-2">
                    <p>${issue.author}</p>
                    <p>${issue.createdAt}</p>    
                    </div>
                 `;    
   
      cardContainer.appendChild(card);
      totalIssues.innerText = issues.length;
 })}

//------------------------------------------------------------------

    const allBtn = document.getElementById('all-btn');
    const openBtn = document.getElementById('open-btn');
    const closedBtn = document.getElementById('closed-btn');
    const cardSection = document.getElementById('card-section');
    const closedCardSection = document.getElementById('closed-section');
    const openCardSection = document.getElementById('open-section');



document.getElementById('all-btn').addEventListener('click', function(){ 
    allBtn.classList.add('btn-primary'); 
    openBtn.classList.remove('bg-btn');   
    closedBtn.classList.remove('bg-btn');    
   cardSection.classList.remove('hidden');
   closedCardSection.classList.add('hidden');    
   openCardSection.classList.add('hidden'); 
})

document.getElementById('open-btn').addEventListener('click', function(){    
    openBtn.classList.add('bg-btn');
    allBtn.classList.remove('btn-primary'); 
   closedBtn.classList.remove('bg-btn'); 
   cardSection.classList.add('hidden');
   openCardSection.classList.remove('hidden');
   closedCardSection.classList.add('hidden'); 
})

document.getElementById('closed-btn').addEventListener('click', function(){    
    closedBtn.classList.add('bg-btn');
    allBtn.classList.remove('btn-primary'); 
    openBtn.classList.remove('bg-btn');     
   cardSection.classList.add('hidden');
   closedCardSection.classList.remove('hidden');   
   openCardSection.classList.add('hidden');

});



//-----------------------------------------------------------------------------

const closedIssue = document.getElementById('closed-issue');


const lodIssues = () => {
    loadingSpinier.classList.remove('hidden');
fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then((res) => res.json())
.then((data) => {
    loadingSpinier.classList.add('hidden');
    closedSection(data.data)
}
)
}

lodIssues();


function closedSection(closedIssues){ 

    const issues = closedIssues.filter(issue => issue.priority === 'low');
    
    
   const closedCard = document.getElementById('closed-card');
   closedCard.innerText = '';

   issues.forEach(issue => {
   

const showBtn = issue.labels[1] && issue.labels[1].trim() !== "";        
        const hideBtn = showBtn ? "" : "";

        const colorPriority = {
            "high": "bg-c",
            "medium": "bg-b",
            "low": "bg-a",
        };

       const imagePriority = {
        "high": "./assets/Open-Status.png",
        "medium": "./assets/Open-Status.png",
         "low": "./assets/Closed- Status .png",
       } ;

       const cardBorder = {
        "high": "border-a",
        "medium": "border-b",
         "low": "border-c",
       };

        const bgColor = colorPriority[issue.priority] ;
        const image = imagePriority[issue.priority];
        const borderColor = cardBorder[issue.priority];     


    const createCard = document.createElement('div');
     createCard.className = `card bg-base-100 shadow-sm p-6 space-y-4 ${borderColor}`;
     createCard.innerHTML = `
                     <div class="flex justify-between" onclick="showModal(${issue.id})">
                       <img src="${image}" alt="${issue.priority}">
                       <button class="btn btn-soft btn-secondary rounded-2xl ${bgColor}">${issue.priority.toUpperCase()}</button>
                    </div>

                    <h1 class="text-xl font-medium">${issue.title}</h1>
                    <p class="text-sm text-[#64748b]">${issue.description}</p>

                    <div class="flex ">
                        <button class="label-btn rounded-2xl w-[48%]">${issue.labels[0]}</button>
                        <button class="label-btn1 rounded-2xl object-cover p-[-14px] ${hideBtn}"> ${issue.labels[1]}</button>


                    </div>
                    <hr>
                    <div class="space-y-2">
                    <p>${issue.author}</p>
                    <p>${issue.createdAt}</p>    
                    </div>
     `;

     closedCard.appendChild(createCard);
     closedIssue.innerText = issues.length;

   });
}



//-----------------------------------------------------
const openIssue = document.getElementById('open-issue');

const lodOpenIssues = () => {
    loadingSpinier.classList.remove('hidden');
fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then((res) => res.json())
.then((data) => {
    loadingSpinier.classList.add('hidden');
    openSection(data.data)}
)

}

lodOpenIssues();


function openSection(openIssues){

    const issues = openIssues.filter(issue => issue.priority === 'medium' || issue.priority === 'high');
    
    
   const openCard = document.getElementById('open-card');
   openCard.innerText = '';

   issues.forEach(issue => {
   

const showBtn = issue.labels[1] && issue.labels[1].trim() !== "";        
        const hideBtn = showBtn ? "" : "";

        const colorPriority = {
            "high": "bg-c",
            "medium": "bg-b",
            "low": "bg-a",
        };

       const imagePriority = {
        "high": "./assets/Open-Status.png",
        "medium": "./assets/Open-Status.png",
         "low": "./assets/Closed- Status .png",
       } ;

       const cardBorder = {
        "high": "border-a",
        "medium": "border-b",
         "low": "border-c",
       };

        const bgColor = colorPriority[issue.priority] ;
        const image = imagePriority[issue.priority];
        const borderColor = cardBorder[issue.priority];     


    const createCard = document.createElement('div');
     createCard.className = `card bg-base-100 shadow-sm p-6 space-y-4 ${borderColor}`;
     createCard.innerHTML = `
                     <div class="flex justify-between" onclick="showModal(${issue.id})">
                       <img src="${image}" alt="${issue.priority}">
                       <button class="btn btn-soft btn-secondary rounded-2xl ${bgColor}">${issue.priority.toUpperCase()}</button>
                    </div>

                    <h1 class="text-xl font-medium">${issue.title}</h1>
                    <p class="text-sm text-[#64748b]">${issue.description}</p>

                    <div class="flex ">
                        <button class="label-btn rounded-2xl w-[48%]">${issue.labels[0]}</button>
                        <button class="label-btn1 rounded-2xl object-cover p-[-14px] ${hideBtn}"> ${issue.labels[1] || "No Action"}</button>


                    </div>
                    <hr>
                     <div class="space-y-2">
                    <p>${issue.author}</p>
                    <p>${issue.createdAt}</p>    
                    </div>
     `;

     openCard.appendChild(createCard);
     openIssue.innerText = issues.length;

   });
}



const showModal = (id) => {
    loadingSpinier.classList.remove('hidden');
const link = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
fetch(link)
.then((res) => res.json())
.then((data) => {
    loadingSpinier.classList.add('hidden');
    displayModal(data.data)
});

};



const displayModal = (modalData) => {
    const cardContainer = document.getElementById('modal-box');
    cardContainer.innerHTML = '';
 
    const showBtn = modalData.labels[1] && modalData.labels[1].trim() !== "";        
        const hideBtn = showBtn ? "" : "";
        const colorPriority = {
            "high": "bg-c",
            "medium": "bg-b",
            "low": "bg-a", };
       const imagePriority = {
        "high": "./assets/Open-Status.png",
        "medium": "./assets/Open-Status.png",
         "low": "./assets/Closed- Status .png",
       } ;
       const cardBorder = {
        "high": "border-a",
        "medium": "border-b",
         "low": "border-c",
       };
        const bgColor = colorPriority[modalData.priority] ;
        const image = imagePriority[modalData.priority];
        const borderColor = cardBorder[modalData.priority]; 

        cardContainer.classList = `card bg-base-100 w-96 shadow-sm p-6 space-y-4 ${borderColor}`;
    

   const card = document.createElement('div');   
   card.innerHTML = `
                    <div class="flex justify-between">
                       <img src="${image}" alt="${modalData.priority}" class="w-9">
                       <button class="btn btn-soft btn-secondary rounded-2xl ${bgColor}">${modalData.priority.toUpperCase()}</button>
                    </div>

                    <h1 class="text-xl font-medium my-4">${modalData.title}</h1>
                    <p class="text-sm text-[#64748b]">${modalData.description}</p>

                    <div class="flex w-full my-4">
                        <button class="btn btn-soft btn-secondary rounded-2xl modal-btn">${modalData.labels[0]}</button>
                        <button class="btn btn-soft btn-warning rounded-2xl object-cover modal-btn ${hideBtn}"> ${modalData.labels[1]}</button>
                    </div>
                    <hr>
                    <div class="space-y-2 mt-4">
                    <p>${modalData.author}</p>
                    <p>${modalData.createdAt}</p>    
                    </div>
                    <div class="modal-action">
                <form method="dialog">
                    <button class="btn">Close</button>
                </form>
            </div>

                 `;    
   
document.getElementById('my_modal_1').showModal();
cardContainer.appendChild(card);
 }



const inputBox = document.getElementById('input-box');

 const searchButton = document.getElementById('search-btn'); 

  const cardContainer = document.getElementById('all-card-section');
  
  searchButton.addEventListener('click', () => { 
    

    const inputValue = inputBox.value.toLowerCase();

     const cards = cardContainer.getElementsByClassName('card');
     
      for (let i = 0; i < cards.length; i++) { 
        const card = cards[i]; 
        const matchText = card.textContent.toLowerCase();
        
        if (matchText.includes(inputValue)) {
             card.style.display = "";              
            } 
            else {
                 card.style.display = "none";
                 } 
       }
       
     });


