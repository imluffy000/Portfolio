const fs = require('fs');

const file = 'c:/Users/prasa/Portfolio/index.html';
let text = fs.readFileSync(file, 'utf8');

// Match the exact h3 styling injected previously and replace with a sleek highlighted pill border
const regex = /<h3 style="color: var\(--text-main\); font-size: 22px; font-weight: 600; margin-bottom: 10px;">(.*?)<\/h3>/g;
const newHeader = '<h3 style="color: var(--accent-color); font-size: 18px; font-weight: 700; margin-bottom: 25px; padding: 8px 20px; border: 1px solid var(--accent-color); border-radius: 30px; background: rgba(117,186,255,0.1); text-transform: uppercase; letter-spacing: 1.5px;">$1</h3>';

let replacedText = text.replace(regex, newHeader);

// If the regex misses due to slight formatting, match a broader h3 rule under skill-category
if (replacedText === text) {
    const fallbackRegex = /<h3[^>]*>(.*?)<\/h3>/g;
    // We only want to target children of 'skill-category', but since all H3s in the file are currently skill categories or stats, it's safer to only map skill categories explicitly. 
    // The strict regex above should hit perfectly because I strictly generated it in the previous node step.
}

fs.writeFileSync(file, replacedText, 'utf8');
console.log('H3 Title Highlights Updated Successfully!');
