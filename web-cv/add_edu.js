function addEdu(){

  if ( $('#edu_name'+ed)[0].value != ""){
    ed+=1;
    
  var one_more='<div class="container edu-cont">'+
                          '<div class="form-group row">'+
                            '<label class="control-label col-sm-2 lang" key="from">From</label>'+
                            '<div class="col-sm-2">'+
                              '<select class="form-control" id="edu'+ed+'_from_d" name="edu'+ed+'_from_d"><option value="DD">DD</option></select>'+
                            '</div>'+
                            '<div class="col-sm-2">'+
                              '<select class="form-control" id="edu'+ed+'_from_m" name="edu'+ed+'_from_m"><option value="MM">MM</option></select>'+
                            '</div>'+
                            '<div class="col-sm-2">'+
                              '<select class="form-control" id="edu'+ed+'_from_y" name="edu'+ed+'_from_y"><option value="YYYY">YYYY</option></select>'+
                            '</div>'+
                          '</div>'+
                          '<div class="form-group row">'+
                            '<label class="control-label col-sm-2 lang" key="to">To</label>'+
                            '<div class="col-sm-2">'+
                              '<select class="form-control" id="edu'+ed+'_to_d" name="edu'+ed+'_to_d"><option value="DD">DD</option></select>'+
                            '</div>'+
                            '<div class="col-sm-2">'+
                              '<select class="form-control" id="edu'+ed+'_to_m" name="edu'+ed+'_to_m"><option value="MM">MM</option></select>'+
                            '</div>'+
                            '<div class="col-sm-2">'+
                              '<select class="form-control" id="edu'+ed+'_to_y" name="edu'+ed+'_to_y"><option value="YYYY">YYYY</option></select>'+
                            '</div>'+
                            '<div class="col-sm-2"><input type="checkbox" name="ongoing" value="ongoing" id="ongoing'+ed+'"  onchange="ongoingChange(this.id)"><i class="lang" key="ongoing">Ongoing</i></div>'+
                          '</div>'+
                          '<div class="form-group row">'+
                            '<label class="control-label col-sm-4 lang" key="qualif">Title of qualification awarded</label>'+
                            '<div class="col-sm-8">'+
                              '<input type="text" class="form-control" id="qualif'+ed+'" name="qualif'+ed+'">'+
                            '</div>'+
                          '</div>'+
                          '<div class="lang" key="edu_data" id="edu_data">Organization providing education/training</div>'+
                          '<div class="form-group row">'+
                            '<label class="control-label col-sm-2 lang" key="edu_name">Name</label>'+
                            '<div class="col-sm-10">'+
                              '<input type="text" class="form-control" id="edu_name'+ed+'" name="edu_name'+ed+'">'+
                            '</div>'+
                          '</div>'+
                          '<div class="form-group row">'+
                            '<label class="control-label col-sm-2 lang" key="city">City</label>'+
                            '<div class="col-sm-4">'+
                              '<input class="form-control" id="edu_city'+ed+'" name="edu_city'+ed+'">'+
                            '</div>'+
                            '<label class="control-label col-sm-2 lang" key="country">Country</label>'+
                            '<div class="col-sm-4">'+
                              '<select class="form-control" id="edu_country'+ed+'" name="edu_country'+ed+'"><option value="none"></option></select>'+
                            '</div>'+
                          '</div>'+
                          '<div class="form-group row">'+
                            '<label class="control-label col-sm-4 lang" key="edu_subj">Main subjects/occupational skills covered</label>'+
                            '<div class="col-sm-8">'+
                              '<textarea name="edu_subj'+ed+'" rows="7" style="width:100%;" id="edu_subj'+ed+'"></textarea>'+
                            '</div>'+
                          '</div>'+
                        '</div>';

  document.getElementById("more_edu").innerHTML+=one_more;

  $('.lang').each(function(index, element){
      $(this).text(arrLang[lang][$(this).attr('key')]);//.replace(/\n/g, "<br>"));
  });

  countries();
  }
}

 function addWork(){
if ( $('#org_name'+wo)[0].value != ""){
    wo+=1;

var one_more='<div class="container work-cont">'+
                          '<div class="form-group row">'+
                            '<label class="control-label col-sm-2 lang" key="from">From</label>'+
                            '<div class="col-sm-2">'+
                              '<select class="form-control" id="work'+wo+'_from_d" name="work'+wo+'_from_d"><option value="DD">DD</option></select>'+
                            '</div>'+
                            '<div class="col-sm-2">'+
                              '<select class="form-control" id="work'+wo+'_from_m" name="work'+wo+'_from_m"><option value="MM">MM</option></select>'+
                            '</div>'+
                            '<div class="col-sm-2">'+
                              '<select class="form-control" id="work'+wo+'_from_y" name="work'+wo+'_from_y"><option value="YYYY">YYYY</option></select>'+
                            '</div>'+
                          '</div>'+
                          '<div class="form-group row">'+
                            '<label class="control-label col-sm-2 lang" key="to">To</label>'+
                            '<div class="col-sm-2">'+
                              '<select class="form-control" id="work'+wo+'_to_d" name="work'+wo+'_to_d"><option value="DD">DD</option></select>'+
                            '</div>'+
                            '<div class="col-sm-2">'+
                              '<select class="form-control" id="work'+wo+'_to_m" name="work'+wo+'_to_m"><option value="MM">MM</option></select>'+
                            '</div>'+
                            '<div class="col-sm-2">'+
                              '<select class="form-control" id="work'+wo+'_to_y" name="work'+wo+'_to_y"><option value="YYYY">YYYY</option></select>'+
                            '</div>'+
                            '<div class="col-sm-2"><input type="checkbox" name="ongoing" value="ongoing" id="w_ongoing'+wo+'" onclick="w_ongoingChange(this.id)"><i class="lang" key="ongoing"> Ongoing</i></div>'+
                          '</div>'+
                          '<div class="form-group row">'+
                            '<label class="control-label col-sm-4 lang" key="position">Occupation/position held</label>'+
                            '<div class="col-sm-8">'+
                              '<input type="text" class="form-control" id="position'+wo+'" name="position'+wo+'">'+
                            '</div>'+
                          '</div>'+
                          '<div class="org lang" key="org_data" id="org_data">Employer</div>'+
                          '<div class="form-group row">'+
                            '<label class="control-label col-sm-2 lang" key="edu_name" >Name</label>'+
                            '<div class="col-sm-10">'+
                              '<input type="text" class="form-control" id="org_name'+wo+'" name="org_name'+wo+'">'+
                            '</div>'+
                          '</div>'+
                          '<div class="form-group row">'+
                            '<label class="control-label col-sm-2 lang" key="city">City</label>'+
                            '<div class="col-sm-4">'+
                              '<input class="form-control" id="org_city'+wo+'" name="org_city'+wo+'">'+
                            '</div>'+
                            '<label class="control-label col-sm-2 lang" key="country">Country</label>'+
                            '<div class="col-sm-4">'+
                              '<select class="form-control" id="org_country'+wo+'" name="org_country'+wo+'"><option value="none"></option></select>'+
                            '</div>'+
                          '</div>'+
                          '<div class="form-group row">'+
                            '<label class="control-label col-sm-4 lang" key="org_act">Main activities/responsibilities</label>'+
                            '<div class="col-sm-8">'+
                              '<textarea name="org_act'+wo+'" rows="7" style="width:100%;" id="org_act'+wo+'"></textarea>'+
                            '</div>'+
                          '</div>'+
                        '</div>';

  document.getElementById("more_work").innerHTML+=one_more;

  $('.lang').each(function(index, element){
      $(this).text(arrLang[lang][$(this).attr('key')]);//.replace(/\n/g, "<br>"));
  });

  countries();
  }
 }
