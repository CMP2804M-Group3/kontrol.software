let isMac = false;
let isWindows = false;
let isLinux = false;
$().ready(()=>{
    $('#open-burger').click(() =>{
        if($("#burger-checkbox").is(":not(:checked)")){
            $("#mobile-header").css("background-color", "white");
            $("#mobile-header").css("color", "rgba(0,0,0,0.9)");
            $(".headerImg").css("filter", "invert(1)")


        }

        else if($("#burger-checkbox").is(":checked")){

            $("#mobile-header").css("background-color", "initial");
            $("#mobile-header").css("color", "white");
            $(".headerImg").css("filter", "invert(0)")



        }

    });
    isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
    isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
    isLinux = navigator.platform.toUpperCase().indexOf('LINUX')!==-1;

});