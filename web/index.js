/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

  function Flightchange(){
           var flight = document.getElementById("mySelect").value ;
           console.log(flight);
           if(flight == 1){
               oneway.style.display = 'block';
               roundtrip.style.display = 'none';
               multicities.style.display = 'none';
               
           }
           else if(flight == 2){
              oneway.style.display = 'none';
               roundtrip.style.display = 'block';
               multicities.style.display = 'none';
           } 
           else if(flight == 3){
               oneway.style.display = 'none';
               roundtrip.style.display = 'none';
               multicities.style.display = 'block';
           }
        }
        
        
        //One way trip
        function oneWay(){
            var from = document.querySelector("#from").value;
            var to = document.querySelector("#to").value;
             var departDate = document.querySelector("#depDate").value;
             
           //console.log(from + to);
             if(from == to || to == from){
               //alert('hey ,From city and TO city should be different');
               document.getElementById("cityMsg").innerHTML="Error : Cities are Invalid";
               document.getElementById("cityMsg").style.color = "red";
               var button = document.querySelector("#oneButton").setAttribute("disabled","disabled");
               
            }
            else if(from != to || to != from) {
                 document.getElementById("cityMsg").innerHTML="Cities are valid";
                 document.getElementById("cityMsg").style.color = "green";
                 var button = document.querySelector("#oneButton");
                 button.disabled = false; 
            }
            
             var today = new Date();
             var departureDate = new Date(departDate);
             //console.log(today+departureDate)
             if(today>=departureDate){
                document.getElementById("deptMsg").innerHTML="Error :Invalid departure date";
                document.getElementById("deptMsg").style.color = "red";
                var button = document.querySelector("#oneButton");
                 button.disabled = true;
            }
            else if(today<departureDate){
                 document.getElementById("deptMsg").innerHTML="valid departure date";
                 document.getElementById("deptMsg").style.color = "green";
                 var button = document.querySelector("#oneButton");
                 button.disabled = false;
            }
           
        }
        
        
        /*function oneWay(){
            
            
            var from = document.querySelector("#from").value;
            var to = document.querySelector("#to").value;
            var departDate = document.querySelector("#depDate").value;
             
             var today = new Date();
             var departureDate = new Date(departDate);
            //console.log(from+to)
            if(from == to){
               //alert('hey ,From city and TO city should be different');
               document.getElementById("msg").innerHTML="olta";
            }
            if(today>=departureDate){
                alert('hey ,Departure date should be after today')
            }
           
        }*/
        
        //Round Trip 
        function roundTrip(){
            var from = document.querySelector("#from-round").value;
            var to = document.querySelector("#to-round").value;
            var depDate = document.querySelector("#depDate-round").value;
            var retDate = document.querySelector("#retDate-round").value;
             
             
             var today = new Date();
             var departureDate = new Date(depDate);
             var returnDate = new Date(retDate);
             if(from == to || to == from){
              document.getElementById("roundCityMsg").innerHTML="Error: Cities are Invalid";
              document.getElementById("roundCityMsg").style.color = "red";
              var button = document.querySelector("#roundButton");
               button.disabled = true
            }
            else if(from != to || to != from){
                document.getElementById("roundCityMsg").innerHTML=" Cities are valid";
                document.getElementById("roundCityMsg").style.color = "green"
                var button = document.querySelector("#roundButton");
                button.disabled = false;
            }
            
            if(today >= departureDate){
                document.getElementById("roundDeptMsg").innerHTML="Error: Invalid departure time";
                document.getElementById("roundDeptMsg").style.color="red";
                var button = document.querySelector("#roundButton");
                button.disabled = true;
            }
           else if(today<departureDate){
                document.getElementById("roundDeptMsg").innerHTML="valid departure time";
                document.getElementById("roundDeptMsg").style.color="green";
                var button = document.querySelector("#roundButton");
                button.disabled = false;
            }
            
            if(returnDate <= departureDate){
                 document.getElementById("roundRetMsg").innerHTML="Error : Invalid Return time";
                 document.getElementById("roundRetMsg").style.color = "red";
                 var button = document.querySelector("#roundButton");
                button.disabled = true;
            }
            else if(returnDate > departureDate){
                document.getElementById("roundRetMsg").innerHTML="valid Return time";
                document.getElementById("roundRetMsg").style.color = "green";
                var button = document.querySelector("#roundButton");
                button.disabled = false;
            }
        }
        
        
        //Multi cities
        
        
        var counter = 0 ;
        
        function addFlight(){
           var limit = 4;
           
          console.log(counter);
           
           if(counter != limit){
               counter += 1;
           
           
           var div = document.createElement("div");
           div.setAttribute("class","multicity2");
           var h2 = document.createElement("h5");
          // h2.style.margin = "50px";
           var flightNo = document.createTextNode(`Flight ${counter+2} :`);
           h2.appendChild(flightNo);
           div.appendChild(h2);
           div.appendChild(document.createTextNode(" From : ")); 
           var from = document.createElement("input");
           from.setAttribute("type","text");
           from.setAttribute("value",'');
           from.setAttribute("required",'required');
           from.setAttribute("id",`from-multi${counter}`);
           from.setAttribute("onchange","MultiCity()");
           from.setAttribute("placeholder","Enter From city");
           div.appendChild(from);
           div.appendChild(document.createTextNode(" ")); 
           
           
          
           div.appendChild(document.createTextNode(" To : "));
           var to = document.createElement("input");
           to.setAttribute("type","text");
           to.setAttribute("value",'');
           
           to.setAttribute("id",`to-multi${counter}`);
           to.setAttribute("onchange","MultiCity()")
           to.setAttribute("placeholder","Enter From city")
           div.appendChild(to);
           div.appendChild(document.createTextNode(" "));
          
           
           div.appendChild(document.createTextNode(" Departure Time : "));
           var dept = document.createElement("input");
           dept.setAttribute("type","date");
           dept.setAttribute("value",'');
           dept.setAttribute("id",`depart-multi${counter}`);
           dept.setAttribute("onchange","MultiCity()")
           dept.setAttribute("placeholder","Enter From city")
           div.appendChild(dept)
           div.appendChild(document.createTextNode(" "));
          var br = document.createElement("br");
          div.appendChild(br);
          document.getElementById("adding").appendChild(div);
      }
      
           if(counter == limit){
                var button = document.querySelector("#addButton")
                button.disabled= true;
           }
           }
           
      function MultiCity(){
          
          
          //first flight
            
            var from1 = document.querySelector('#from-multi0').value;
            var to1 = document.querySelector('#to-multi0').value;
            console.log(from1+to1)
            if(from1 == to1){
                 alert(" First flight 'From city' and 'To city' should be different");
                 var button = document.querySelector("#addButton");
                 button.disabled= true;
                 
                }
            else{
                var button = document.querySelector("#addButton");
                 button.disabled= true;
                 document.querySelector("#from-multi01").value = to1; 
                
                }
                
            // checking departure date for visiting multicities
            //first flight
            var departTime1 = document.querySelector('#depart-multi0').value;
            var today = new Date();
            var departureTime1 = new Date(departTime1);
            console.log(departTime1)
            if(today>=departureTime1){
                alert('first flight date after today')
                var button = document.querySelector("#addButton");
                 button.disabled= true;
            } else{
                var button = document.querySelector("#addButton");
                 button.disabled= true;
            }
            
            
            
            //sceond flight
            var from2 = document.querySelector('#from-multi01').value;
            var to2 = document.querySelector('#to-multi01').value;
            var departTime2 = document.querySelector('#depart-multisec').value;
          
          // departure time check sceond flight
            var departureTime2 = new Date(departTime2)
            if(departureTime1>=departureTime2){
                alert('second flight date should be after first flight')
                var button = document.querySelector("#addButton");
                 button.disabled= true;
            } else{
                var button = document.querySelector("#addButton");
                 button.disabled= false;
            }
            
            //citiy check sceond flight
            if(from2!=to2){
               var button = document.querySelector("#addButton");
                  button.disabled= false; 
                  button.addEventListener("click",function(){
                  document.querySelector("#from-multi1").value = to2;
                  })
                   document.querySelector("#from-multi1").value = to2;
            }else{
                 var button = document.querySelector("#addButton");
                 button.disabled= true;
                 ///alert(" second flight 'From city' and 'To city' should be different");
            }
            
          
          
            //third flight
            var from3 = document.querySelector('#from-multi1').value;
            var to3 = document.querySelector('#to-multi1').value;
            var departure3 = document.querySelector('#depart-multi1').value;
            var departureTime3 = new Date(departure3);
            
            //departure time check third flight
            if(departureTime2>=departureTime3){
                alert('third flight date should be second flight')
                var button = document.querySelector("#addButton");
                 button.disabled= true;
            } else{
                var button = document.querySelector("#addButton");
                 button.disabled= false;
            }
            
            //city check third flight
            if(from3 == to3){
                
                 var button = document.querySelector("#addButton");
                 button.disabled= true;
                 alert(" Third flight 'From city' and 'To city' should be different");
                
            }
            else{
                 var button = document.querySelector("#addButton");
                 button.disabled= false;

                 button.addEventListener("click",function(){
                 document.querySelector("#from-multi2").value = to3;
                  })
                  document.querySelector("#from-multi2").value = to3;
            }
             
             
            
            //fourth flight 
            
            var from4 = document.querySelector('#from-multi2').value;
            var to4 = document.querySelector('#to-multi2').value;
            var departure4 = document.querySelector('#depart-multi2').value;
            var departureTime4 = new Date(departure4);
            
            //departure time check fourth flight
            if(departureTime3>=departureTime4){
                alert('Fourth flight date should be after third flight')
                var button = document.querySelector("#addButton");
                 button.disabled= true;
            } else{
                var button = document.querySelector("#addButton");
                 button.disabled= false;
            }
            
            //city check fourth flight
             if(from4 == to4){
                
                 var button = document.querySelector("#addButton");
                 button.disabled = true;
                 alert(" fourth flight 'From city' and 'To city' should be different");
              
            }else{
                var button = document.querySelector("#addButton");
                 button.disabled = false;
                  
                 button.addEventListener("click",function(){
                 document.querySelector("#from-multi3").value = to4;
                  })
                  document.querySelector("#from-multi3").value = to4;
            }
            
            
            
            
            //fifth Flight
            var from5 = document.querySelector('#from-multi3').value;
            var to5 = document.querySelector('#to-multi3').value;
            var departure5 = document.querySelector('#depart-multi3').value;
            var departureTime5 = new Date(departure5);
            
            //departure time check fifth flight
            if(departureTime4>=departureTime5){
                alert('Fifth flight date should be after fourth flight')
                var button = document.querySelector("#addButton");
                 button.disabled= true;
            } else{
                var button = document.querySelector("#addButton");
                 button.disabled= false;
            }
            
            //city check fifth flight
            if(from5 == to5){
                
                 var button = document.querySelector("#addButton");
                 button.disabled= true;
                 alert(" Fifth flight 'From city' and 'To city' should be different");
                
            }else{
                var button = document.querySelector("#addButton");
                 button.disabled= false;
                  
                 button.addEventListener("click",function(){
                 document.querySelector("#from-multi4").value = to5;
                  })
                  document.querySelector("#from-multi4").value = to5;
            }
            
            
            
            //sixth flight
            var from6 = document.querySelector('#from-multi4').value;
            var to6 = document.querySelector('#to-multi4').value;
            var departure6 = document.querySelector('#depart-multi4').value;
            var departureTime6 = new Date(departure6);
            
            //departure time check sixth flight
            if(departureTime5>=departureTime6){
                alert('sixth flight date should be after fifth flight')
                var button = document.querySelector("#addButton");
                 button.disabled= true;
            } else{
                var button = document.querySelector("#addButton");
                 button.disabled= true;
            }
            
            //city check sixth flight
            if(from6 == to6){
                
                 //var button = document.querySelector("#addButton");
                 button.disabled= true;
                alert("Sixth flight 'From city' and 'To city' should be different");
               
            }else{
                var button = document.querySelector("#addButton");
                 button.disabled= true;
                  
                 button.addEventListener("click",function(){
                document.querySelector("#from-multi5").value = to6;
                  })
                  document.querySelector("#from-multi5").value = to6;
            }
            
            
            /*var to = document.querySelectorAll('#to-multi');
            for(var i=0;i<from.length;i++){
                console.log(from[i].value);
                console.log(to[i].value);
                document.getElementById("from-multi").innerHTML = to[i+1].value;
                
            }*/
           
           
          
        }