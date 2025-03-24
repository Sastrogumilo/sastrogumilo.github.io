
$(document).ready(function() {
    generateBin();
    generatePlotFakultas();
});

var langHome = {
    "id": {
        "__info_title" : "Titik Lokasi Pengambilan Sampah di UGM",
        "__info_sub": "Berikut Beberapa Titik Pengambilan Sampah di UGM",
        "__bar_chart_fak_title": "Grafik Sampah per Fakultas",
        "__bar_chart_fak_sub" : "Bagan pengambilan sampah untuk tiap unit kerja / fakultas",
        "__chart_title_1": "Grafik Sampah Organik",
        "__chart_sub_1": "Grafik pengambilan sampah organik per bulan",
        "__chart_title_2": "Grafik Sampah Residu",
        "__chart_sub_2": "Grafik pengambilan sampah residu per bulan",
        "__chart_title_3": "Grafik Sampah Recycle",
        "__chart_sub_3": "Grafik pengambilan sampah anorganik per bulan",
        "__chart_title_4": "Grafik Sampah Spesifik",
        "__chart_sub_4": "Grafik pengambilan sampah spesifik per bulan",
    },
    "en": {
        "__info_title" : "Waste Collection Points at UGM",
        "__info_sub": "Here are Some Waste Collection Points at UGM",
        "__bar_chart_fak_title": "Waste Chart per Faculty",
        "__bar_chart_fak_sub" : "Chart of waste collection for each work unit / faculty",
        "__chart_title_1": "Organic Waste Chart",
        "__chart_sub_1": "Chart of organic waste collection per month",
        "__chart_title_2": "Residual Waste Chart",
        "__chart_sub_2": "Chart of residual waste collection per month",
        "__chart_title_3": "Recycle Waste Chart",
        "__chart_sub_3": "Chart of inorganic waste collection per month",
        "__chart_title_4": "Specific Waste Chart",
        "__chart_sub_4": "Chart of specific waste collection per month",

    }
}

function changeLanguage() {
    // Cek apakah toggle dicentang (ID jika dicentang, EN jika tidak)
    var lang = document.getElementById("language-toggle").checked ? "en" : "id";

    //saved to local storage
    localStorage.setItem("lang", lang);

    //iterate through all keys
    let transText = langHome[lang];
    Object.keys(transText).forEach(function(key){
        document.getElementById(key).innerHTML = transText[key];
    });
 
}

var binMap = [
    {
        "id": "bin_1",
        "name": "KANTOR PUSAT UGM",
    },
    {
        "id": "bin_2",
        "name": "FAK KEHUTANAN",
    },
    {
        "id": "bin_3",
        "name": "FAK PERTANIAN",
    },
    {
        "id": "bin_4",
        "name": "FAK TEKNOLOGI PERTANIAN",
    },
    {
        "id": "bin_5",
        "name": "FAK PETERNAKAN",
    },
    {
        "id": "bin_6",
        "name": "FAK KEDOKTERAN HEWAN",
    },
    {
        "id": "bin_7",
        "name": "FAK HUKUM",
    },
    {
        "id": "bin_8",
        "name": "FAK FILSAFAT",
    },
    {
        "id": "bin_9",
        "name": "FAK PSIKOLOGI",
    },
    {
        "id": "bin_10",
        "name": "FAK EKONOMIKA DAN BISNIS",
    },
    {
        "id": "bin_11",
        "name": "FAK ILMU BUDAYA",
    },
    {
        "id": "bin_12",
        "name": "GEDUNG GRHA SABHA PRAMANA",
    },
    {
        "id": "bin_13",
        "name": "PERPUSTAKAAN",
    },
    {
        "id": "bin_14",
        "name": "FAK ISIPOL",
    },
    {
        "id": "bin_15",
        "name": "FAK GEOGRAFI",
    },
    {
        "id": "bin_16",
        "name": "FAK MIPA",
    },
    {
        "id": "bin_17",
        "name": "FAK BIOLOGI",
    },
    {
        "id": "bin_18",
        "name": "GEDUNG PAU",
    },
    {
        "id": "bin_19",
        "name": "SEKOLAH PASCASARJANA",
    },
    {
        "id": "bin_20",
        "name": "FAK TEKNIK",
    },
    {
        "id": "bin_21",
        "name": "FAK KKMK",
    },
    {
        "id": "bin_22",
        "name": "FAK FARMASI",
    },
    {
        "id": "bin_23",
        "name": "LPPT",
    },
    {
        "id": "bin_24",
        "name": "FAK KEDOKTERAN GIGI",
    },
    {
        "id": "bin_25",
        "name": "SEKOLAH VOKASI TILC",
    },
    {
        "id": "bin_26",
        "name": "SEKOLAH VOKASI 1",
    },
    {
        "id": "bin_27",
        "name": "BULAKSUMUR RESIDENCE",
    },
    {
        "id": "bin_28",
        "name": "GEDUNG PSKK (PK4L)",
    },
    {
        "id": "bin_29",
        "name": "SEKOLAH VOKASI 2",
    },
    {
        "id": "bin_30",
        "name": "DAMKAR",
    },
    {
        "id": "bin_31",
        "name": "TP3S",
    },
    {
        "id": "bin_32",
        "name": "PSLH",
    }
]

function generateBin() {
    let templateBin = 
    `
    <a href="#">
        <span id="{{id}}" class="fa-stack text-success" title="{{name}}">
           <em class="icon ni ni-trash-empty-fill"></em>
        </span>
    </a>
    `;

    let concatBIN = `<img id="map" src="https://puskesmas-kagok.whf.bz/images/peta-ugm.jpg" alt="">`;

    binMap.forEach(bin => {
        concatBIN += templateBin.replace("{{id}}", bin.id).replace("{{name}}", bin.name);
    });

    document.getElementById("__map").innerHTML = concatBIN; 
}

function generatePlotFakultas(){

    let dataSampah = [
        {
            "nama": "Fak Kedokteran Gigi",
            "jumlah": 3090
        },
        {
            "nama": "Fak MIPA",
            "jumlah": 3060
        },
        {
            "nama": "Fak Farmasi",
            "jumlah": 3060
        },
        {
            "nama": "Sekolah Vokasi",
            "jumlah": 2840
        },
        {
            "nama": "Gedung PAU",
            "jumlah": 2070
        },
        {
            "nama": "SPSS",
            "jumlah": 2070
        },
        {
            "nama": "LPPT",
            "jumlah": 1750
        },
        {
            "nama": "Fak Geografi",
            "jumlah": 1700
        },
        {
            "nama": "Fak ISIPOL",
            "jumlah": 1630
        },
        {
            "nama": "Graha Sabha Pramana",
            "jumlah": 340
        },
        {
            "nama": "DAMKAR",
            "jumlah": 245
        },
    ]

    let templatePlotX = dataSampah.map(data => data.nama);
    let templatePlotY = dataSampah.map(data => data.jumlah);    

    var trace1 = {
        type: 'bar',
        x: templatePlotX,
        y: templatePlotY,
        marker: {
            color: '#C8A2C8',
            line: {
                width: 2.5
            }
        }
      };
      
      var data = [ trace1 ];
      
      var layout = {
        title: {
          text: ''
        },
        font: {size: 18}
      };
      
      var config = {responsive: true}
      
      Plotly.newPlot('__chart_fakultas', data, layout, config );
      
}