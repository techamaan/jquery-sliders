
  		var a=$('.slideshow').length;
  		var b=('.d2');
  		var c=1;
      var z;

  		console.log(a);
    
      
  		 setInterval(function(){
        
  		 	$('.d2').animate({
  		 		marginLeft:'-=100%'
  		 	},1000,function(){
  		 		c++;
  			console.log(c)
  		 		if (c===a) {   
           
          c=1;
          $('.d2').css('marginLeft','0px');
        }

  		 	});
  			
  		 },4000);
      
  			
      $('#next1').on('click' , function(){
          $('.d2').animate({ 
             marginLeft:'-=100%'
          }, 1000,function() {

            c++;
            console.log(c)
            if (c==a) {   
           
          c=1;
          $('.d2').css('marginLeft','0px');
        }
          })
        });
      $("#prev1").click(function(){
          $('.d2').animate({ 
             marginLeft:'0%'
          })
        })
        
      

     
