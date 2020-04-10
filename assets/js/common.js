window.addEventListener('scroll', function(){
    var _scrollTop = window.scrollY || document.documentElement.scrollTop;

    if(_scrollTop > 118){
        document.querySelector('.nav-container').classList.add('nav-fixed');
    }else{
        document.querySelector('.nav-container').classList.remove('nav-fixed');
    }
});