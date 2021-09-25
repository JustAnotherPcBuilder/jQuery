$('button').on('click', function(e){
    e.preventDefault();
    if( $("#title").val().length < 2 ){
        return alert("Movie Title must be at least 2 characters long!")
    }
    //create 
    const item = $("<li></li>").text(`${$("#title").val()}: ${'☆'.repeat(parseInt($("#rating").val()))}`).appendTo("ul");
    $('<button>').text('remove').on('click', function(){
        $(this).parent().remove()
    }).appendTo(item);
})