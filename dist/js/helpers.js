$(document).ready(function () {

    $(".btn_ , [data-btn-ripple]")
        .on("mousedown touchstart", function () {
            $(this).css('transform', 'scale(0.95)');
        })
        .on("mouseup touchend", function () {
            $(this).css('transform', 'scale(1)');
        })


    $(".btn_right_chevron").each(function (index, btn){
        $(this).append("<i class='gg-chevron-down brc_icon'></i>")
    })

    $(".cpm_ca_total").click(function () {
        $(".checkout-page").toggleClass("cp_mobile_box");
    })
    $(".cp-overlay").click(function () {
        $(".checkout-page").removeClass("cp_mobile_box");
    })


    const dark = localStorage.getItem("dark");

    if (dark){
        $("body").addClass("dark");
    }

    $(".btn_mode").click(function (){

        const dark = $("body").hasClass("dark") ? true : false;

        if (dark){
            $("body").removeClass("dark");
            localStorage.removeItem("dark")
        }else{
            $("body").addClass("dark");
            localStorage.setItem("dark", "true")
        }

    })

    $(".dropdown_ .dropdown_trigger").click(function () {
        const dropEl = $(this).closest(".dropdown_");
        $(dropEl).toggleClass("d-active");
    });


    $(document).on("click", function(event) {
        let triggers = $(".dropdown_ .dropdown_trigger");
        let dropdowns = $(".dropdown_content");

        let closeDropdowns = true;

        triggers.each(function(index, trigger) {
            let dropdown = $(trigger).siblings(".dropdown_content");
            if ($(dropdown).is(event.target) || $(dropdown).has(event.target).length || trigger === event.target) {
                closeDropdowns = false;
                return false;
            }
        });

        if (closeDropdowns) {
            $(".dropdown_").removeClass("d-active");
        } else {
            triggers.not($(event.target).closest(".dropdown_").find(".dropdown_trigger")).closest(".dropdown_").removeClass("d-active");
        }
    });


    $(".select_").change(function (){
        $(this).blur();
    })

    $('.select_').bind('blur', function () {
        $(this).closest(".floting_select_").removeClass("active__focus")
    }).bind('focus', function () {
        $(this).closest(".floting_select_").addClass("active__focus")
    });

    $(".select_").change(function (){
        $(this).blur();
    })






})
