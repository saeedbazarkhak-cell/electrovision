
// ElectroVision Website Scripts

// سال جاری در فوتر
document.addEventListener("DOMContentLoaded", function () {

    const year = new Date().getFullYear();

    const footerYear = document.querySelector(".year");

    if (footerYear) {
        footerYear.textContent = year;
    }


    // منوی موبایل
    const menuButton = document.querySelector(".menu-btn");
    const menu = document.querySelector("nav ul");

    if(menuButton){

        menuButton.addEventListener("click", function(){

            menu.classList.toggle("active");

        });

    }


    // اسکرول نرم برای لینک‌ها

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });


    // افکت ظاهر شدن کارت‌ها

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.2
    });


    cards.forEach(card=>{

        observer.observe(card);

    });


});
