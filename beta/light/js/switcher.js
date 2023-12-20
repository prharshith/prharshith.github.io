$(function(){

    let colors = 16;

    let currentColor = parseInt($('html').data('color').split('color')[1]);

    let layouts = {
        dark : './assets/css/kayden_dark.css',
        light : './assets/css/kayden_light.css'
    }

    let media = '(prefers-color-scheme: dark)';

    for(let i = 1; i <= colors; i++)
    {
        let isActive = i === ( currentColor ? currentColor : 1 ) ? ' active' : '';
        $('.switcher-list').append(`<li><a href="#" class="swtich-color color${i} ${isActive}" data-color="color${i}"></a></li>`);
    }

    $('.switcher-button').on('click', function(){
      
        $('#color-switcher').hasClass('open-switcher') ? $('#color-switcher').removeClass('open-switcher') :  $('#color-switcher').addClass('open-switcher');
         
    });

    $('.swtich-color').on('click', function(event){

        $('.swtich-color').removeClass('active');

        $(this).addClass('active');

        $('html').attr('data-color', $(this).data('color'))

        $('.switcher-button').click();

        event.preventDefault();
    });

    $('#autodetect').on('change', function(){
        if( $(this).is(":checked") )
        {
            $('.manual_sw').addClass('d-none');
            

            $('#dark_stylesheet').attr('href', layouts.dark);
            $('#light_stylesheet').attr('href', layouts.light);

            setTimeout(function(){
                $("#manual_stylesheet").attr('href', '');
            },200);

            
        

            $('html').attr('data-layout', 'auto');

        }else {
            $('.manual_sw').removeClass('d-none');

            $("#manual_stylesheet").attr('href', layouts[getCheckedLayout()]);



            setTimeout(function(){
                $('#dark_stylesheet').attr('href', '');
                $('#light_stylesheet').attr('href', '');
            },200);

            $('html').attr('data-layout', 'manual');
        }
    });


    $('.manual_layout input[name=manualLayout]').on('change', function(){

        $("#manual_stylesheet").attr('href', layouts[getCheckedLayout()]);
    })



});


function getCheckedLayout()
{
    return $('.manual_layout').find('input[name=manualLayout]:checked').val();
}