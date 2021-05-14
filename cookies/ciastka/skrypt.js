//console.log("Cookies !");
var form = document.querySelector('#baseForm');



var ck = {

value: {},

init: ()=>{

console.log("Eat Cookies!");
//ck.set('zse', {'test':'321'});
//ck.set('lockMenu', true);
		//zapis()
		//odczyt()
	//	ck.del('zse');

		//let value = ck.get('zse');
		//console.log(value);
	//	let value2 = ck.get('lockMenu');
	//	console.log(value2);
 let surname = document.getElementsByName("nazwisko")[0];
 let btn = document.getElementsByName("setBtn")[0];
 let name = document.getElementsByName("imie")[0];
 let klas = document.getElementsByName("klasa")[0];
 let regulamin = document.getElementsByName("regulamin")[0];
 let plik = document.getElementsByName("plik")[0];
 let opis = document.getElementsByName("opis")[0];
 let nameck = document.getElementsByName("cookies")[0].childNodes;


      

        btn.addEventListener("click", function(event){       ////zatwierdzanie/tworzenie ciastek czyli wypelnionego formularza "student", 
	 ck.set("student",{"surname":surname.value,"name":name.value,"klas":klas.value,"regulamin":regulamin.checked});
	 ck.set("cwiczenie",{"plik":plik.value,"opis":opis.value});

	 let value = ck.get('student');
		console.log(value);
		  event.preventDefault();
});

        ////na "click" danego ciastka ma pokazac uzupelniony form
       nameck[1].addEventListener("click", function(){

		let value = ck.get('student');
		console.log(value);
		for(let i in value){

		if(i.startsWith("surname")){
		surname.value = value[i];
		}
		if(i.startsWith("name")){
		name.value = value[i];
		}
		if(i.startsWith("klas")){
		klas.value = value[i];
		}
		if(i.startsWith("regulamin")){
		regulamin.checked = value[i];
		}
		

	
	}
		  

       });

////na "click" danego ciastka ma pokazac uzupelniony form
      nameck[3].addEventListener("click", function(){
			
		let value = ck.get('cwiczenie');
		console.log(value);
	for(let i in value){
	if(i.startsWith("plik")){
		plik.value = value[i];
	}
	if(i.startsWith("opis")){
		opis.value = value[i];
	}


      }
  });




},

set: ( name, value, opts={} )=>{
	//ustawianie nazwy ciasteczka i wartości
	console.log('SET '+name);
	///jeżeli podano strukture obiektu
	(typeof value == 'object') ? value = JSON.stringify(value) : null;






	ck.value = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	///ustawienie opcji

	for(let optKey in opts)
	{
		ck.value+=';'+optKey;
		ck.value+="="+opts[optKey];
	}

	//zapisanie bądź zmiana zawartości ciasteczka
	document.cookie = ck.value;
	ck.value = {};




},

get: (name)=>{

	console.log("GET" + name);	
	//odczytaj wszystkie ciasteczka !
	let c = decodeURIComponent(document.cookie);
	let values = c.split('; ') //podzial ciasteczek na pojedyncze sztuki
	let value = false;

	for(let i in values)
	{
		if(values[i].startsWith(name+'=') )
		{
			let val = values[i].replace(name+'=', '');
				value = (val.startsWith('{') && val.endsWith('}')) ? JSON.parse(val) : val;

			break;
		}
	}



	return value;



},

del: (name)=>{



	console.log('DEL'+name);
	ck.set(name, '', {'max-age':0});




},





}

window.addEventListener('load', ck.init, false);




































































