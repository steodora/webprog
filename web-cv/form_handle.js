 var ed=1;
 var wo=1;
 var lan=0;
 var c=0;
 var webs = 2
 window.onload = countries;

function getRequestObj(){
 if (window.XMLHttpRequest){ // IE7+, Firefox, Chrome, Opera, Safari
  return (new XMLHttpRequest());
 }
 else
 	if (window.ActiveXObject){
     return(new ActiveXObject("Microsoft.XMLHTTP"));
    }
    else{ // a böngésző nem támogatja egyik típusú kérésobjektumot sem
     return(null);
    }
} 

function countries(){ 
  xmlhttp=getRequestObj();  
  xmlhttp.onreadystatechange=handleResponse;
  xmlhttp.open("GET","getcountries.php",true);
  xmlhttp.send(null); 
  numbers();
}

function numbers(){
  var max=new Date().getFullYear();
  var min=max-100;
  for (var i= min; i<=max; i++){
    var y_opt = document.createElement("option");
    y_opt.value=i;
    y_opt.innerHTML=i;
    document.getElementById("edu"+ed+"_from_y").appendChild(y_opt);
    y_opt = document.createElement("option");
    y_opt.value=i;
    y_opt.innerHTML=i;
    document.getElementById("edu"+ed+"_to_y").appendChild(y_opt);
    y_opt = document.createElement("option");
    y_opt.value=i;
    y_opt.innerHTML=i;
    document.getElementById("work"+wo+"_from_y").appendChild(y_opt);
    y_opt = document.createElement("option");
    y_opt.value=i;
    y_opt.innerHTML=i;
    document.getElementById("work"+wo+"_to_y").appendChild(y_opt);
  }
  for (var i=1; i<=12; i++){
    var m_opt = document.createElement("option");
    m_opt.value=i;
    m_opt.innerHTML=i;
    document.getElementById("edu"+ed+"_from_m").appendChild(m_opt);
    m_opt = document.createElement("option");
    m_opt.value=i;
    m_opt.innerHTML=i;
    document.getElementById("edu"+ed+"_to_m").appendChild(m_opt);
    m_opt = document.createElement("option");
    m_opt.value=i;
    m_opt.innerHTML=i;
    document.getElementById("work"+wo+"_from_m").appendChild(m_opt);
    m_opt = document.createElement("option");
    m_opt.value=i;
    m_opt.innerHTML=i;
    document.getElementById("work"+wo+"_to_m").appendChild(m_opt);
  }
  for (var i=1; i<=31; i++){
    var d_opt = document.createElement("option");
    d_opt.value=i;
    d_opt.innerHTML=i;
    document.getElementById("edu"+ed+"_from_d").appendChild(d_opt);
    d_opt = document.createElement("option");
    d_opt.value=i;
    d_opt.innerHTML=i;
    document.getElementById("edu"+ed+"_to_d").appendChild(d_opt);
    d_opt = document.createElement("option");
    d_opt.value=i;
    d_opt.innerHTML=i;
    document.getElementById("work"+wo+"_from_d").appendChild(d_opt);
    d_opt = document.createElement("option");
    d_opt.value=i;
    d_opt.innerHTML=i;
    document.getElementById("work"+wo+"_to_d").appendChild(d_opt);
  }
}

function handleResponse(){
	if(xmlhttp.readyState==4)
    {
    	var info = eval('(' + xmlhttp.responseText + ')');
    	for (var i = 0; i < info.length; i++) {
    		var opt = document.createElement("option");
    		opt.value=info[i].value;
    		opt.innerHTML=info[i].name;
    		document.getElementById("country").appendChild(opt);
        for (var j = 1; j <= ed; j++) {
          opt = document.createElement("option");
          opt.value=info[i].value;
          opt.innerHTML=info[i].name;
          document.getElementById( "edu_country"+j ).appendChild(opt);
        }
          for (var j = 1; j <= wo; j++) {
          opt = document.createElement("option");
          opt.value=info[i].value;
          opt.innerHTML=info[i].name;
          document.getElementById( "org_country"+j ).appendChild(opt);
        }
    	}
    }
}

///////////////////

function addTel(){
  if (c==0){
  document.getElementById("tel2").innerHTML='<input type="text" class="form-control" name="tel2">';
  c++;
  }
}
function addWeb(){
  var div=document.createElement("div");
  div.className="row";
  div.style="margin-bottom:15px";
  div.innerHTML='<label class="col-sm-2"></label><div class="col-sm-8"><input class="form-control" type="text" name="web'+webs+'"></div>';
  document.getElementById("web2div").appendChild(div);
  webs++;
}

function addLang(){

 if ((lan==0) || (lan>0 && ( $("#other_lang"+lan)[0].value != "" ))){
 /* if ( $("other_lang"+lan)[0].value != ""){
    document.getElementById("lang_tables").innerHTML+=tabl;
  }
}
else{
  document.getElementById("lang_tables").innerHTML+=tabl;
  }*/
  lan+=1;
  //document.getElementById("langs").innerHTML+='<div class="col-sm-3" style="margin-bottom:10px;"><input type="text" id="other_lang'+lan+'" name="other_lang'+lan+'"></div>';

var newpanel = document.createElement("div");
  newpanel.className="panel panel-success";
       
  var options=  '<option value="A1">A1 Beginner (Basic)</option>'+
                '<option value="A2">A2 Elementary (Basic)</option>'+
                '<option value="B1">B1 Intermediate (Independent)</option>'+
                '<option value="B2">B2 Upper intermediate (Independent)</option>'+
                '<option value="C1">C1 Advanced (Proficient)</option>'+
                '<option value="C2">C2 Proficiency (Proficient)</option>';

  var tabl= '<div class="panel-heading outer"></div>'+
                '<div class="form-group row" style="margin-top:10px;">'+
                  '<label class="control-label col-sm-2 lang" key="org_act">Language</label>'+
                      '<div class="col-sm-4">'+
                          '<input type="text" class="form-control" id="other_lang'+lan+'" name="other_lang'+lan+'">'+
                      '</div>'+    
                '</div>'+
                    '<table style="table-layout:fixed;width:100%;">'+
                      '<tr>'+
                      '<th colspan="2">Understanding</th>'+
                        '<th colspan="2">Speaking</th>'+
                        '<th rowspan="2">Writing</th>'+
                      '</tr>'+
                      '<tr>'+
                        '<th>Listening</th>'+
                        '<th>Reading</th>'+
                        '<th>Spoken interaction</th>'+
                        '<th>Spoken production</th>'+                    
                      '</tr>'+
                      '<tr>'+
                        '<td><select style="width:100%;" id="listen'+lan+'" name="listen'+lan+'">'+options+'</select></td>'+
                        '<td><select style="width:100%;" id="read'+lan+'" name="read'+lan+'">'+options+'</select></td>'+
                        '<td><select style="width:100%;" id="interact'+lan+'" name="interact'+lan+'">'+options+'</select></td>'+
                        '<td><select style="width:100%;" id="product'+lan+'" name="product'+lan+'">'+options+'</select></td>'+
                        '<td><select style="width:100%;" id="write'+lan+'" name="write'+lan+'">'+options+'</select></td>'+                   
                      '</tr>'+
                    '</table>';

        newpanel.innerHTML=tabl;
        document.getElementById("lang_tables").appendChild(newpanel);

  //document.getElementById("lang_tables").innerHTML+=tabl;
  }
}

function ongoingChange(clicked_id){
// $(function(){
       // $('#ongoing'+ed).change(function(e){
            var nr = clicked_id.slice(-1);
            var isChecked = $('#ongoing'+nr).is(":checked");
            var $y = $('#edu'+nr+'_to_y');
            var $m = $('#edu'+nr+'_to_m');
            var $d = $('#edu'+nr+'_to_d');

            if(isChecked){
                $y.prop('disabled',true);
                $m.prop('disabled',true);
                $d.prop('disabled',true);
            }else{
                $y.prop('disabled',false);
                $m.prop('disabled',false);
                $d.prop('disabled',false);
            }
      //  });
//  });
}

function w_ongoingChange(clicked_id){
// $(function(){
 //       $('#w_ongoing'+wo).change(function(e){
            var nr = clicked_id.slice(-1);
            var isChecked = $('#w_ongoing'+nr).is(":checked");
            var $y = $('#work'+nr+'_to_y');
            var $m = $('#work'+nr+'_to_m');
            var $d = $('#work'+nr+'_to_d');

            if(isChecked){
                $y.prop('disabled',true);
                $m.prop('disabled',true);
                $d.prop('disabled',true);
            }else{
                $y.prop('disabled',false);
                $m.prop('disabled',false);
                $d.prop('disabled',false);
            }
//        });
//  });
}

/*send data to php & generate doc*/
$("#btnsub").click(function(e) {
  e.preventDefault();
  var frm = $("form")[0];
  frm.setAttribute("method", "POST");
  frm.setAttribute("action", "form.php");


  if ( $('#fname')[0].value == ""){
    $('#fname').parent('div').addClass("has-error");
    return;
  }
  else
    if ($('#sname')[0].value == ""){
       $('#sname').parent('div').addClass("has-error");
       return;
    }
    else
      if ($('#country')[0].value == "none"){
        $('#country').parent('div').addClass("has-error");
        return;
      }
      else
        if ($('#mail')[0].value != ""){
          var x = $("#mail")[0].value;
          var atpos = x.indexOf("@");
          var dotpos = x.lastIndexOf(".");
          if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            $('#mail').parent('div').addClass("has-error");
            return;
          }
        }
  frm.submit();
});


function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
                    .width(150)
                    .height(200);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }