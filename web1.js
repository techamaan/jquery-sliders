
  		var a=$('.slideshow').length;
  		var b=('.d2');
  		var c=1;
      var z;

  		console.log(a);
      abc();
      function abc()
      {
  		 z=setInterval(function(){
        
  		 	$('.d2').animate({
  		 		marginLeft:'-=100%'
  		 	},3000,function(){
  		 		c++;
  			console.log(c)
  		 		if (c===a) {   
           
          c=1;
          $('.d2').css('marginLeft','0px');
        }
        if(c==4)
        {
          c==2;
        }

  		 		});
  			
  		 },3000);
      }
  			
      $('.bt').on('click' , function(){
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
        c--;
        if(c==0){
          c=4;
          $('.d2').animate({ 
             marginLeft:'0%'
          })
        }else{
          $('.d2').animate({ 
             marginLeft:'-=100%'
          })
        }
        
      
      })
