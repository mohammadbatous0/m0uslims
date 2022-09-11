window.onscroll = function scroll_screen(){
    let nav_background = document.querySelector('nav'),
    btn_up_top = document.querySelector('.fa-angles-up'),
     links = document.querySelectorAll('.links li a');

    ;
    if(window.scrollY>0)
    {
        nav_background.classList.add('colorscroll');

        for(let i = 0;i<links.length;i++)
        links[i].classList.add('colortext');
        btn_up_top.style.display = "flex";
    
    }
    else if(window.scrollY==0)
    {
        nav_background.classList.remove('colorscroll');
        for(let i = 0;i<links.length;i++)
        links[i].classList.remove('colortext');
        btn_up_top.style.display = "none";
    }
}
var load_page = document.querySelector('.page-loading');
function getzkr()
{   // length = 9 => index max = 8
    let inbox_texts = document.querySelector('.text-content');
    const zkr = [
    'أستغفر الله',
    'الله أكبر',
    'لا إله الا الله',
    'أشهد أن لا إله الا الله',
    'الحمد لله',
    'سبحان الله وبحمده',
    'الحمد لله',
    'حسبنا الله ونعم الوكيل',
    'سبحان الله العظيم'];
    let number = Math.random(0,8);
    let result_random = number * 10;
    let result = result_random.toFixed(0);
    if(result < 9)
    {
        inbox_texts.innerText = zkr[result];
    }
    else if(result > 9)
    {
        getzkr();
    }
}
   let timerss =  setInterval(getzkr,2000);
   getzkr();
    setTimeout(hide,6000);

function hide()
{
    load_page.classList.add('ds-none');
    clearInterval(timerss);
}
