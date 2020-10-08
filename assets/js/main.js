$(document).ready(function(){
    navigacija();
    pogodnosti();
    klijenti();
    ponude();
    destinacije();
    popularneDestinacije();
    tagovi();
    latestNews();
    
    $(window).scroll(function(){
        let top = $(this)[0].scrollY;
            if(top > 500){
                $("#scrollTop").show();
            } else {
                $("#scrollTop").hide();
            }

            if(top > 400){
                $("#navigacija").css({
                    "background-color": "#272727",
                });
                $("#navigacija .nav a").css({
                    "color": "#888888",
                });
            }
            else{
                $("#navigacija").css({"background-color": '#fff'});
            }
    });

    $("#mob").hide(), 
	$("#mob li a").click(function() {
        $("#mob").slideUp('medium')
    })
    
    $("#hamburgerIkonica").addClass('senka').on("click", (function() {
        $("#mob").animate({
            width: "toggle"
        })
    }))

//Read more option
   $("#dodatak").hide();
   $("#saznajVise").click(function(e) {
       e.preventDefault();
       $("#dodatak").slideToggle(500);
   });

    document.getElementById('btnNewsletterEmail').addEventListener('click',ispisiZahvalnost)
    document.getElementById('formaKontakt').addEventListener("click",proveraForme)
  
    //modali
    var linkAutor=document.getElementById("autor");
    var zatvori=document.getElementById("zatvori");
    linkAutor.addEventListener("click",otvoriModal);
    zatvori.addEventListener("click",zatvoriModal);

    var linkLogin=document.getElementById("login");
    var zatvoriLogin=document.getElementById("zatvoriLogin");
    linkLogin.addEventListener("click",otvoriModalLogin);
    zatvoriLogin.addEventListener("click",zatvoriModalLogin);   
    
    document.getElementById('loginBtn').addEventListener("click",proveraFormeLogin) 
 
    document.getElementById("otvoriNoviTab").addEventListener("click", function(){
        window.open("https://portfolio-anjatomic.netlify.com/", "_blank");
    });
})

//funkcija za glavnu navigaciju i za onu za mobilne uredjaje
function navigacija(){
    let meni = ["Home","Pricing","Destinations","Contact Us"]
    let hrefMeni = ["index.html","#ponude","#destinacije","#kontakt"]
    let nav = "<ul>"
    let slikaLogo = `<a href="index.html"><img src="assets/images/logo3.png" alt="Logo" class="logo" /></a>`;
    for(let i=0;i<meni.length;i++){
        nav+=`<li><a class="closeNavSide" href="${hrefMeni[i]}">${meni[i]}</a></li>`
    }
    nav += "</ul>"
    let navMob = document.getElementsByClassName("nav")
    let logoMob = document.getElementsByClassName("logoHeader")
    for(let i=0; i<navMob.length;i++){
        navMob[i].innerHTML += nav;
    }
    for(let i=0;i<logoMob.length;i++){
        logoMob[i].innerHTML += slikaLogo;
    }
}
//end
//kontakt adresa - ispisivanje divova
let kontaktBlok = document.getElementById("contact");
let kontakt = ["Address", "Phone", "Email address"];
let vrednosti = ["Fake Street A, 11000 Belgrade", "&#40;&#43;381&#41; 60 1234567", "info@travel4u.rs"];

for(let i=0; i< kontakt.length; i++){
    kontaktBlok.innerHTML += `
        <article class="contactInfo">
            <h2>${ kontakt[i] }</h2>
            <p>${vrednosti[i]}</p>
        </article>
        `;
}
//end
//dinamicki ispisivanje pogodnosti
function pogodnosti(){
    let pogodnostiBlok = document.getElementById("pogodnosti");
    let slike = ["assets/images/offer.png","assets/images/like.png","assets/images/call-center.png","assets/images/support.png"];
    let altAtributi = ["price","trvellers's-love","online-travel-agency","support"]
    let naslovi = ["Best Price Guarantee","Travellers Love Us","Best Travel Agent","Our Dedicated Support"]
    let reciKlijenata = ["We prefer to work with locally owned and operated lodging and tour operators. This allows more money to stay inside of local communities and in the hands of people who live in the destinations you visit. We give 10% of income to conservation and charity organizations." , "Looking to find great travel deals or enjoy the biggest savings on your next trip? Travelforyou.com has you covered. With our easy-to-use website and app, along with 24-hour customer service, booking your next trip couldn't be simpler." , "As one of the world's leading online travel agencies, Travelforyou.com is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, Travelforyou.com is here to help you ." , "With Travelforyou.com, quality travel services in over a dozen languages including English, Mandarin, Cantonese, Japanese, Korean, German, French, and Spanish are just a call—or click—away.Travel the world with cheap flights, discount hotels, and Chinese train tickets."]

    for(let i=0;i<slike.length;i++){
        pogodnostiBlok.innerHTML+=`<article class="adventage col-xl-3 col-lg-4 col-ms-6 col-sm-12">
        <img src=${slike[i]} alt=${altAtributi[i]} \/>
        <h3><strong>${naslovi[i]}</strong></h3>
        <p>${reciKlijenata[i]}</p>
        </article>
        `;
    }
}
//end
//dinamicki ispisivanje reci klijenata
    function klijenti(){
        let klijentiBlok = document.getElementById('klijenti');
        let slicicaKlijent = ["fas","fas","fas"];
        let slicicaKlijentDrDeo = ["fa-paper-plane","fa-user","fa-paper-plane"]
        let klijentiReci = ["Just a quick email to say MANY THANKS for all your help before and during our Celebrity cruise of Asia. We absolutely loved it. Now back to reality and the British winter weather.Cheers, all the best sit.", "I would both like to thank you for organising the holiday for two weeks in Greece.  The hotels were excellent and all the transfers were on time, it was a luxurious feeling being taken from door to door. In addition the Cyplon reps were very helpful and knowledgeable.", "Thank you so much for everything you did sorting out my wonderful trip to Tokyo, Japan. Tokyo is a very clean city and easy to get around with English signs on the roads and all menus in English. The people are so friendly. This was supposed to be a trip of a lifetime, but I am now planning a return visit!"];
        let imeKlijenta = ["Jessica Bowi, 22 years old","Marco Diovani, 35 years old","Anna Romanov, 26 years old"];
        let zanimanjeKlijenta = ["Web developer","Marketing manager","Architect"];

        for(let i=0;i<slicicaKlijent.length;i++){
            klijentiBlok.innerHTML+=`<article class="client col-lg-3 col-ms-6 col-sm-12">
            <span><i class="fas ${slicicaKlijentDrDeo[i]}"></i></span>
            <div class="textClient">
                <p>
                    ${klijentiReci[i]}
                </p>
                <h2><em><strong> ${imeKlijenta[i]} </strong></em></h2>
                <h3><em> ${zanimanjeKlijenta[i]} </em></h3>
            </div>
            </article>`
        }
    }
//end
//dinamicko ispisvanje ponuda
    function ponude(){
        let ponudeBlok = document.getElementById('trips');
        let ponudeSlike = ["assets/images/paris-france.jpg","assets/images/greece.jpg","assets/images/italia.jpg"];
        let altAtributiPonude = ["france","greece","italian-riviera-cheap vacation"];
        let naslov = ["Paris, France","Santorini, Greece","Italian Riviera - cheap vacation"];
        let cena = ["890","450","580"];
        let brOsoba = ["1person","1person","1person"];
        let zvezdice = [`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>`,`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`,`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`]
        let brNocenja = ["4","7","6"];
        let opis = ["Nearly ready to head off on your Paris holiday? Haven't got a clue what sorts of things to include in your travel schedule? Don't worry — we're here to give you some of our top tips.With such a great range of world-famous attractions in the one place, you'll never have a dull moment in Paris!", "Pretty whitewashed towns and world-famous sunsets set the scene on holidays to Santorini. But that’s just the start of the island’s charms.Santorini is a Greek island in the middle of the Aegean Sea. Thira, the capital, is a popular place to stay – it’s perched on top of the caldera rim overlooking the Aegean. As for Perissa, the seven-kilometre stretch here comes with a good helping of watersports.", "Italian Riviera is a land full of beautiful places to visit, live and explore. There are many villages and towns that have very different characteristics and attractions. If you take a look at the Italian Riviera Map you will realize that it is really difficult to choose a place to visit, especially if it is the first time you come here. If you then have to create an itinerary to travel with your family or friends, there is a real embarrassment of choice! There are very famous places that you can visit in a day. The are also more hidden and interesting corners that you will take days to discover."]
        let opisDodatno = ["Travellers in this destination have a great range of options. Choose a good vantage point and observe the world pass you by at Place de la Concorde. If you're up for some socializing, this enduring public space is also an awesome spot to mingle with long-time locals. Whether you're looking  to embark on a romantic getaway or simply wanting to explore one of Europe's most popular destinations, Paris makes for an ideal mini-holiday.", "There are enough clubs and bars in the island capital Fira to keep you entertained for the whole of your holiday. Koo Club and Enigma offer the opportunity to dance the night away, while the coastal resorts of Kamari and Perissa in the east also boast a lively party scene. If you're after a more relaxed evening, head to the beautiful village of Oia. Romantic lounge bars and stunning sunset spots are scattered throughout.", "Sanremo is certainly the most famous and largest city of Italian Riviera on the list!The capital of Italian music, where every year the famous Italian song festival is held, it is also known as the City of Flowers thanks to its beautiful variety of carnations, roses and other flowers which makes it a fantastic sight for the eyes.In General, as you may have noticed, the cities of the Levant, like Portofino, are well known and are perfect for short stays, for a day trip or for a weekend while the Western Italian Rivieran offers villages and more hidden and mysterious countries to go to Discovery for a week or two for rich, versatile and interesting itineraries. Italian Riviera offers a lot of different options for all tastes between sea, history, culture but also fun and adventure."];

        for(let i=0;i<ponudeSlike.length;i++){
            ponudeBlok.innerHTML+=`<article class="place">
            <figure class="img">
                <img src="${ponudeSlike[i]}"  alt="${altAtributiPonude[i]}"  />
            </figure>
            <div class="text">
                <h2>${naslov[i]}</h2>
                <h3><sup>&#36;</sup>${cena[i]}<sub>/ ${brOsoba[i]}</sub></h3>
                <p>${brNocenja[i]} nights</p>
                <p>${zvezdice[i]}</p>
                <p>${opis[i]}</p>
                <p class="dodatnoPogodnosti"> ${opisDodatno[i]} </p>
                <a href="#" class="bttn tasterPonude"> Read more&raquo;</a>
            </div>
            </article>`
        }  
        let dodatnoPonude = document.getElementsByClassName(".dodatnoPogodnosti");
        $(".dodatnoPogodnosti").hide();
        $(document).on("click",".tasterPonude", function(e){
           e.preventDefault();
               $(this).prev().slideToggle(500);
        })
    }
//end
//dinamicki ispisivanje destinacija
    function destinacije(){
        var destinacijeBlok = document.getElementById('destinacijeOkvir');
        var slikaDestinacija = ["assets/images/dest1.jpg","assets/images/dest2.jpg","assets/images/dest3.jpg", "assets/images/dest4.jpg", "assets/images/dest5.jpg","assets/images/dest6.jpg"];
        var altAtributDest =["New York USA","Seoul South Korea","Paris France","Sydney Australia", "Greece Europe","Spain Europe"] ;
        var mesto =["New York, USA","Seoul, South Korea","Paris, France","Sydney, Australia","Greece, Europe", "Spain, Europe"] ;
        var kratakOpis =["Getting ready for your first trip to New York? Your first sight of the skyline will be unforgettable. Head up to the Top of the Rock for sweeping views across the city – see the Empire State Building, Central Park, the Chrysler Building and beyond from 70 floors up in the sky.", "It's nice to just wander the streets when you're in a new holiday destination, but sometimes it's wise to form a plan. Grab your travel schedule — we have plenty of awesome ideas for your impending Seoul holiday. With so many renowned attractions in the one place, you certainly won't be twiddling your thumbs in Seoul! First things first, make sure you take some selfies in front of Dongdaemun Market and Gyeongbok Palace", "Nearly ready to head off on your Paris holiday? Haven't got a clue what sorts of things to include in your travel schedule? Don't worry — we're here to give you some of our top tips.If you're up for some socializing, this enduring public space is also an awesome spot to mingle with long-time locals. This is one of the best vacation spots for couples to go and to have fun.", "Sydney Opera House and Bondi Beach are part of the thriving heart of this place. Much loved by both travellers and locals alike, these famous attractions ought to be non-negotiable fixtures of your itinerary. Whether they're built from metal, stone or concrete, bridges are among the world's most well-known architectural wonders.  Treat your inner child with a heart-stopping day out at Luna Park! Fun, food and rides aplenty — get ready for a good time!", "Book the best Greece holidays with our trusted holiday partners. Escape to one of Greece's beautiful islands for stunning coastlines, or go back thousands of years in time by visiting ancient Athens.When it comes to Greece holidays, you won’t be short of things to see and do. You can discover the incredible Acropolis and Parthenon in Athens. In cosmopolitan Crete, admire ornate architecture, visit ancient ruins and sample exquisite Greek cuisine. Alternatively, unwind on beautiful beaches and choose from an array of watersports in Corfu, or take in lush scenery and a low-key atmosphere in Halkidiki.","Spain is a country that just continues to surprise. There's no questioning why visitors return to Spain year after year. From the countless glistening beaches that dot its coastlines, lively cities of Barcelona and Madrid, and remarkable medieval castles, it is a country that stirs both the imagination and the soul. Our escorted holidays to Spain include return flights, the expertise of a knowledgeable local tour guide, hotel accommodation, all ground transfers and our exciting range of excursions and activities- ensuring your holiday is one to remember."] ;

        for (var i = 0; i < slikaDestinacija.length; i++) {
            destinacijeBlok.innerHTML+=`<article class="vacation">
            <figure class="pic">
               <a href="${slikaDestinacija[i]}" rel="destinacijaSlika"> <img src="${slikaDestinacija[i]}" alt="${altAtributDest[i]}" /></a>
            </figure>
            <div class="caption">
                <h3>From ${mesto[i]}</h3>
                <p>${kratakOpis[i]}</p>
                <a href="#idiNaBooking" class="bttn">Schedule a Trip </a>
            </div>
            </article>`;
        }

    }
    //colorbox plugin
    $(document).ready(function(){
        $('.pic').on("click",$(".pic a[rel=destinacijaSlika]"),function(e){
            e.preventDefault(),
            $("a[rel=destinacijaSlika]").colorbox({
                transition:"fade",
                speed:500,
                scrolling: false,
                current:"{current} of {total}"
            })
        })})

    //letterfx plugin
    $(document).ready(function(){
        $('#typewriteText').letterfx({
            "fx":"fade",
            "backwards":false,
            "timing":50,
            "fx_duration":"50ms",
            "letter_end":"restore",
            "element_end":"restore"
            
        })
    });    
//end
//popularne destinacije
    function popularneDestinacije(){
        let popularneDestBlok = document.getElementById('popularneDestinacije');
        let slikaDestinacije = ["assets/images/australia-opera.png", "assets/images/dubai.png","assets/images/japan.png","assets/images/turkey.jpg","assets/images/split-croatia.jpg"];
        let altAtribut = ["Opera House Australia","Camels Dubai","Mount Fuji Japan","Turkey","Split Croatia"];
        let cene = ["390", "320","420","750","270"];
        let naziv = ["Opera House, Australia","Camels, Dubai","Mount Fuji, Japan","Turkey","Split,Croatia"];

        for (let i = 0; i < slikaDestinacije.length; i++) {
            popularneDestBlok.innerHTML+=`<article class="vacation">
            <figure class="pic">
               <img src="${slikaDestinacije[i]}" alt="${altAtribut[i]}" />
            </figure>
            <div class="caption">
                <h3> From &#36;${cene[i]} </h3> 
                <h3> ${naziv[i]} </h3>
            </div>
            </article>`;
        }
    }
//end
//latest news
    function latestNews(){
        let destinacijeVestiBlok = document.getElementById('latestNews');
        let slikeVesti = ["assets/images/australia.jpg","assets/images/perfect-vacation.jpg"]
        let altVesti = ["news1","news2"]
        let mestoVesti = ["Australia Summer","A perfect vacation"]
        let datumPostavljanjaVesti = ["June 15, 2019","June 12, 2019"]

        for(let i=0;i<slikeVesti.length;i++){
            destinacijeVestiBlok.innerHTML+=`<article class="news">
            <figure class="image"> 
                <img src="${slikeVesti[i]}" alt="${altVesti[i]}" />
            </figure>
            <div class="textNews">
                <h4>${mestoVesti[i]}</h4>
                <p>${datumPostavljanjaVesti[i]}</p>
            </div>
            </article>`;
        }
    }
//end
//dinamicki ispisivanje tagova iz footer-a
function tagovi(){
    let tagoviLinkovi=['travel','summer','cruise','trip','beach','offer','adventure','vacation','city break'];
    let tags=document.getElementById('tags')
    for(let i in tagoviLinkovi){
        tags.innerHTML+=`<a href="#">${tagoviLinkovi[i]}</a>`;
    }
}
//end
//kad se subscribe-ujemo mejlom
function ispisiZahvalnost(){
    let validNewsletter = true;
    let podaci = [];

    let emailVesti = document.getElementById("newsletterEmail").value.trim();
    let emailVestiPolje = document.getElementById("newsletterEmail");
    let reEmail = /^[a-z]{3,}(\.)?[a-z\d]{1,}(\.[a-z0-9]{1,})*\@gmail\.com$/
    let emailVestiGreska = document.querySelector(".emailVesti-greska");

    //Validacija email-a
    let isValidEmailVesti = reEmail.test(emailVesti);
    if(isValidEmailVesti){
        emailVestiGreska.textContent = "Thank you for subscribe! Hope you enjoy in our weekly news.. ";
        document.getElementById("newsletterEmail").value="";
        podaci.push(emailVesti);
        emailVestiGreska.hide();
    }
    else{ 
        emailVestiGreska.style.display='block';
        validNewsletter = false;
       emailVestiPolje.focus();
    }
    var resetuj = document.getElementById("formaObavestenje").reset();
}

function proveraForme(){
    let validFormaKontakt = true;
let podaci = [];
//polja
let imePolje, emailPolje, pitanjaPolje;

imePolje = document.getElementById("name");
emailPolje = document.getElementById("email");
pitanjaPolje = document.getElementById("pitanja");

//dohvatanje vrednosti unosa od korisnika
let ime, email, pitanja;

ime = document.getElementById("name").value.trim();
email = document.getElementById("email").value.trim();
pitanja = document.getElementById("pitanja").value.trim();

//regularni izrazi
let reIme, reEmail, rePitanja;

reIme = /^[A-ZŠĐŽČĆ][a-zšđžčć]{2,19}(\s[A-ZŠĐŽČĆ][a-zšđžčć]{2,19})?$/
reEmail = /^[a-z]{3,}(\.)?[a-z\d]{1,}(\.[a-z0-9]{1,})*\@gmail\.com$/
rePitanja = /^[A-ZZŠĐŽČĆ][a-zšđžčć\.\d\s\-]{0,199}$/

//smestanje greske
let imeGreska, emailGreska, pitanjaGreska;

imeGreska = document.querySelector("#imeGreska");
emailGreska = document.querySelector("#emailGreska");
pitanjaGreska = document.querySelector("#pitanjaGreska")

//Validacija imena
let isValidIme = reIme.test(ime);
if(ime!=""){
    if(isValidIme){
        imeGreska.textContent = "";
        podaci.push(ime);
    }
    else{
        validFormaKontakt = false;
        imeGreska.textContent = "*Name is not valid. Min: 3, Max: 15 charcters, if you have more names you can write it in.";
    }
}
else{
    imeGreska.textContent = "Please don't leave empty field.";
    validFormaKontakt = false;
}
//Validacija email-a
let isValidEmail = reEmail.test(email);

if(email!=""){
    if(isValidEmail){
        emailGreska.textContent = "";
        podaci.push(email);
    }
    else{
        validFormaKontakt = false;
        emailGreska.textContent="*Email is not valid. It needs to be in lowercase and format like: something@gmail.com ."
    }
}
else{
    emailGreska.textContent = "Please don't leave empty field.";
    validFormaKontakt = false;
}

//Validacija polja za pitanja
let isValidPitanja = rePitanja.test(pitanja);

if(pitanja!=""){
    if(isValidPitanja){
        pitanjaGreska.textContent = "";
        podaci.push(pitanja);
    }
    else{
        validFormaKontakt = false;
        pitanjaGreska.textContent="*This field is not valid - First letter needs to be uppercase and after that can be anything.Max lenth of characters is 200 ."
    }
}
else{
    pitanjaGreska.textContent = "Please don't leave empty field.";
    validFormaKontakt = false;
}
}
//modal - autor
function otvoriModal(){
    document.getElementById("modal").style.display="block"
}
function zatvoriModal(){
    document.getElementById("modal").style.display="none"
}

var modal = document.getElementById('modal');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//modal - login
function otvoriModalLogin(){
    document.getElementById("modalLogin").style.display="block"
}
function zatvoriModalLogin(){
    document.getElementById("modalLogin").style.display="none"
}

var modal = document.getElementById('modalLogin');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//provera forme u login
function proveraFormeLogin(){
    let validForma = true;
    let podaci = [];

//dohvatanje vrednosti unosa
let ime, prezime, email, password, confirmPassword, uslovi;

ime = document.getElementById("fName").value.trim();
prezime = document.getElementById("fName").value.trim();
email = document.getElementById("emailLog").value.trim();
password = document.getElementById("password").value.trim();
confirmPassword = document.getElementById("cpassword").value.trim();
uslovi = document.querySelector("#checkTerms");

//reg.Exp
let reIme, rePrezime, reEmail, rePassword;

reIme = /^[A-ZŠĐŽČĆ][a-zšđžčć]{2,14}(\s[A-ZŠĐŽČĆ][a-zšđžčć]{2,14})?$/
rePrezime = /^[A-ZŠĐŽČĆ][a-zšđžčć]{2,19}(\s[A-ZŠĐŽČĆ][a-zšđžčć]{2,19})?$/
reEmail = /^[a-z]{3,}(\.)?[a-z\d]{1,}(\.[a-z0-9]{1,})*\@gmail\.com$/
reLozinka = /^[A-Za-z\d-_\/#$%^&*@]{8,20}$/
rePotvrdaLozinka = /^[A-Z\d-_\/#$%^&*@]{8,20}$/

//greske
let imeError, prezimeError, emailError, lozinkaError, potvrdaLozinkaError;

imeError = document.querySelector("#fname-error");
prezimeError = document.querySelector("#lname-error");
emailError = document.querySelector("#email-error");
lozinkaError = document.querySelector("#password-error");
potvrdaLozinkaError = document.querySelector("#cpassword-error");

//Validacija imena
let isValidIme = reIme.test(ime);
if(ime!=""){
    if(isValidIme){
    imeError.textContent = "";
    podaci.push(ime);
    }
    else{
        validForma = false;
       imeError.textContent = "*Name is not valid. It needs to have min 3 and max 15 charcters. You can type in more names if you have it.";
    }
}
else{
    imeError.textContent = "Pleave don't leave empty field!";
    validForma = false;
}


//Validacija prezimena
let isValidPrezime = rePrezime.test(prezime);

if(prezime!=""){
    if(isValidPrezime){
        prezimeError.textContent = "";
        podaci.push(prezime);
    }
    else{
        validForma = false;
    
        prezimeError.textContent = "*Last Name is not valid. It needs to have min 3 and max 20 charcters. You can type in more last names if you have it."
    }
}
else{
    prezimeError.textContent = "Pleave don't leave empty field!";
    validForma = false;
}


//Validacija email-a
let isValidEmail = reEmail.test(email);

if(email!=""){
    if(isValidEmail){
        emailError.textContent = "";
        podaci.push(email);
    }
    else{
        validForma = false;
    
        emailError.textContent="*Email is not valid. It needs to be in lowercase and format like: something@gmail.com .";
    }
}
else{
    emailError.textContent = "Pleave don't leave empty field!";
    validForma = false;
}

//Validacija lozinke
let isValidLozinka = reLozinka.test(password);

if(password!=""){
    if(isValidLozinka){
        lozinkaError.textContent="";
        podaci.push(confirmPassword);
    }
    else{
        validForma=false;
        lozinkaError.textContent="*Password is not valid. It needs to have more than 8 character and less than 20";
    }
}
else{
    lozinkaError.textContent = "Pleave don't leave empty field!";
    validForma = false;
}
 
//potvrda lozinke
let isValidPotvrdaLozinka = rePotvrdaLozinka.test(confirmPassword);

if(confirmPassword!=""){
    
        if(password==confirmPassword){
            potvrdaLozinkaError.textContent="";
            podaci.push(password);
        }
        else{
            validForma=false;
        potvrdaLozinkaError.textContent="*Passwords don't match! ";
        }
}
else{
    potvrdaLozinkaError.textContent = "Pleave don't leave empty field!";
    validForma = false;
}

//saglasnost pre logovanja
if(!uslovi.checked){
    validno = false;
    document.querySelector("#agree-error").innerHTML = "Before click on login, check the terms of use... ";
}
else{
    document.querySelector("#agree-error").innerHTML = "";
}
var resetuj = document.getElementById("formaLogin").reset();
}
//end
