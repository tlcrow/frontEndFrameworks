$(document).ready(function(){
            // Current id of contact card
            var i = 0;
            $('form').submit(function(e){
                e.preventDefault();
                var first_name = $( "#first_name" ).val();
                var last_name = $( "#last_name" ).val();
                var description = $( "#description" ).val();
                
                // Create new contact card within contacat card div
                $( "#contactcard" ).append( "<div id="+i+" class='ccard'><h3>"+ first_name+" " + last_name + "</h3><h5>(Click for Description)</h5><p>"+description+"</p></div>");

                // Hide the paragraph of the most recently created contact card by first selecting the contact card you just created
                $('#'+i+ ' p').css("visibility", "hidden")
                $('#'+i).on('click', function(){
                    $(this).children('p').css("visibility", "visible")
                    console.log('hope this works')
                });

                // Increase id of most recently created contact
                i++;

                $(".ccard")
                    .css("width", "350px")
                    .css("height", "150px")
                    .css("border", "1px solid lightblue")
                    .css("text-align", "center")
                    .css("margin-top", "10px")
            });
        })