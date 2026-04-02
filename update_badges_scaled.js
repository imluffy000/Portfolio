const fs = require('fs');

const file = 'c:/Users/prasa/Portfolio/index.html';
let text = fs.readFileSync(file, 'utf8');

const badgeStyle = (bg, color) => `style="display: flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 4px; font-weight: 700; font-size: 11px; text-transform: uppercase; background: ${bg}; color: ${color}; flex: 1 1 110px; max-width: 140px; justify-content: flex-start; box-sizing: border-box; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"`;

const programming = `
                <div class="skill-category" style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 30px 15px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; aspect-ratio: 1/1; gap: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
                    <h3 style="color: var(--accent-color); font-size: 16px; font-weight: 700; margin-bottom: 5px; padding: 6px 15px; border: 1px solid var(--accent-color); border-radius: 30px; background: rgba(117,186,255,0.1); text-transform: uppercase; letter-spacing: 1.5px;">Programming</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; align-items: center; width: 100%;">
                        <div ${badgeStyle('#3776AB', '#FFF')}><i class="fab fa-python" style="font-size: 14px;"></i> Python</div>
                        <div ${badgeStyle('#F7DF1E', '#000')}><i class="fab fa-js" style="font-size: 14px;"></i> JavaScript</div>
                        <div ${badgeStyle('#00599C', '#FFF')}><i class="fas fa-file-code" style="font-size: 14px;"></i> C++</div>
                        <div ${badgeStyle('#f89820', '#FFF')}><i class="fab fa-java" style="font-size: 14px;"></i> Java</div>
                    </div>
                </div>
`;

const webDev = `
                <div class="skill-category" style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 30px 15px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; aspect-ratio: 1/1; gap: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
                    <h3 style="color: var(--accent-color); font-size: 16px; font-weight: 700; margin-bottom: 5px; padding: 6px 15px; border: 1px solid var(--accent-color); border-radius: 30px; background: rgba(117,186,255,0.1); text-transform: uppercase; letter-spacing: 1.5px;">Web Development</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; align-items: center; width: 100%;">
                        <div ${badgeStyle('#E34F26', '#FFF')}><i class="fab fa-html5" style="font-size: 14px;"></i> HTML5</div>
                        <div ${badgeStyle('#1572B6', '#FFF')}><i class="fab fa-css3-alt" style="font-size: 14px;"></i> CSS3</div>
                        <div ${badgeStyle('#20232A', '#61DAFB')}><i class="fab fa-react" style="font-size: 14px;"></i> React</div>
                        <div ${badgeStyle('#339933', '#FFF')}><i class="fab fa-node-js" style="font-size: 14px;"></i> Node.js</div>
                        <div ${badgeStyle('#646CFF', '#FFF')}><i class="fas fa-bolt" style="font-size: 14px;"></i> Vite</div>
                        <div ${badgeStyle('#47A248', '#FFF')}><i class="fas fa-leaf" style="font-size: 14px;"></i> MongoDB</div>
                    </div>
                </div>
`;

const dataAnalytics = `
                <div class="skill-category" style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 30px 15px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; aspect-ratio: 1/1; gap: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
                    <h3 style="color: var(--accent-color); font-size: 16px; font-weight: 700; margin-bottom: 5px; padding: 6px 15px; border: 1px solid var(--accent-color); border-radius: 30px; background: rgba(117,186,255,0.1); text-transform: uppercase; letter-spacing: 1.5px;">Data Analytics</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; align-items: center; width: 100%;">
                        <div ${badgeStyle('#00A4EF', '#FFF')}><i class="fas fa-database" style="font-size: 14px;"></i> SQL</div>
                        <div ${badgeStyle('#F2C811', '#000')}><i class="fas fa-chart-bar" style="font-size: 14px;"></i> Power BI</div>
                        <div ${badgeStyle('#217346', '#FFF')}><i class="fas fa-table" style="font-size: 14px;"></i> Excel</div>
                        <div ${badgeStyle('#FF6F00', '#FFF')}><i class="fas fa-broom" style="font-size: 14px;"></i> Data Clean</div>
                        <div ${badgeStyle('#FF4B4B', '#FFF')}><i class="fas fa-chart-line" style="font-size: 14px;"></i> EDA</div>
                    </div>
                </div>
`;

const aiml = `
                <div class="skill-category" style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 30px 15px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; aspect-ratio: 1/1; gap: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
                    <h3 style="color: var(--accent-color); font-size: 16px; font-weight: 700; margin-bottom: 5px; padding: 6px 15px; border: 1px solid var(--accent-color); border-radius: 30px; background: rgba(117,186,255,0.1); text-transform: uppercase; letter-spacing: 1.5px;">AI/ML</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; align-items: center; width: 100%;">
                        <div ${badgeStyle('#150458', '#FFF')}><i class="fas fa-layer-group" style="font-size: 14px;"></i> Pandas/NumPy</div>
                        <div ${badgeStyle('#F7931E', '#FFF')}><i class="fas fa-robot" style="font-size: 14px;"></i> scikit-learn</div>
                        <div ${badgeStyle('#FF6F00', '#FFF')}><i class="fas fa-project-diagram" style="font-size: 14px;"></i> TensorFlow</div>
                        <div ${badgeStyle('#A259FF', '#FFF')}><i class="fas fa-brain" style="font-size: 14px;"></i> RAG</div>
                        <div ${badgeStyle('#FF007A', '#FFF')}><i class="fas fa-magic" style="font-size: 14px;"></i> Gen AI</div>
                    </div>
                </div>
`;

const dataEng = `
                <div class="skill-category" style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 30px 15px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; aspect-ratio: 1/1; gap: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
                    <h3 style="color: var(--accent-color); font-size: 16px; font-weight: 700; margin-bottom: 5px; padding: 6px 15px; border: 1px solid var(--accent-color); border-radius: 30px; background: rgba(117,186,255,0.1); text-transform: uppercase; letter-spacing: 1.5px;">Data Engineering</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; align-items: center; width: 100%;">
                        <div ${badgeStyle('#FF694B', '#FFF')}><i class="fas fa-cloud" style="font-size: 14px;"></i> dbt Cloud</div>
                        <div ${badgeStyle('#00D2FF', '#000')}><i class="fas fa-random" style="font-size: 14px;"></i> ETL Pipe</div>
                        <div ${badgeStyle('#4CAF50', '#FFF')}><i class="fas fa-sync-alt" style="font-size: 14px;"></i> Data Trans</div>
                        <div ${badgeStyle('#00A4EF', '#FFF')}><i class="fab fa-microsoft" style="font-size: 14px;"></i> Azure</div>
                    </div>
                </div>
`;

const tools = `
                <div class="skill-category" style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 30px 15px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; aspect-ratio: 1/1; gap: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
                    <h3 style="color: var(--accent-color); font-size: 16px; font-weight: 700; margin-bottom: 5px; padding: 6px 15px; border: 1px solid var(--accent-color); border-radius: 30px; background: rgba(117,186,255,0.1); text-transform: uppercase; letter-spacing: 1.5px;">Tools</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; align-items: center; width: 100%;">
                        <div ${badgeStyle('#F05032', '#FFF')}><i class="fab fa-git-alt" style="font-size: 14px;"></i> Git</div>
                        <div ${badgeStyle('#181717', '#FFF')}><i class="fab fa-github" style="font-size: 14px;"></i> GitHub</div>
                        <div ${badgeStyle('#FFCA28', '#000')}><i class="fas fa-fire" style="font-size: 14px;"></i> Firebase</div>
                        <div ${badgeStyle('#007ACC', '#FFF')}><i class="fas fa-code" style="font-size: 14px;"></i> VS Code</div>
                        <div ${badgeStyle('#F24E1E', '#FFF')}><i class="fab fa-figma" style="font-size: 14px;"></i> Figma</div>
                        <div ${badgeStyle('#FF6E6E', '#FFF')}><i class="fas fa-cogs" style="font-size: 14px;"></i> n8n</div>
                    </div>
                </div>
`;

const newCode = '<!-- Programming -->\n' + programming + 
                '<!-- Web Development -->\n' + webDev + 
                '<!-- Data Analytics -->\n' + dataAnalytics + 
                '<!-- AI/ML -->\n' + aiml + 
                '<!-- Data Engineering -->\n' + dataEng + 
                '<!-- Tools -->\n' + tools;

let new_text = text.replace(/<!-- Programming -->[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, newCode + '            </div>\n        </div>\n    </section>');

fs.writeFileSync(file, new_text, 'utf8');
console.log('Scaled Down Badge Replacement successful!');
