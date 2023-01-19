$(".image1").hide();
$(".image2").hide();
$(".image3").hide();
$(".image4").hide();


$("button").click(function() {
    var age =$("age").val();
    var description =$("description").val();
    var results =$("results").val();
	$(".results").text(results);
    $(".image1").show();
	$(".image2").show();
	$(".image3").show();
	$(".image4").show();
	//Now im checking if the code works
    console.log(results);
	alert("Thank you for submittig your information!", results);
    
});