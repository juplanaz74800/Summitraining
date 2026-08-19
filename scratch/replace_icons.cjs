const fs = require('fs');
const path = require('path');

const mappings = {
  'GraduationCap': 'Student',
  'Mountain': 'Mountains',
  'Activity': 'Activity',
  'ShieldCheck': 'ShieldCheck',
  'BarChart3': 'ChartBar',
  'Mail': 'Envelope',
  'Clock': 'Clock',
  'MapPin': 'MapPin',
  'Phone': 'Phone',
  'CheckCircle2': 'CheckCircle',
  'CheckCircle': 'CheckCircle',
  'ArrowRight': 'ArrowRight',
  'Sun': 'Sun',
  'Moon': 'Moon',
  'AlertCircle': 'WarningCircle',
  'Loader2': 'CircleNotch',
  'Send': 'PaperPlaneRight',
  'User': 'User',
  'Settings2': 'Sliders',
  'Beaker': 'Flask',
  'Globe': 'Globe',
  'Scale': 'Scales',
  'Check': 'Check',
  'X': 'X',
  'Zap': 'Lightning',
  'Layers': 'Stack',
  'Map': 'Map',
  'Users': 'Users',
  'UserPlus': 'UserPlus',
  'ChevronRight': 'CaretRight',
  'Home': 'House'
};

const files = [
  'src/app/a-propos/page.js',
  'src/app/contact/page.js',
  'src/app/route/page.js',
  'src/app/trail/page.js',
  'src/components/layout/Header.jsx',
  'src/components/layout/ThemeToggle.jsx',
  'src/components/sections/Contact.jsx',
  'src/components/sections/ContactForm.jsx',
  'src/components/sections/Methodology.jsx',
  'src/components/sections/Offers.jsx',
  'src/components/sections/Workflow.jsx',
  'src/components/ui/Breadcrumbs.jsx'
];

files.forEach(file => {
  const fullPath = path.join('c:/Users/Julien/Documents/Summitraining-1', file);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Replace import
  let importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/g;
  let matches = [...content.matchAll(importRegex)];
  
  matches.forEach(match => {
    let importedIcons = match[1].split(',').map(s => s.trim()).filter(s => s);
    let newImports = importedIcons.map(icon => mappings[icon] || icon);
    
    // Make them unique
    newImports = [...new Set(newImports)];
    
    let newImportStr = "import { " + newImports.join(', ') + " } from '@phosphor-icons/react';";
    content = content.replace(match[0], newImportStr);
    
    // Replace icon usages
    importedIcons.forEach((oldIcon, index) => {
      const newIcon = newImports[index];
      
      const tagRegex = new RegExp('<' + oldIcon + '(\\s|>)', 'g');
      content = content.replace(tagRegex, '<' + newIcon + ' weight="thin"$1');
      
      const tagCloseRegex = new RegExp('</' + oldIcon + '>', 'g');
      content = content.replace(tagCloseRegex, '</' + newIcon + '>');
    });
  });
  
  // Quick fix for when the regex matches the closing > directly making `<Icon weight="thin">` instead of `<Icon weight="thin" />`
  Object.values(mappings).forEach(newIcon => {
     content = content.replace(new RegExp('<' + newIcon + ' weight="thin">', 'g'), '<' + newIcon + ' weight="thin" />');
  });

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Updated ' + file);
});
