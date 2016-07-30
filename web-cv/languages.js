var lang="en";

$(".dropdown ul li a").click(function() {
    var text = $(this).html();
    $(".dropdown-toggle").html(text);
}); 

var arrLang = {
	'en' : {
		'summary' : 'A summary of a job applicant\'s professional experience and educational background, along with other relevant information regarding the candidate\'s qualifications.',
		'start' : 'Create your own CV',
		'info1': 'Documents are not stored on our servers. Download your file before leaving.',
		'info2' : 'Some fields are optional. Empty fields will not be included in the final document.',
		'pers_info' : 'Personal information',
		'edu' : 'Education',
		'first_name' : 'First name',
		'surname' : 'Surname',
		'street' : 'Street address',
		'city' : 'City',
		'country' : 'Country',
		'tel' : 'Telephone(s)',
		'from' : 'From',
		'to' : 'To',
		'ongoing' : ' Ongoing',
		'qualif' : 'Title of qualification awarded',
		'edu_data' : 'Organization providing education/training',
		'edu_name' : 'Name',
		'edu_subj' : 'Main subjects/occupational skills covered',
		'add_edu' : ' Add education/training',
		'work' : 'Work experience',
		'position' : 'Occupation/position held',
		'org_data' : 'Employer',
		'org_act' : 'Main activities/responsibilities',
		'add_work' : ' Add work experience',
		'm_t' : 'Mother tongue(s)',
		'other_lang' : 'Other language(s)',
		'add_lang' : ' Add',
		'photo' : 'Photo',
		'driving' : 'Driving licence',
		'categ' : 'Categories',
		'moped' : 'Mopeds/Motocycles',
		'motor' : 'Motor vehicles',
		'large' : 'Large goods vehicle',
		'bus' : 'Buses',
		'other' : 'Other informations',
		'done' : 'Done! (Generate .doc file)'
	}, 
	'ro' : {
		'summary' : 'Un rezumat al experienței profesionale și de fundul educaționale solicitantului, împreună cu alte informații relevante despre calificările candidatului.',
		'start' : 'Creează-ți propriul CV',
		'info1' : 'Documentele nu sunt păstrate pe serverele. Descărcaţi fişierul înainte de a închide editorul.',
		'info2' : 'Niște câmpuri sunt opţionale. Câmpurile necompletate nu vor fi incluse în documentul final.', 
		'pers_info' : 'Informații personale',
		'edu' : 'Educație',
		'first_name' : 'Prenume',
		'surname' : 'Nume',
		'street' : 'Strada',
		'city' : 'Orașul',
		'country' : 'Țara',
		'tel' : 'Telefon(oane)',
		'from' : 'Din',
		'to' : 'Până în',
		'ongoing' : ' Prezent',
		'qualif' : 'Titlul certificatului sau diplomei obținute',
		'edu_data' : 'Instituția de învățământ/furnizorul de formare',
		'edu_name' : 'Denumirea',
		'edu_subj' : 'Disciplinele principale studiate, competențe profesionale dobândite',
		'add_edu' : ' Adăugați câmp',
		'work' : 'Experiență profesională',
		'position' : 'Funcția/postul ocupat',
		'org_data' : 'Angajatorul',
		'org_act' : 'Activități/responsabilități principale',
		'add_work' : ' Adăugați câmp',
		'm_t' : 'Limba(i) maternă(e)',
		'other_lang' : 'Alte limbi',
		'add_lang' : ' Adăuga',
		'photo' : 'Fotografie',
		'driving' : 'Permis de conducere',
		'categ' : 'Categorii',
		'moped' : 'Mopeds/Motocycles',
		'motor' : 'Motor vehicles',
		'large' : 'Large goods vehicle',
		'bus' : 'Buses',
		'other' : 'Informații suplimentare',
		'done' : 'Gata! (Generare fișier .doc)'
	},
	'hu' : {
		'summary' : 'Összefoglaló egy jelentkező szakmai tapasztalatáról, tanulmányi hátteréről és egyéb jelentős információról, amely a jelentkező képesítésére vonatkozik.',		
		'start' : 'Készítse el saját CV-jét',
		'info1' : 'Dokumentumait nem tárolják a szerverek. Mentse el a dokumentumát, mielőtt kilép a szerkesztő felületből.',
		'info2' : 'Néhány mező kitöltése opcionális. Az üresen hagyott mezők nem kerülnek bele a végleges dokumentumba.',
		'pers_info' : 'Személyes információk',
		'edu' : 'Tanulmányok',
		'first_name' : 'Keresztnév',
		'surname' : 'Vezetéknév',
		'street' : 'Utca',
		'city' : 'Város',
		'country' : 'Ország',
		'tel' : 'Telefonszám(ok)',
		'from' : 'Kezdete',
		'to' : 'Befejezése',
		'ongoing' : ' Folyamatban',
		'qualif' : 'Végzettség/képesítés',
		'edu_data' : 'Oktatást/képzést nyújtó intézmény',
		'edu_name' : 'Név',
		'edu_subj' : 'Főbb tárgyak, gyakorlati képzés',
		'add_edu' : ' Mező hozzáadása',
		'work' : 'Szakmai tapasztalat',
		'position' : 'Foglalkozás/beosztás',
		'org_data' : 'Munkaadó',
		'org_act' : 'Főbb tevékenységek, feladatkörök',
		'add_work' : ' Mező hozzáadása',
		'm_t' : 'Anyanyelv',
		'other_lang' : 'Egyéb nyelvek',
		'add_lang' : ' Hozzáadás',
		'photo' : 'Fénykép',
		'driving' : 'Gépjármű vezetői engedély',
		'categ' : 'Categories',
		'moped' : 'Mopeds/Motocycles',
		'motor' : 'Motor vehicles',
		'large' : 'Large goods vehicle',
		'bus' : 'Buses',
		'other' : 'Egyéb információk',
		'done' : 'Kész! (.doc fájl generálása)'
	}
};

$(function(){
	$('.translate').click(function(){
		lang = $(this).attr('id');

		$('.lang').each(function(index, element){
			$(this).text(arrLang[lang][$(this).attr('key')]);
		});
	});
});