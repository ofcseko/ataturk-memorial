const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://tr.wikipedia.org/wiki/Mustafa_Kemal_Atat%C3%BCrk';

async function scrape() {
    try {
        const { data } = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36' }
        });
        const $ = cheerio.load(data);
        const content = $('#mw-content-text .mw-parser-output');

        const sections = [];
        let currentHeader = "Giriş";
        let currentText = "";

        const clean = (text) => text.replace(/\[\d+\]/g, '').replace(/\[[a-z]\]/g, '').trim();

        content.children().each((i, el) => {
            const tag = el.tagName ? el.tagName.toLowerCase() : '';
            const $el = $(el);

            // Check if this element is a Header
            let isHeader = false;
            let headerText = "";

            if (['h2', 'h3'].includes(tag)) {
                isHeader = true;
                headerText = $el.text();
            } else if (tag === 'div' && $el.hasClass('mw-heading')) {
                // Handle new Wikipedia structure where h2/h3 are inside div.mw-heading
                const h2h3 = $el.find('h2, h3');
                if (h2h3.length > 0) {
                    isHeader = true;
                    headerText = h2h3.text();
                }
            }

            if (isHeader) {
                // Clean header text
                headerText = headerText.replace('[düzenle]', '').trim();

                // Skip unwanted sections
                if (['Kaynakça', 'Notlar', 'Dış bağlantılar', 'Ayrıca bakınız', 'İçindekiler'].includes(headerText)) {
                    // Start a "skip" mode? 
                    // For simplicity, we just save what we have and reset currentText, 
                    // but we set currentHeader to something that we might ignore later if we wanted strict filtering.
                    // But effectively, preventing the push of the PREVIOUS section is not what we want.
                    // We want to push the PREVIOUS section, then set current to this ignored one.
                }

                // Push previous section
                if (currentText.trim()) {
                    sections.push({ header: currentHeader, text: currentText.trim() });
                }

                // Update current header
                currentHeader = headerText;
                currentText = ""; // Reset text for new section

            } else {
                // It's content
                if (tag === 'p' || tag === 'ul' || tag === 'blockquote') {
                    currentText += clean($el.text()) + "\n\n";
                }
                // We ignore tables, figures (images), etc.
            }
        });

        // Push the last section
        if (currentText.trim()) {
            sections.push({ header: currentHeader, text: currentText.trim() });
        }

        fs.writeFileSync('biography.json', JSON.stringify(sections, null, 2));
        console.log('Successfully saved to biography.json with ' + sections.length + ' sections.');

        // Log headers for verification
        console.log('Headers found:', sections.map(s => s.header).join(', '));

    } catch (error) {
        console.error('Error:', error);
    }
}

scrape();
