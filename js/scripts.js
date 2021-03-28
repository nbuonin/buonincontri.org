window.addEventListener('load', function() {
    var toggler = document.querySelector('.navbar-toggler');
    var collapse = document.querySelector('#nav-collapse');
    toggler.addEventListener('click', function(evt) {
        collapse.classList.toggle('nav-collapse-show');
    });
});
