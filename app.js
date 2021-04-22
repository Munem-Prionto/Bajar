const main = document.querySelector('.main');

const confirmDiv = document.querySelector('.confirmDiv')
const confirmBtn = document.querySelector('#confirmBtn');
const confirmList = document.querySelector('.confirmList')
const totalPriceHTML = document.querySelector('.totalPrice'); 

const radio__div = document.querySelector('#radio');
const radio__a = document.querySelector('#radio-a');
const radio__p = document.querySelector('#radio-p');


const search_box = document.querySelector('.search-box');
const search = document.querySelector('#search');

const editBtn = document.querySelector('#editBtn');

/* theme */
const switchBtn = document.querySelector('#switch');
const r = document.querySelector(':root');

if(!localStorage.getItem('theme')) {
    localStorage.setItem('theme' , 'dark');
}

if(localStorage.getItem('theme') === 'dark') {
    switchBtn.click();
    themeChanger(localStorage.getItem('theme'))
}else {
    themeChanger(localStorage.getItem('theme'))
}

switchBtn.addEventListener('click' , e=> {
    if(switchBtn.checked) {
        localStorage.setItem("theme", `dark`);
    }else {
        localStorage.setItem("theme", `light`);
    }
    themeChanger(localStorage.getItem("theme"));
})


function themeChanger(conditon) {
    if(conditon === "dark") {
        
        r.style.setProperty('--bg-color', '#212121');
        r.style.setProperty('--primary-color', '#c2c2c2');
        r.style.setProperty('--secondary-color', '#000000');
        r.style.setProperty('--third-color', '#ffffff');
        r.style.setProperty('--border-color', 'rgb(54, 54, 54)');
        r.style.setProperty('--checkbox-color' , 'rgb(255,255,255)');
        r.style.setProperty('--checkbox-tick-color' , 'rgb(0,0,0)');


        
    }else if(conditon === 'light') {
       
        r.style.setProperty('--bg-color', '#ffffff');
        r.style.setProperty('--primary-color', '#000000');
        r.style.setProperty('--secondary-color', '#d4d4d4');
        r.style.setProperty('--third-color', '#000000');
        r.style.setProperty('--border-color', 'rgb(179, 179, 179)');
        r.style.setProperty('--checkbox-color' , 'rgb(0,0,0)');
        r.style.setProperty('--checkbox-tick-color' , 'rgb(255,255,255)');
    }
}

function sortCheck() {
    if (radio__a.checked) {
        data.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return textA.localeCompare(textB)
        });


        insertData();
    } else if(radio__p.checked) {
        data.sort(function(a, b) {
            var numA = a.price;
            var numB = b.price;
      
        return (numA < numB) ? -1 : (numA > numB) ? 1 : 0; 
        });
  
        insertData();
    }
}

function insertData() {
    let serial = 1;
    main.innerHTML = ``;
    data.forEach(d => {
        main.innerHTML += 
        `
        <div class="item" data-name="${d.name}">
            <div class="item__name z-0">
                ${serial++} . <span class="eng-name">${d.name}</span><span class="hyphen"> -</span> <span class="b-name">${d.b_name}</span>
            </div>
            <input  class="item__quantity" type="number" name="Quantity" id="" placeholder="Quantity" min="0" size="4" value="${1}">
            <div class="item__unit z-0">${d.unit}</div>
            <input  class ="item__price"type="number" name="price" placeholder="Price/kg" min="0" size="4" value="${d.price}">
            <div class="item__unit z-0">
                Tk. ( ${d.unit} )
            </div>
            <input  class = "checkbox"type="checkbox" name="" id="">

        </div>`;
    }) 
} 


sortCheck();


radio__div.addEventListener('click' , e=> {
    e.stopPropagation()
    if(e.target.tagName === 'LABEL' || e.target.tagName === 'INPUT'){
        sortCheck();
    }


})


main.addEventListener('click' , e=> {
 
    
    if(e.target.getAttribute("data-checked") === 'f'){
        e.target.setAttribute("data-checked" , "t")

        document.querySelector('.svg_checked').style.display = "";
        document.querySelector('.svg_unchecked').style.display = "none";

        
    }else if(e.target.getAttribute("data-checked") === 't') {
        e.target.setAttribute("data-checked" , "f")

        document.querySelector('.svg_checked').style.display = "none";
        document.querySelector('.svg_unchecked').style.display = "";
    }

    if (e.target.classList.contains('item')) {
        

        Array.from(e.target.children).forEach(child => {

            if(child.type === 'checkbox') {
    
                if(child.checked === true) {child.checked = false}
                else { child.checked = true}
            }
            
        })
    }

})

confirmBtn.addEventListener('click' , e=> {

    search_box.classList.add('d-none');
    confirmBtn.classList.add('d-none');
    radio__div.classList.add('d-none');
    main.classList.add('d-none');
    

    confirmDiv.classList.remove('d-none');
    editBtn.classList.remove('d-none');
    totalPriceHTML.classList.remove('d-none');
    
    confirmList.innerHTML = '';
    totalPriceHTML.innerHTML = '';

    
    
    let serial = 1;
    let totalPrice = 0;

   
    Array.from(main.children).forEach(child => {
        Array.from(child.children).forEach(item => {
   
            if(item.type === 'checkbox' && item.checked === true) {
                
                const name = child.querySelector('.eng-name').innerText;
                const bName = child.querySelector('.b-name').innerText;
                const q = +child.querySelector('.item__quantity').value.trim();
                const unit = child.querySelector('.item__unit').innerText;
                const uPrice = +child.querySelector('.item__price').value.trim();

                const finalPrice = q*uPrice;

                totalPrice += finalPrice;
                
                
                confirmList.innerHTML += `
                    <div class="cListItem">
                        <span>${serial++} . ${name} - ${bName}</span>
                        <span>${q} ${unit}</span>
                        <span>${finalPrice} Tk.</span>
                    </div>
                `;
               
   
            }
       
        })
             
    })

   totalPriceHTML.textContent = `Total : ${totalPrice} Tk.`;

})


/* SEARCH  */
search.addEventListener('keyup' , e=> {
       
    const mainItems = Array.from(main.children);

     mainItems.forEach(item => {
        if(!item.getAttribute('data-name').toLocaleLowerCase().includes(search.value.trim().toLocaleLowerCase())) {
            item.classList.add('d-none')
        }else {
            item.classList.remove('d-none')
        }
    }) 
});


editBtn.addEventListener('click' , e=> {
    search_box.classList.remove('d-none');
    confirmBtn.classList.remove('d-none');
    radio__div.classList.remove('d-none');
    main.classList.remove('d-none');

    confirmDiv.classList.add('d-none');
    editBtn.classList.add('d-none');

    totalPriceHTML.classList.add('d-none')
})
