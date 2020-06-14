// Check Of Specific ToDos By Clicking

//$("li").on('click',function(){
//   if($(this).css('color') == 'rgb(128, 128, 128)'){
//        $(this).css({
//            color:'black',
//            textDecoration:'none'
//        });
//    }
//    else{$(this).css({
//        color:'gray',
//        textDecoration:'line-through'
//    });
//    }
//});

$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
});

//Click to Remove Todo
$('ul').on('click','span',function(event){
    $(this).parent().fadeOut(700,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(enterPressed){
    //13 is number of Enter button 
    if(enterPressed.which == 13){
       //grabbing new todo
       var toDoInput  = $(this).val();
       $(this).val('')
       //create a new li and push to ul
       $('ul').append('<li><span>X </span>'+ toDoInput +'</li>')
    }
    
})