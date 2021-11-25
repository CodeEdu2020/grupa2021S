window.onload = function () {
  var artikli = vracamNizArtikala();

  ispisiNizArtikala(artikli);

  function ispisiNizArtikala(niz) {
    let ispis = "";

    niz.forEach((element) => {
      // function (element)
      ispis += `
          <div class="blok">
				<img src="${element.slika.putanja}" alt="${element.slika.alt}" />
				<h3>${element.marka} - ${element.tipProizvoda} - ${element.model}</h3>
				<ul>
					<li>Ekran: ${element.specifikacije.ekran}</li>
					<li>RAM: ${element.specifikacije.RAM}</li>
					<li>Procesor: ${element.specifikacije.procesor}</li>
					<li>Operativni sistem:${element.specifikacije.operativniSistem}</li>
					<li>Kamera:
						<ul>
							<li>Prednja kamera: ${element.specifikacije.kamera.prednja}</li>
							<li>Zadnja kamera: ${element.specifikacije.kamera.zadnja}</li>
						</ul>
					</li>
				</ul>
        <h4>`;
      let cena;
      element.popust != 0
        ? (cena =
            element.cena - Math.round((element.cena * element.popust) / 100))
        : (cena = element.cena);
      ispis += ` ${cena} RSD</h4>
        <a class="korpaText" href="#" data-id="${element.id}">DODAJ U KORPU</a>
			</div>      
          `;
    });
    document.getElementById("artikli").innerHTML = ispis;
  }
  //------3 zadatak--------------
  var klaseText = document.getElementsByClassName("korpaText");
  for (let i = 0; i < klaseText.length; i++) {
    klaseText[i].addEventListener("click", dohvatiArtikal);
  }

  function dohvatiArtikal(e) {
    e.preventDefault();
    let korpaLink = this;
    let idArtikla = korpaLink.dataset.id;

    let pronadjeniArtikal = artikli.find(function (element) {
      if (element.id == idArtikla) return element;
    });

    if (pronadjeniArtikal) {
      console.log(pronadjeniArtikal);
    } else {
      console.log("Nije pronadjenn ili ne postoji artikal sa datim id");
    }
  }

  //4 -----zadatak----------------------

  var tbBomdel = document.getElementById("tbDeoModel");
  tbBomdel.addEventListener("keyup", filterProizvoda);

  function filterProizvoda() {
    let korUnos = this.value;

    let noviFiltriraniNiz = artikli.filter(function (element) {
      if (
        element.model.toUpperCase().indexOf(korUnos.trim().toUpperCase()) !=
          -1 ||
        element.marka.toUpperCase().indexOf(korUnos.trim().toUpperCase()) != -1
      )
        return element;
    });
    ispisiNizArtikala(noviFiltriraniNiz);
  }

  //--------------zadatak 5---------------

  let klikSort = document.getElementById("sortMarka");
  klikSort.addEventListener("click", sortirajMarke);

  function sortirajMarke() {
    artikli.sort(function (el1, el2) {
      if (el1.marka > el2.marka) {
        return -1;
      }
      if (el1.marka < el2.marka) {
        return 1;
      }
      if (el1.marka == el2.marka) {
        return 0;
      }
    });
    ispisiNizArtikala(artikli);
  }
  //--------------zadatak 6-----------------------------

  let cenaRN = document.getElementById("rnCena");
  cenaRN.addEventListener("input", promenaCene);

  function promenaCene() {
    let cena = document.getElementById("rnCena").value;
    document.getElementById("cenaIzbor").textContent = cena;
  }

  //-----------------------zadatak 7----------------------
  let btnCena = document.getElementById("btnCena");
  btnCena.addEventListener("click", filterCena);

  function filterCena() {
    let cena = document.getElementById("rnCena").value;
    let noviFiltriraniNiz = artikli.filter(function (element) {
      if (element.cena <= cena) return element;
    });

    ispisiNizArtikala(noviFiltriraniNiz);
  }

  function vracamNizArtikala() {
    return [
      {
        id: 1,
        marka: "HUAWEI",
        model: "P10 LITE BLACK DS",
        tipProizvoda: "mobilni telefon",
        slika: {
          putanja: "assets/images/huaweiP10.jpg",
          alt: "huaweiP10",
        },
        kolicina: 22,
        cena: 29999,
        specifikacije: {
          ekran: 5.2,
          procesor: "Octa-Core",
          RAM: "3GB",
          operativniSistem: "Android OS, v7.0 (Nougat)",
          kamera: {
            prednja: "12 MP",
            zadnja: "8MP",
          },
        },
        popust: 30,
      },
      {
        id: 2,
        marka: "HUAWEI",
        model: "P8 LITE WHITE",
        tipProizvoda: "mobilni telefon",
        slika: {
          putanja: "assets/images/huaweiP8.jpg",
          alt: "huaweiP8",
        },
        kolicina: 2,
        cena: 19999,
        specifikacije: {
          ekran: 5,
          procesor: "Octa-Core",
          RAM: "2GB",
          operativniSistem: "Android OS, v5.0.2 (Lollipop)",
          kamera: {
            prednja: "5MP",
            zadnja: "13MP",
          },
        },
        popust: 15,
      },
      {
        id: 3,
        marka: "SAMSUNG",
        model: "Galaxy J3 J320 GOLD",
        tipProizvoda: "mobilni telefon",
        slika: {
          putanja: "assets/images/samsungJ3.jpg",
          alt: "samsungJ3",
        },
        kolicina: 16,
        cena: 18999,
        specifikacije: {
          ekran: 5,
          procesor: "Quad-core ",
          RAM: "1.5GB",
          operativniSistem: "Android 5.1.1 (Lollipop)",
          kamera: {
            prednja: "5MP",
            zadnja: "8MP",
          },
        },
        popust: 0,
      },
      {
        id: 4,
        marka: "HUAWEI",
        model: "Y3 II WH",
        tipProizvoda: "mobilni telefon",
        slika: {
          putanja: "assets/images/huaweiY3.jpg",
          alt: "huaweiY3",
        },
        kolicina: 8,
        cena: 12990,
        specifikacije: {
          ekran: 4.5,
          procesor: "Quad-core",
          RAM: "1GB",
          operativniSistem: "Android OS, v5.1 (Lollipop)",
          kamera: {
            prednja: "2MP",
            zadnja: "5MP",
          },
        },
        popust: 0,
      },
      {
        id: 5,
        marka: "SAMSUNG",
        model: "Galaxy J7",
        tipProizvoda: "mobilni telefon",
        slika: {
          putanja: "assets/images/SasmungGalaxy.jpg",
          alt: "SasmungGalaxy",
        },
        kolicina: 2,
        cena: 29999,
        specifikacije: {
          ekran: 5.5,
          procesor: "Octa-Core",
          RAM: "3GB",
          operativniSistem: "Android OS, v7.0 (Nougat)",
          kamera: {
            prednja: "5MP",
            zadnja: "13MP",
          },
        },
        popust: 30,
      },
      {
        id: 6,
        marka: "SAMSUNG",
        model: "S8 G950F BLACK",
        tipProizvoda: "mobilni telefon",
        slika: {
          putanja: "assets/images/samsungS8.jpg",
          alt: "samsungS8",
        },
        kolicina: 22,
        cena: 29999,
        specifikacije: {
          ekran: 5.5,
          procesor: "Octa-Core",
          RAM: "4GB",
          operativniSistem: "Android OS, v7.0 (Nougat)",
          kamera: {
            prednja: "12MP",
            zadnja: "8MP",
          },
        },
        popust: 10,
      },
    ];
  }
};
