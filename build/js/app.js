document.addEventListener('DOMContentLoaded', function() {

    navegacionFija();
    crearGaleria();
    resaltarEnlace();
})

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival');

    document.addEventListener('scroll', function() {
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('header-fixed')
        } else {
            header.classList.remove('header-fixed')
        }
    })
}

function crearGaleria() {

    const CANTIDAD_IMAGENES = 16;
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galería'

        // Event Handler
        imagen.onclick = function() {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
        
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = 'Imagen Galería'

    //Generar Modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;
    
    // Boton cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModal.onclick = cerrarModal;

    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);

    //Agregar al HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);
}

function cerrarModal() {
    const modal = document.querySelector('.modal');

    modal.classList.add('fadeOut')

    setTimeout(() => {
    modal?.remove()
    }, 500)
}

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a');

        let actual = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight

            if(window.scrollY >= sectionTop - sectionHeight / 3) {
                actual = section.id
            }            
        })

        navLinks.forEach(link => {
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('activo')
            }
        })
    })
}    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIG5hdmVnYWNpb25GaWphKCk7XHJcbiAgICBjcmVhckdhbGVyaWEoKTtcclxuICAgIHJlc2FsdGFyRW5sYWNlKCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBuYXZlZ2FjaW9uRmlqYSgpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKVxyXG4gICAgY29uc3Qgc29icmVGZXN0aXZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb2JyZS1mZXN0aXZhbCcpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKHNvYnJlRmVzdGl2YWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIDwgMSl7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItZml4ZWQnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItZml4ZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWFyR2FsZXJpYSgpIHtcclxuXHJcbiAgICBjb25zdCBDQU5USURBRF9JTUFHRU5FUyA9IDE2O1xyXG4gICAgY29uc3QgZ2FsZXJpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxlcmlhLWltYWdlbmVzJylcclxuXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDw9IENBTlRJREFEX0lNQUdFTkVTOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpbWFnZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKVxyXG4gICAgICAgIGltYWdlbi5zcmMgPSBgc3JjL2ltZy9nYWxsZXJ5L2Z1bGwvJHtpfS5qcGdgXHJcbiAgICAgICAgaW1hZ2VuLmFsdCA9ICdJbWFnZW4gR2FsZXLDrWEnXHJcblxyXG4gICAgICAgIC8vIEV2ZW50IEhhbmRsZXJcclxuICAgICAgICBpbWFnZW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtb3N0cmFySW1hZ2VuKGkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnYWxlcmlhLmFwcGVuZENoaWxkKGltYWdlbilcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9zdHJhckltYWdlbihpKSB7XHJcbiAgICBjb25zdCBpbWFnZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKVxyXG4gICAgaW1hZ2VuLnNyYyA9IGBzcmMvaW1nL2dhbGxlcnkvZnVsbC8ke2l9LmpwZ2BcclxuICAgIGltYWdlbi5hbHQgPSAnSW1hZ2VuIEdhbGVyw61hJ1xyXG5cclxuICAgIC8vR2VuZXJhciBNb2RhbFxyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcbiAgICBtb2RhbC5vbmNsaWNrID0gY2VycmFyTW9kYWw7XHJcbiAgICBcclxuICAgIC8vIEJvdG9uIGNlcnJhciBtb2RhbFxyXG4gICAgY29uc3QgY2VycmFyTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKVxyXG4gICAgY2VycmFyTW9kYWxCdG4udGV4dENvbnRlbnQgPSAnWCdcclxuICAgIGNlcnJhck1vZGFsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1jZXJyYXInKTtcclxuICAgIGNlcnJhck1vZGFsLm9uY2xpY2sgPSBjZXJyYXJNb2RhbDtcclxuXHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChpbWFnZW4pO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoY2VycmFyTW9kYWxCdG4pO1xyXG5cclxuICAgIC8vQWdyZWdhciBhbCBIVE1MXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjZXJyYXJNb2RhbCgpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcblxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZmFkZU91dCcpXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBtb2RhbD8ucmVtb3ZlKClcclxuICAgIH0sIDUwMClcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzYWx0YXJFbmxhY2UoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZlZ2FjaW9uLXByaW5jaXBhbCBhJyk7XHJcblxyXG4gICAgICAgIGxldCBhY3R1YWwgPSAnJztcclxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uVG9wID0gc2VjdGlvbi5vZmZzZXRUb3BcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbkhlaWdodCA9IHNlY3Rpb24uY2xpZW50SGVpZ2h0XHJcblxyXG4gICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSBzZWN0aW9uVG9wIC0gc2VjdGlvbkhlaWdodCAvIDMpIHtcclxuICAgICAgICAgICAgICAgIGFjdHVhbCA9IHNlY3Rpb24uaWRcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgIGlmKGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgPT09ICcjJyArIGFjdHVhbCkge1xyXG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3Rpdm8nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0gICAgIl0sImZpbGUiOiJhcHAuanMifQ==
