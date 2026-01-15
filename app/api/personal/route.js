import { NextResponse } from 'next/server';

const personalData = {
    features: [
        {
            title: "Gözleri",
            description: "Trablusgarp Savaşı sırasında Derne'de İtalyan uçaklarının bombardımanı sonucu sol gözüne kireçli taş parçası isabet etmesiyle gözünden yaralanmıştır. Bu olay, sol gözünde hafif bir şehla (kayma) ve görme kaybına neden olmuştur."
        },
        {
            title: "Boyu ve Kilosu",
            description: "Atatürk, 1.74 m boyunda ve yaklaşık 74-76 kg ağırlığındaydı. Heybetli duruşu ve kılık kıyafetine gösterdiği özenle tanınırdı."
        },
        {
            title: "Okuma Sevgisi",
            description: "Hayatı boyunca cephelerde bile kitap okumaktan vazgeçmemiş, yaklaşık 4000'e yakın kitap okumuştur. Okuduğu kitapların altını çizerek ve yanlarına notlar alarak okurdu."
        }
    ],
    intellectual: [
        {
            title: "En Sevdiği Şairler",
            description: "Namık Kemal'in vatanseverlik şiirlerinden çok etkilenirdi. Tevfik Fikret'in hürriyetçi şiirlerini ve Mehmet Emin Yurdakul'un milli duyguları işleyen eserlerini severdi. Yabancı yazarlardan Jean-Jacques Rousseau ve Montesquieu gibi aydınlanmacı düşünürlerden ilham almıştır."
        },
        {
            title: "Yazdığı Eserler",
            description: "Geometri kitabı yazarak bugün kullandığımız üçgen, açı, dörtgen gibi terimleri Türkçemize kazandırmıştır. En büyük eseri Nutuk (Söylev), Kurtuluş Savaşı'nı ve inkılapları anlatan temel kaynaktır. Ayrıca 'Cumalı Ordugâhı', 'Taktik ve Tatbikat Gezisi', 'Bölüğün Muharebe Eğitimi' gibi askeri eserleri de vardır."
        }
    ]
};

export async function GET() {
    return NextResponse.json(personalData);
}
