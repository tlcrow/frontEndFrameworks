$(document).ready(function(){

    $('#click').click(function(){
        alert("This is the click function");
    });

    $('#hide').click(function(){
        $('#hideP').hide();
    });

    $('#show').click(function(){
        $('#showP').show();
    });

    $('#toggle').click(function(){
        $('#toggleP').toggle();
    });

    $('#slideDown').click(function(){
        if ($('#slideDownP').is(':hidden')) {
            $('#slideDownP').slideDown("slow");
        }
        else {
            $('#slideDownP').hide();
        }
    });

    $('#slideUp').click(function(){
        if ($('#slideUpP').is(':hidden')) {
            $('#slideUpP').show("slow");
        }
        else {
            $('#slideUpP').slideUp();
        }
    });

    $('#slideToggle').click(function(){
        $('#slideToggleP').slideToggle("slow");
    });

    $('#fadeIn').click(function(){
        $('#fadeInP').fadeIn("slow");
    });

    $('#fadeOut').click(function(){
        $('#fadeOutP').fadeOut("slow");
    });

    $('#addClass').click(function(){
        $('#addClassP').addClass("blueText");
        $('#addClass').addClass("blueButton");
    });

    $('#before').click(function(){
        $('#beforeP').before("<p>Hello</p>");
    });

    $('#after').click(function(){
        $('#afterP').after("<p>Goodbye</p>");
    });

    $('#append').click(function(){      
        $( "#appendP" ).append(document.createTextNode(" append"));
    });

    $('#html').click(function(){
        var string = $(this).html();
        $(this).text(string);
    });

    $('#attrP').attr({
        alt: "This is the alt",
        title: "This is the title"
    });
    $('#attr').click(function(){
        $("#attrP").text($("#attrP").attr("alt"));
    });

    $("#val").keyup(function(){
        var key = $(this).val();
        $("#valP").text(key);
    })
    .keyup();

    var string = $("#brown").text();
    $("#text").click(function(){
        $("#textP").html(string);
    })
})