/* ========== FUNÇÃO: ALTERNAR TEMA ========== */

/**
 * toggleTheme()
 * 
 * Propósito: Alterna entre modo escuro (dark) e modo claro (light)
 * 
 * Funcionalidade:
 * 1. Obtém referência do elemento body da página
 * 2. Obtém referência do botão de toggle de tema
 * 3. Alterna a classe 'light-mode' no body
 * 4. Salva a preferência no localStorage do navegador
 * 5. Atualiza o ícone do botão conforme o tema ativo
 * 
 * Persistência: A preferência do usuário é salva em localStorage
 *              e permanece mesmo após recarregar a página
 * 
 * @returns {void} Não retorna nenhum valor
 */
function toggleTheme() {
    // Obtém referência do elemento body (raiz da página)
    const body = document.body;
    
    // Obtém referência do botão de toggle de tema pelo ID
    const btn = document.getElementById('theme-toggle');
    
    // Alterna a classe 'light-mode' no body
    // Se a classe existe, remove; se não existe, adiciona
    body.classList.toggle('light-mode');
    
    /* Verifica se light-mode está ativo e salva no localStorage */
    if (body.classList.contains('light-mode')) {
        // Salva 'light' no localStorage com chave 'theme'
        localStorage.setItem('theme', 'light');
        
        // Muda ícone para lua (🌙) indicando que está em modo claro
        // Ao clicar novamente, voltará para modo escuro
        btn.innerHTML = '🌙';
    } else {
        // Salva 'dark' no localStorage com chave 'theme'
        localStorage.setItem('theme', 'dark');
        
        // Muda ícone para sol (☀️) indicando que está em modo escuro
        // Ao clicar novamente, irá para modo claro
        btn.innerHTML = '☀️';
    }
}

/* ========== FUNÇÃO: APLICAR TEMA SALVO ========== */

/**
 * window.onload (Eventos ao carregar a página)
 * 
 * Propósito: Aplicar automaticamente o tema salvo quando a página carrega
 * 
 * Funcionalidade:
 * 1. Aguarda o carregamento completo da página e seus recursos
 * 2. Recupera o tema salvo no localStorage
 * 3. Obtém referência do botão de toggle de tema
 * 4. Se o tema salvo é 'light', ativa modo claro
 * 5. Se nenhum tema foi salvo, mantém modo escuro (padrão)
 * 6. Atualiza o ícone do botão conforme o tema carregado
 * 
 * Timing: Executa APÓS o carregamento completo de toda a página
 *         Garante que elementos HTML já existem no DOM
 * 
 * @event window.onload Dispara quando página termina de carregar
 */
window.onload = function() {
    // Recupera o tema salvo no localStorage
    // Se nenhum tema foi salvo, retorna 'null'
    const savedTheme = localStorage.getItem('theme');
    
    // Obtém referência do botão de toggle de tema pelo ID
    const btn = document.getElementById('theme-toggle');
    
    // Verifica se o tema salvo é 'light'
    if (savedTheme === 'light') {
        // Adiciona classe 'light-mode' ao body ativando modo claro
        document.body.classList.add('light-mode');
        
        // Define ícone lua (🌙) já que está em modo claro
        btn.innerHTML = '🌙';
    } else {
        // Se nenhum tema foi salvo ou foi 'dark', mantém modo escuro (padrão)
        // Define ícone sol (☀️) indicando modo escuro
        btn.innerHTML = '☀️';
    }
};