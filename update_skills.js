const fs = require('fs');

const file = 'c:/Users/prasa/Portfolio/index.html';
let text = fs.readFileSync(file, 'utf8');

const programming = `
                <div class="skill-category" style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 40px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; aspect-ratio: 1/1; gap: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
                    <h3 style="color: var(--text-main); font-size: 22px; font-weight: 600; margin-bottom: 10px;">Programming</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; align-items: center;">
                        <i class="fab fa-python" style="font-size: 45px; color: #3776AB;" title="Python"></i>
                        <i class="fab fa-js" style="font-size: 45px; color: #F7DF1E;" title="JavaScript"></i>
                        <span style="font-size: 22px; font-weight: 700; color: #00599C;">C++</span>
                        <i class="fab fa-java" style="font-size: 45px; color: #f89820;" title="Java"></i>
                    </div>
                </div>
`;

const webDev = `
                <div class="skill-category" style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 40px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; aspect-ratio: 1/1; gap: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
                    <h3 style="color: var(--text-main); font-size: 22px; font-weight: 600; margin-bottom: 10px;">Web Development</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; align-items: center;">
                        <i class="fab fa-html5" style="font-size: 45px; color: #E34F26;" title="HTML"></i>
                        <i class="fab fa-css3-alt" style="font-size: 45px; color: #1572B6;" title="CSS"></i>
                        <i class="fab fa-react" style="font-size: 45px; color: #61DAFB;" title="React"></i>
                        <i class="fab fa-node-js" style="font-size: 45px; color: #339933;" title="Node.js"></i>
                        <span style="font-size: 20px; font-weight: 700; color: #646CFF; letter-spacing: 1px;">Vite</span>
                        <span style="font-size: 20px; font-weight: 700; color: #47A248;">MongoDB</span>
                    </div>
                </div>
`;

const dataAnalytics = `
                <div class="skill-category" style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 40px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; aspect-ratio: 1/1; gap: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
                    <h3 style="color: var(--text-main); font-size: 22px; font-weight: 600; margin-bottom: 10px;">Data Analytics</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 25px; justify-content: center; align-items: center;">
                        <span style="font-size: 20px; font-weight: 700; color: #00A4EF;">SQL</span>
                        <span style="font-size: 20px; font-weight: 700; color: #F2C811;">Power BI</span>
                        <span style="font-size: 20px; font-weight: 700; color: #217346;">Excel</span>
                        <span style="font-size: 18px; font-weight: 600; color: #FF6F00; padding: 8px 12px; border: 1px solid #FF6F00; border-radius: 8px;">Data Cleaning</span>
                        <span style="font-size: 18px; font-weight: 600; color: #FF4B4B; padding: 8px 12px; border: 1px solid #FF4B4B; border-radius: 8px;">EDA</span>
                    </div>
                </div>
`;

const aiml = `
                <div class="skill-category" style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 40px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; aspect-ratio: 1/1; gap: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
                    <h3 style="color: var(--text-main); font-size: 22px; font-weight: 600; margin-bottom: 10px;">AI/ML</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; align-items: center;">
                        <span style="font-size: 18px; font-weight: 600; color: #150458; background: #fff; padding: 5px 10px; border-radius: 6px;">Pandas & NumPy</span>
                        <span style="font-size: 18px; font-weight: 600; color: #F7931E;">scikit-learn</span>
                        <span style="font-size: 18px; font-weight: 600; color: #FF6F00;">TensorFlow</span>
                        <span style="font-size: 18px; font-weight: 600; color: #A259FF; padding: 5px 10px; border: 1px solid #A259FF; border-radius: 6px;">RAG</span>
                        <span style="font-size: 18px; font-weight: 600; color: #FF007A; padding: 5px 10px; border: 1px solid #FF007A; border-radius: 6px;">Generative AI</span>
                    </div>
                </div>
`;

const dataEng = `
                <div class="skill-category" style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 40px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; aspect-ratio: 1/1; gap: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
                    <h3 style="color: var(--text-main); font-size: 22px; font-weight: 600; margin-bottom: 10px;">Data Engineering</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; align-items: center;">
                        <span style="font-size: 18px; font-weight: 600; color: #FF694B;">dbt Cloud</span>
                        <span style="font-size: 18px; font-weight: 600; color: #00D2FF;">ETL Pipelines</span>
                        <span style="font-size: 18px; font-weight: 600; color: #4CAF50; padding: 5px 10px; border: 1px solid #4CAF50; border-radius: 6px;">Data Transform</span>
                        <i class="fab fa-microsoft" style="font-size: 40px; color: #00A4EF;" title="Azure"></i>
                    </div>
                </div>
`;

const tools = `
                <div class="skill-category" style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 40px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; aspect-ratio: 1/1; gap: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
                    <h3 style="color: var(--text-main); font-size: 22px; font-weight: 600; margin-bottom: 10px;">Tools</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; align-items: center;">
                        <i class="fab fa-git-alt" style="font-size: 45px; color: #F05032;" title="Git"></i>
                        <i class="fab fa-github" style="font-size: 45px; color: #FFFFFF;" title="GitHub"></i>
                        <span style="font-size: 20px; font-weight: 700; color: #FFCA28;">Firebase</span>
                        <span style="font-size: 20px; font-weight: 700; color: #007ACC;">VS Code</span>
                        <i class="fab fa-figma" style="font-size: 45px; color: #F24E1E;" title="Figma"></i>
                        <span style="font-size: 20px; font-weight: 700; color: #FF6E6E;">n8n</span>
                    </div>
                </div>
`;


const newCode = '<!-- Programming -->\n' + programming + 
                '<!-- Web Development -->\n' + webDev + 
                '<!-- Data Analytics -->\n' + dataAnalytics + 
                '<!-- AI/ML -->\n' + aiml + 
                '<!-- Data Engineering -->\n' + dataEng + 
                '<!-- Tools -->\n' + tools;

// we replace from <!-- Programming --> down to just before the closing tags of the grid container
let new_text = text.replace(/<!-- Programming -->[\s\S]*?<\/div>(\s*)<\/div>(\s*)<\/section>/, newCode + '            </div>\n        </div>\n    </section>');

fs.writeFileSync(file, new_text, 'utf8');
console.log('Update successful!');
