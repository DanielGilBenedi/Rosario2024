

window.addEventListener('load', () => {
    const contenedor = document.querySelector('.contenedor');
    const navItems = document.querySelectorAll('.menu-lateral > a');
    const contentItems = document.querySelectorAll('.main .grid-container > div');
    const date = new Date().getDate();
    const checkActive = (contentItems, navItems, item) =>{
        navItems.forEach((restItem) => {
            restItem.classList.remove('active')
        })

        contentItems.forEach((contentItem) => {
            contentItem.classList.remove('active')
        })

        item.classList.add('active')
        const dataType = item.getAttribute('date-type');
        document.querySelector(`[data-content="${dataType}"]`).classList.add('active');
    }

    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            checkActive(contentItems, navItems, item);
        })

        if(parseInt(item.getAttribute('date-type')) === parseInt(date)){
            checkActive(contentItems, navItems, item);
        }
    })

    document.querySelector('#boton-menu').addEventListener('click', () => {
        contenedor.classList.toggle('active')
    })
    
    const comprobarAncho = () => {
        if (window.innerWidth <= 768) {
            contenedor.classList.remove('active');
        } else {
            contenedor.classList.add('active');
        }
    }

    window.addEventListener('load', () => {
        comprobarAncho();
    });
    
    comprobarAncho();
    
    window.addEventListener('resize', () => {
        comprobarAncho();
    });
});