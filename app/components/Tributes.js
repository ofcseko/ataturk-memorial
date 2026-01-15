'use client';

import { useState } from 'react';
import styles from './Tributes.module.css';

const tributes = [
    {
        text: "Atatürk bu yüzyılın büyük insanlarından birinin tarihi başarılarını, Türk halkına ilham veren liderliğini, modern dünyayı anlayışındaki genişliği ve bir askeri lider olarak kudret ve yüksek cesaretini hatırlatmaktadır.",
        author: "John F. Kennedy",
        title: "ABD Başkanı"
    },
    {
        text: "Savaşta Türkiye'yi kurtaran, savaştan sonra da Türk Ulusu'nu yeniden dirilten Atatürk'ün ölümü, yalnız yurdu için değil, Avrupa için de en büyük kayıptır.",
        author: "Winston Churchill",
        title: "Birleşik Krallık Başbakanı"
    },
    {
        text: "Asker-devlet adamı, çağımızın en büyük liderlerinden biriydi. Kendisi, Türkiye'nin, dünyanın en ileri memleketleri arasında hak ettiği yeri almasını sağlamıştır.",
        author: "General Douglas MacArthur",
        title: "ABD Ordusu Genelkurmay Başkanı"
    },
    {
        text: "Benim üzüntüm, bu adamla tanışmak hususundaki şiddetli arzumun gerçekleşmesine artık imkan kalmamış olmasıdır.",
        author: "Franklin D. Roosevelt",
        title: "ABD Başkanı"
    },
    {
        text: "Bir ulusun hayatında bu kadar az sürede bu denli kökten değişiklikler pek seyrek gerçekleşir... Bu olağanüstü işleri yapanlar, hiç kuşkusuz kelimenin tam anlamıyla büyük adam niteliğine hak kazanmışlardır.",
        author: "Eleftherios Venizelos",
        title: "Yunanistan Başbakanı"
    },
    {
        text: "Yüzyıllar nadir olarak dahi yetiştirir. Şu talihsizliğimize bakın ki, o büyük dahi çağımızda Türk Milleti'ne nasip oldu.",
        author: "David Lloyd George",
        title: "Birleşik Krallık Başbakanı"
    },
    {
        text: "O büyük insan yalnız Türkiye için değil, bütün doğu milletleri için de en büyük önderdi.",
        author: "Emanullah Han",
        title: "Afganistan Kralı"
    },
    {
        text: "Mustafa Kemal Atatürk, kuşkusuz 20. yüzyılda dünya savaşından önce yetişen en büyük devlet adamlarından biri, hiçbir millete nasip olmayan cesur ve büyük bir devrimci olmuştur.",
        author: "David Ben-Gurion",
        title: "İsrail Başbakanı"
    },
    {
        text: "Dağ başındaki haydutlar diye isimlendirdiğiniz kahraman, Mustafa Kemal ve O'nun tüm askerleri burada olsalardı teker teker hepsinin heykellerini dikerdik.",
        author: "Aristide Briand",
        title: "Fransa Başbakanı"
    },
    {
        text: "Kendisi tarihin şeklini değiştiren bir liderdir. Ama Atatürk'ün yaşamına ait en büyük anıt, hiçbir şekilde taştan ya da mermerden inşa edilemez.",
        author: "Barack Obama",
        title: "ABD Başkanı"
    },
    {
        text: "Atatürk, yalnız Türk Milleti'nin değil, özgürlüğü uğruna savaşan bütün milletlerin önderiydi.",
        author: "Sucheta Kripalani",
        title: "Hint Parlamento Heyeti Başkanı"
    },
    {
        text: "Kemal Atatürk veya bizim onu o zamanlar tanıdığımız ismiyle Kemal Paşa, gençlik günlerimde benim kahramanımdı.",
        author: "Jawaharlal Nehru",
        title: "Hindistan Başbakanı"
    },
    {
        text: "Mustafa Kemal sosyalist değil, fakat görülüyor ki iyi bir teşkilatçı, yüksek anlayışlı, ilerici ve iyi düşünceli, akıllı bir lider.",
        author: "Vladimir Lenin",
        title: "Sovyetler Birliği Lideri"
    },
    {
        text: "Kemal Atatürk, yalnız yeni Türkiye'nin sembolü değil, aynı zamanda çağımızın en ilgi çekici şahsiyetlerinden birisidir.",
        author: "Giovanni Leone",
        title: "İtalya Başbakanı"
    },
    {
        text: "Akıllı ve barışçı yöntemlerle gerçekleştirdiği eseri halkların tarihinde izlerini bırakacaktır.",
        author: "Albert Lebrun",
        title: "Fransa Cumhurbaşkanı"
    },
    {
        text: "Biz Pakistan'da, O'nu geçmiş bütün çağların en büyük adamlarından biri olarak görüyoruz.",
        author: "Muhammed Eyüp Han",
        title: "Pakistan Cumhurbaşkanı"
    },
    {
        text: "Atatürk gibi insanlar bir nesil için doğmadıkları gibi belli bir devre için de doğmazlar. Onlar önderlikleriyle yüzyıllarca milletlerin tarihinde hüküm sürecek insanlardır.",
        author: "Ardeşirabad İran Gazetesi",
        title: "İran Basını"
    },
    {
        text: "Dünya, bu savaş ve barış kahramanı büyük adamın ölümü ile yoksul düşmüştür.",
        author: "Pesti Naplo Gazetesi",
        title: "Macar Basını"
    },
    {
        text: "Atatürk'ün ölümü yalnız Türk Milleti için değil, onun örneğine çok muhtaç olan bütün Doğu milletleri için en büyük kayıptır.",
        author: "El Eyyam Gazetesi",
        title: "Suriye Basını"
    },
    {
        text: "Tarih çok büyükler gördü. İskenderler'i, Napolyon'ları, Washington'ları gördü. Fakat yirminci yüzyılda büyüklük rekorunu Atatürk, bu Türk oğlu Türk kırdı.",
        author: "L'Illustration",
        title: "Fransa Basını"
    },
    {
        text: "Atatürk, tarihin Türk Milletine ve insanlığa bir hediyesidir.",
        author: "UNESCO",
        title: "Birleşmiş Milletler Eğitim, Bilim ve Kültür Örgütü"
    },
    {
        text: "Atatürk'ün hayatı ve eseri, yalnız Türkiye için değil, dünyanın hürriyet seven bütün milletleri için de ilham kaynağı olmaya devam edecektir.",
        author: "Chiang Kai-shek",
        title: "Çin Devlet Başkanı"
    },
    {
        text: "Türkiye'nin uluslararası itibarı, Atatürk'ün liderliğinde kazandığı başarılarla doğru orantılı olarak artmıştır.",
        author: "Charles de Gaulle",
        title: "Fransa Cumhurbaşkanı"
    },
    {
        text: "Mustafa Kemal bir millet, bütün vasıtalarından mahrum edilse dahi, kendini kurtaracak vasıtaları yaratabileceğini ispat eden adamdır.",
        author: "Adolf Hitler",
        title: "Almanya Şansölyesi"
    },
    {
        text: "Türkiye, Atatürk'ün mirasıyla modern dünyada saygın bir yer edinmiştir.",
        author: "Bill Clinton",
        title: "ABD Başkanı"
    },
    {
        text: "O, şahsi kazanç ve şöhret peşinde koşan basit bir diktatör değil, gelecek nesiller için sağlam temeller atmaya çalışan bir kahramandır.",
        author: "Prof. Herbert Melzig",
        title: "Alman Tarihçi"
    },
    {
        text: "Atatürk'ün Türkiye'de yaptıkları, hiçbir ülkede başarılamamış devrimlerdir.",
        author: "The Times",
        title: "İngiliz Basını"
    },
    {
        text: "İnsanlığın bütün belirtileri O'nda kendini hemen gösteriyor.",
        author: "Noel Barber",
        title: "Daily Mail Gazetesi"
    },
    {
        text: "Vatanını muhakkak bir parçalanmaktan kurtararak gemisini güvenilir bir limana götürdükten sonra milletinden bir taht istemedi. O, kelimenin bütün anlamıyla bir insan, eşsiz bir dahi, kahraman bir asker ve siyaset adamı idi.",
        author: "Elifba Gazetesi",
        title: "Şam, Suriye"
    },
    {
        text: "Atatürk, dünyanın çok nadir yetiştirdiği dâhilerden biridir. O, bütün bir tarihin seyrini değiştirmiştir.",
        author: "H.C. Armstrong",
        title: "İngiliz Yazar"
    },
    {
        text: "Mevcut olan kudret ve kabiliyetlerin harikası... Türk Milleti en karanlık gecenin içinde bu harikayı yarattı.",
        author: "National Tidence Gazetesi",
        title: "Danimarka"
    },
    {
        text: "Bir milleti, uçurumun kenarından sarsılmaz azmiyle kurtaran, kuvvetlendiren, yükselten eşsiz yaratıcı.",
        author: "Chinese Daily News",
        title: "Çin"
    }

];

export default function Tributes() {
    const [selectedTribute, setSelectedTribute] = useState(null);

    const openTribute = (item) => {
        setSelectedTribute(item);
        document.body.style.overflow = 'hidden';
    };

    const closeTribute = () => {
        setSelectedTribute(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className={styles.tributesSection}>
            <div className="container">
                <h2 className={styles.title}>Yazılanlar</h2>
                <div className={styles.grid}>
                    {tributes.map((item, index) => (
                        <div key={index} className={styles.card} onClick={() => openTribute(item)}>
                            <p className={styles.quote}>{item.text}</p>
                            <div className={styles.authorData}>
                                <span className={styles.author}>{item.author}</span>
                                <span className={styles.titleRole}>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedTribute && (
                <div className={styles.overlay} onClick={closeTribute}>
                    <button className={styles.closeButton} onClick={closeTribute}>&times;</button>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <p className={styles.fullQuote}>&ldquo;{selectedTribute.text}&rdquo;</p>
                        <div className={styles.modalAuthorBlock}>
                            <span className={styles.modalAuthor}>{selectedTribute.author}</span>
                            <span className={styles.modalRole}>{selectedTribute.title}</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
