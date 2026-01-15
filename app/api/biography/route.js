import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Helper to read the scraped JSON file
const getBiographyData = () => {
    try {
        const filePath = path.join(process.cwd(), 'biography.json');
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error("Error reading biography.json:", error);
        return [];
    }
};

const rawData = getBiographyData();

// Helper to find partial content in the raw data
const findContent = (keywords) => {
    // Filter and combine all matching sections
    const matches = rawData.filter(s => keywords.some(k => s.header.includes(k)));

    if (matches.length === 0) return null; // Let the fallback handle it or return null

    return matches.map(s => `### ${s.header}\n\n${s.text}`).join('\n\n');
};

const biographyChapters = [
    {
        id: "cocukluk",
        title: "Çocukluk ve Gençlik (1881-1905)",
        content: findContent(["Giriş", "Adı ve soyadı", "Çocukluk ve gençlik"]) || "İçerik yüklenemedi.",
        quotes: [
            "Hayatta en hakiki mürşit ilimdir.",
            "Ben, manevî miras olarak hiçbir ayet, hiçbir dogma, hiçbir donmuş ve kalıplaşmış kural bırakmıyorum. Benim manevî mirasım ilim ve akıldır."
        ],
        keyDates: [
            { year: "1881", event: "Selanik'te doğdu." },
            { year: "1893", event: "Askeri Rüştiye'ye girdi ve Kemal adını aldı." },
            { year: "1905", event: "Kurmay Yüzbaşı olarak Harp Akademisi'nden mezun oldu." }
        ]
    },
    {
        id: "askeri",
        title: "Askeri Kariyer ve Savaşlar (1905-1919)",
        content: findContent(["Erken dönem", "Trablusgarp Savaşı", "Balkan Savaşları", "Askerî ataşelik", "I. Dünya Savaşı"]) || "İçerik yüklenemedi.",
        quotes: [
            "Ben size taarruzu değil, ölmeyi emrediyorum.",
            "Geldikleri gibi giderler!"
        ],
        keyDates: [
            { year: "1911", event: "Trablusgarp Savaşı'na katıldı." },
            { year: "1915", event: "Çanakkale Zaferi ve Anafartalar Kahramanı unvanı." },
            { year: "1916", event: "Tuğgeneralliğe terfi etti." }
        ]
    },
    {
        id: "kurtulus",
        title: "Kurtuluş Savaşı (1919-1923)",
        content: findContent(["Örgütlenme", "Hâkimiyetin sağlanması", "Mudanya Ateşkes Antlaşması", "Lozan Barış Antlaşması"]) || "İçerik yüklenemedi.",
        quotes: [
            "Hattı müdafaa yoktur, sathı müdafaa vardır. O satıh bütün vatandır.",
            "Ya istiklal ya ölüm!"
        ],
        keyDates: [
            { year: "1919", event: "19 Mayıs'ta Samsun'a çıktı." },
            { year: "1920", event: "23 Nisan'da TBMM'yi açtı." },
            { year: "1922", event: "30 Ağustos Zaferi ve İzmir'in Kurtuluşu." }
        ]
    },
    {
        id: "cumhuriyet",
        title: "Cumhuriyet ve Devrimler (1923-1938)",
        content: findContent(["Cumhuriyetin ilanı", "Cumhurbaşkanlığı", "İç politika", "Devrimler"]) || "İçerik yüklenemedi.",
        quotes: [
            "Efendiler, yarın Cumhuriyeti ilan edeceğiz.",
            "Ne mutlu Türk'üm diyene!",
            "Yurtta sulh, cihanda sulh."
        ],
        keyDates: [
            { year: "1923", event: "29 Ekim'de Cumhuriyet ilan edildi." },
            { year: "1928", event: "Harf Devrimi yapıldı." },
            { year: "1934", event: "Kadınlara seçme ve seçilme hakkı verildi." }
        ]
    },
    {
        id: "vefat",
        title: "Vefatı ve Mirası",
        content: findContent(["Ölümü", "Hatırası", "Vasiyeti"]) || "İçerik yüklenemedi.",
        quotes: [
            "Beni görmek demek mutlaka yüzümü görmek demek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu kafidir.",
            "Benim naçiz vücudum elbet bir gün toprak olacaktır, fakat Türkiye Cumhuriyeti ilelebet payidar kalacaktır."
        ],
        keyDates: [
            { year: "1938", event: "10 Kasım'da Dolmabahçe Sarayı'nda vefat etti." },
            { year: "1953", event: "Naaşı Etnografya Müzesi'nden Anıtkabir'e nakledildi." }
        ]
    }
];

export async function GET() {
    return NextResponse.json(biographyChapters);
}
