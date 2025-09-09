// Importar o módulo 'os' (Operating System)
// Este módulo nos dá acesso a informações do sistema operacional
const os = require('os');

// Exibir um título bonito
console.log('=== INFORMAÇÕES DO SISTEMA ===');
console.log(''); // Linha em branco para organizar

// Mostrar a plataforma (Windows = win32, Mac = darwin, Linux = linux)
console.log('💻 Plataforma:', process.platform);

// Mostrar se é 32 ou 64 bits
console.log('⚙️ Arquitetura:', process.arch);

// Mostrar qual versão do Node.js está instalada
console.log('📦 Versão do Node.js:', process.version);

// Mostrar em qual pasta estamos executando o script
console.log('📂 Diretório atual:', process.cwd());

// Mostrar qual usuário está logado
console.log('👤 Usuário:', os.userInfo().username);

// Calcular e mostrar a memória RAM total em GB
// os.totalmem() retorna bytes, então dividimos por 1024 três vezes para chegar em GB
const memoriaGB = Math.round(os.totalmem() / 1024 / 1024 / 1024);
console.log('🧠 Memória total:', memoriaGB + ' GB');

console.log(''); // Linha em branco
console.log('✅ Análise do sistema concluída!');
