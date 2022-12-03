var option=
{
    animation: true,
    delay : 2000
};

function Toasty( )
{
    var toastHTMLElement = document.getElementById( "EpicToast" );

    var toastElement = new bootstrap.Toast( toastHTMLElement, option );

    toastElement.show();
}

$("#lista-card .btnLike").click(function () {
    let like = $(this).prev().data("like")
    let dislike = $(this).parent().find("#dislike").data("dislike");

    if(like > 8){
        like -= 1;
        $(this).find("#icon-like").removeClass("fa fa-thumbs-up")
        $(this).find("#icon-like").addClass("far fa-thumbs-up")
        $(this).parent().find("#like").text(like)
        $(this).parent().find("#like").data("like", like);
        return;
    }

    if(like === 8){
        like += 1;
        $(this).find("#icon-like").removeClass("far fa-thumbs-up")
        $(this).find("#icon-like").addClass("fa fa-thumbs-up")
        $(this).parent().find("#like").text(like)
        $(this).parent().find("#like").data("like", like);
        if(dislike > 3) {
            dislike -= 1;
            $(this).parent().find("#icon-dislike").removeClass("fa fa-thumbs-down")
            $(this).parent().find("#icon-dislike").addClass("far fa-thumbs-down")
            $(this).parent().find("#dislike").text(dislike)
            $(this).parent().find("#dislike").data("dislike", dislike)   

        }
    }
    
})


$("#lista-card .btnDislike").click(function () {
    let like = $(this).parent().find("#like").data("like")
    let dislike = $(this).parent().find("#dislike").data("dislike");
   
    if(dislike > 3){
        dislike -= 1;
        $(this).find("#icon-dislike").removeClass("fa fa-thumbs-down")
        $(this).find("#icon-dislike").addClass("far fa-thumbs-down")
        $(this).parent().find("#dislike").text(dislike)
        $(this).parent().find("#dislike").data("dislike", dislike);
        
        return;
    }

    if(dislike === 3){
        dislike += 1;
        $(this).find("#icon-dislike").removeClass("far fa-thumbs-down")
        $(this).find("#icon-dislike").addClass("fa fa-thumbs-down")
        $(this).parent().find("#dislike").text(dislike)
        $(this).parent().find("#dislike").data("dislike", dislike);
        
        if(like > 8) {
            like -= 1;
            $(this).parent().find("#icon-like").removeClass("fa fa-thumbs-up")
            $(this).parent().find("#icon-like").addClass("far fa-thumbs-up")
            $(this).parent().find("#like").text(like)
            $(this).parent().find("#like").data("like", like)
            

        }
    }
    
})
