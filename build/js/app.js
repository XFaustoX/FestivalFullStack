document.addEventListener('DOMContentLoaded', function() {

    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
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
            if(window.scrollY >= (sectionTop - sectionHeight / 3) ) {
                actual = section.id
            }            
        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);

            section.scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIG5hdmVnYWNpb25GaWphKCk7XHJcbiAgICBjcmVhckdhbGVyaWEoKTtcclxuICAgIHJlc2FsdGFyRW5sYWNlKCk7XHJcbiAgICBzY3JvbGxOYXYoKTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIG5hdmVnYWNpb25GaWphKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpXHJcbiAgICBjb25zdCBzb2JyZUZlc3RpdmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvYnJlLWZlc3RpdmFsJyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoc29icmVGZXN0aXZhbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPCAxKXtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1maXhlZCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1maXhlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXJHYWxlcmlhKCkge1xyXG5cclxuICAgIGNvbnN0IENBTlRJREFEX0lNQUdFTkVTID0gMTY7XHJcbiAgICBjb25zdCBnYWxlcmlhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGVyaWEtaW1hZ2VuZXMnKVxyXG5cclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gQ0FOVElEQURfSU1BR0VORVM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpXHJcbiAgICAgICAgaW1hZ2VuLnNyYyA9IGBzcmMvaW1nL2dhbGxlcnkvZnVsbC8ke2l9LmpwZ2BcclxuICAgICAgICBpbWFnZW4uYWx0ID0gJ0ltYWdlbiBHYWxlcsOtYSdcclxuXHJcbiAgICAgICAgLy8gRXZlbnQgSGFuZGxlclxyXG4gICAgICAgIGltYWdlbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG1vc3RyYXJJbWFnZW4oaSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdhbGVyaWEuYXBwZW5kQ2hpbGQoaW1hZ2VuKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3N0cmFySW1hZ2VuKGkpIHtcclxuICAgIGNvbnN0IGltYWdlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpXHJcbiAgICBpbWFnZW4uc3JjID0gYHNyYy9pbWcvZ2FsbGVyeS9mdWxsLyR7aX0uanBnYFxyXG4gICAgaW1hZ2VuLmFsdCA9ICdJbWFnZW4gR2FsZXLDrWEnXHJcblxyXG4gICAgLy9HZW5lcmFyIE1vZGFsXHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgIG1vZGFsLm9uY2xpY2sgPSBjZXJyYXJNb2RhbDtcclxuICAgIFxyXG4gICAgLy8gQm90b24gY2VycmFyIG1vZGFsXHJcbiAgICBjb25zdCBjZXJyYXJNb2RhbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpXHJcbiAgICBjZXJyYXJNb2RhbEJ0bi50ZXh0Q29udGVudCA9ICdYJ1xyXG4gICAgY2VycmFyTW9kYWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLWNlcnJhcicpO1xyXG4gICAgY2VycmFyTW9kYWwub25jbGljayA9IGNlcnJhck1vZGFsO1xyXG5cclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGltYWdlbik7XHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjZXJyYXJNb2RhbEJ0bik7XHJcblxyXG4gICAgLy9BZ3JlZ2FyIGFsIEhUTUxcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNlcnJhck1vZGFsKCkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdmYWRlT3V0JylcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIG1vZGFsPy5yZW1vdmUoKVxyXG4gICAgfSwgNTAwKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNhbHRhckVubGFjZSgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmVnYWNpb24tcHJpbmNpcGFsIGEnKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdHVhbCA9ICcnO1xyXG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcFxyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uSGVpZ2h0ID0gc2VjdGlvbi5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPj0gKHNlY3Rpb25Ub3AgLSBzZWN0aW9uSGVpZ2h0IC8gMykgKSB7XHJcbiAgICAgICAgICAgICAgICBhY3R1YWwgPSBzZWN0aW9uLmlkXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIGlmKGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgPT09ICcjJyArIGFjdHVhbCkge1xyXG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbE5hdigpIHtcclxuICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmVnYWNpb24tcHJpbmNpcGFsIGEnKTtcclxuXHJcbiAgICBuYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uU2Nyb2xsID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25TY3JvbGwpO1xyXG5cclxuICAgICAgICAgICAgc2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSJdLCJmaWxlIjoiYXBwLmpzIn0=
