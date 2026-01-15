---
description: Siteyi Vercel üzerinden ücretsiz bir şekilde yayınlama rehberi.
---

# Siteyi Yayına Alma Rehberi (Vercel)

Bu web sitesini CV'nize eklemek için Vercel üzerinden tamamen ücretsiz olarak yayınlayabilir ve `.vercel.app` uzantılı bir domain alabilirsiniz.

## Adım Adım Kurulum

### 1. Vercel Hesabı Oluşturma
1. [vercel.com/signup](https://vercel.com/signup) adresine gidin.
2. "Hobby" (ücretsiz) planı seçin.
3. GitHub hesabınızla giriş yapmanızı öneririm (kodunuzu kolayca çekmek için).

### 2. Projeyi GitHub'a Yükleme (Önerilen)
Eğer projeniz henüz GitHub'da değilse:
1. GitHub'da `ataturk-memorial` adında yeni bir repo (repository) oluşturun.
2. Bilgisayarınızdaki proje klasöründe terminali açın ve şu komutları sırasıyla çalıştırın:
   ```bash
   git init
   git add .
   git commit -m "İlk sürüm"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADINIZ/ataturk-memorial.git
   git push -u origin main
   ```
   *(GitHub'da oluşturduğunuz reponun linkini kullanın)*

### 3. Vercel'e Deploy Etme
1. Vercel dashboard'unuzda **"Add New Project"** butonuna tıklayın.
2. **"Import Names"** kısmından GitHub hesabınızı bağlayın.
3. `ataturk-memorial` projenizi listede görüp **"Import"** butonuna basın.
4. **"Configure Project"** ekranında hiçbir ayarı değiştirmenize gerek yok, Next.js otomatik algılanır.
5. **"Deploy"** butonuna tıklayın.

### 4. Sonuç
*   Kurulum 1-2 dakika sürecektir.
*   Bittiğinde size `ataturk-memorial.vercel.app` (veya benzeri) bir link verecek.
*   Bu linki CV'nize ekleyebilir, arkadaşlarınızla paylaşabilirsiniz.

## Alternatif: Manuel Yükleme (CLI ile)
GitHub kullanmak istemezseniz doğrudan terminalden de yükleyebilirsiniz:
1. Terminalde: `npm i -g vercel`
2. `vercel login` (giriş yapın)
3. Proje klasöründeyken: `vercel`
4. Sorulan sorulara `y` (yes) diyerek ilerleyin.
