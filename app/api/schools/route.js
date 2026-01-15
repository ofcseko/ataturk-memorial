import { NextResponse } from 'next/server';

const schoolsData = [
    {
        id: 1,
        name: "Mahalle Mektebi",
        location: "Selanik",
        period: "Kısa bir süre",
        description: "Annesinin isteği üzerine Hafız Mehmet Efendi'nin mahalle mektebine başladı. Ancak bu okulda uygulanan geleneksel eğitim yöntemleri Mustafa'yı tatmin etmedi. Babasının araya girmesiyle kısa süre sonra buradan ayrıldı."
    },
    {
        id: 2,
        name: "Şemsi Efendi Mektebi",
        location: "Selanik",
        period: "İlköğretim",
        description: "Babasının isteğiyle çağdaş eğitim veren Şemsi Efendi Mektebi'ne geçti. Bu okulda sıralar üzerine oturularak ders işleniyor, modern yöntemler uygulanıyordu. Okulda gösterdiği başarı ile sınıf çavuşu oldu. Babasının vefatı üzerine eğitimine bir süre ara vermek zorunda kaldı."
    },
    {
        id: 3,
        name: "Selanik Mülkiye Rüştiyesi",
        location: "Selanik",
        period: "Ortaokul (Yarım bıraktı)",
        description: "Annesinin isteğiyle kaydolduğu bu okulda, Kaymak Hafız adlı öğretmenin bir öğrenciyi dövmesi üzerine okuldan soğudu. Asker olma hayalleri kuran Mustafa, gizlice Askeri Rüştiye sınavlarına girdi ve kazandı."
    },
    {
        id: 4,
        name: "Selanik Askeri Rüştiyesi",
        location: "Selanik",
        period: "1893 - 1895",
        description: "Askerlik hayatına ilk adımını burada attı. Matematik öğretmeni Yüzbaşı Mustafa Efendi, genç öğrencisinin yeteneklerini görüp 'Senin de adın Mustafa benim de. Arada bir fark olmalı' diyerek ona 'Kemal' adını verdi. Sınıf arkadaşları arasında liderliği ve zekasıyla öne çıktı."
    },
    {
        id: 5,
        name: "Manastır Askeri İdadisi",
        location: "Manastır",
        period: "1896 - 1899",
        description: "Fikir hayatının şekillendiği yerdir. Arkadaşı Ömer Naci sayesinde edebiyata ve şiire ilgi duydu. Namık Kemal'in vatanseverlik şiirlerinden ve Mehmet Emin Yurdakul'un eserlerinden etkilendi. Tarih öğretmeni Mehmet Tevfik Bey (Bilge) sayesinde Türk tarihine derin bir ilgi duymaya başladı."
    },
    {
        id: 6,
        name: "İstanbul Harp Okulu",
        location: "İstanbul",
        period: "1899 - 1902",
        description: "İstanbul'un canlı politik ortamıyla tanıştı. Memleket sorunları üzerine arkadaşlarıyla gizli toplantılar yaptı, el yazısı gazete çıkardı. 1902 yılında Teğmen rütbesiyle sınıf sekizincisi olarak mezun oldu."
    },
    {
        id: 7,
        name: "Harp Akademisi",
        location: "İstanbul",
        period: "1902 - 1905",
        description: "Akademideki eğitimi sırasında Fransızcasını geliştirdi, dış basını takip ederek dünya siyasetini yakından izledi. 11 Ocak 1905'te Kurmay Yüzbaşı olarak, sınıf beşincisi derecesiyle mezun oldu ve ordu saflarına katıldı."
    }
];

export async function GET() {
    return NextResponse.json(schoolsData);
}
