
jQuery.fn.outerHTML = function() {
    return jQuery('<div />').append(this.eq(0).clone()).html();
};


$(document).ready(function () {

    $(".bps_ca_total").click(function () {
        $(".basket-page").toggleClass("bp_mobile_box");
    })

    $(".bp-overlay").click(function () {
        $(".basket-page").removeClass("bp_mobile_box");
    })

    $(".h-menu-item.hmi-submenu .hm-btn").click(function (){
        if (window.innerWidth <= 768){
            $(this).closest("li").toggleClass("m-active");
        }
    });
    $(".c_sidebar_open").click(function (){
        $(".c-sidebar").addClass("open__filter")
    });
    $(".close_sfilter").click(function (){
        $(".c-sidebar").removeClass("open__filter");
    })

    /* Header Hover Menu */

    function headerHoverMenuActive(id , sClass="active") {

        $(".hmh-left-lists").removeClass(sClass);
        $(".hmh-menus li").removeClass(sClass);

        const tab = $(".hmh-left-lists[data-tab-id='"+id+"']");
        const menu = $(".hmh-menus li[data-menu-id='"+id+"']");

        $(".hmh-mobile-header .hmh-mtitle").text(menu.find("span.flex-1").text())

        tab.addClass(sClass);
        menu.addClass(sClass);

    }

    $(".hmh-menus li").click(function (e) {
        const menuId = $(this).data("menu-id");
        headerHoverMenuActive(menuId);

        if (window.innerWidth <= 768){
            $(".hm-hover-menu").toggleClass("mobile-active");
        }

    });

    $(".hmh_btn_close").click(function (){
        $(".hm-hover-menu").removeClass("mobile-active");
    })


    headerHoverMenuActive(1);

});

