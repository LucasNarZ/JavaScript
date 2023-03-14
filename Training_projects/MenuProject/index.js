let menu = [
    {
        id:1,
        title:"breakfast",
        price:15,
        image:"./item-1.jpeg",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
        laboriosam excepturi! Quo, officia.`,
        category:"breakfast"
    },
    {
        id:2,
        title:"lunch",
        price:15,
        image:"./item-1.jpeg",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
        laboriosam excepturi! Quo, officia.`,
        category:"lunch"
    },
    {
        id:3,
        title:"shake",
        price:15,
        image:"./item-1.jpeg",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
        laboriosam excepturi! Quo, officia.`,
        category:"shake"
    },
    {
        id:4,
        title:"breakfast2",
        price:15,
        image:"./item-1.jpeg",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
        laboriosam excepturi! Quo, officia.`,
        category:"breakfast"
    },
    {
        id:5,
        title:"Dinner",
        price:15,
        image:"./item-1.jpeg",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
        laboriosam excepturi! Quo, officia.`,
        category:"dinner"
    },
    {
        id:6,
        title:"shake2",
        price:15,
        image:"./item-1.jpeg",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
        laboriosam excepturi! Quo, officia.`,
        category:"shake"
    },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

let appendItems = (menu) => {
    let displayMenu = menu.map((item) => {
        return `
        <article class="menu-item">
        <img src="${item.image}" alt="${item.title}" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.description}
          </p>
        </div>
      </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

let appendButtons = (buttons) => {
    let displayButtons = buttons.join("");
    btnContainer.innerHTML = displayButtons;
    let btns = document.querySelectorAll(".filter-btn");
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;
            const display = menu.filter((item) => {
                if(category === "all"){
                    return item;
                }
                if(item.category === category){
                    return item;
                }
            })
            appendItems(display)
        })
    })
    
}

window.addEventListener("DOMContentLoaded", () => {
    appendItems(menu);
    const categorys = menu.reduce((value, item) => {
        if(!value.includes(item.category)){
            value.push(item.category)
        }
        return value;
    }, ["all"])
    let buttons = categorys.map((category) => {
        return `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`
    })
    appendButtons(buttons)
});
