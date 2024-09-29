function showAnswer(option) {
    const chatBox = document.getElementById('chat-box');
    
    let newMessage;
    
    if (option === 'Cultura') {
        newMessage = `
            <div class="message bot">A cultura da Eurofarma é baseada em inovação, excelência e responsabilidade social.<br>
            Nosso objetivo é proporcionar saúde e bem-estar às pessoas. Buscamos inovar continuamente e promover um ambiente colaborativo.<br>
            Estou enviando a seguir os principais pontos a serem destacados da nossa cultura!!<br>
            <img src="/assets/Cultura_da_empresa.png" alt="Cultura da Empresa" onclick="expandImage(this)"><br>Posso te ajudar com mais alguma coisa?</div>
            <div class="options">
                <button onclick="showAnswer('Horario')">Horários de trabalho</button>
                <button onclick="showAnswer('Gestor')">Falar com meu Gestor</button>
                <button onclick="resetChat()">Voltar para o início</button>
            </div>`;
    } else if (option === 'Politicas') {
        newMessage = `
            <div class="message bot">Políticas e regras ajudam a manter a organização e segurança na empresa. Irei te enviar uma imagem contendo nossas políticas e regras! 📄<br>
            <img src="/assets/Politicas_e_regras.png" alt="Políticas e Regras" onclick="expandImage(this)"><br>Posso te ajudar com mais alguma coisa? 😀</div>
            <div class="options">
                <button onclick="showAnswer('Horario')">Horário de Trabalho</button>
                <button onclick="showAnswer('Gestor')">Falar com meu Gestor</button>
                <button onclick="resetChat()">Voltar para o início</button>
            </div>`;
    } else if (option === 'Beneficios') {
        newMessage = `
            <div class="message bot">A Eurofarma oferece uma série de benefícios para seus colaboradores!!😀<br>
            Segue abaixo todos eles detalhadamente!!<br>
            <img src="/assets/Beneficios_e_direitos.png" alt="Benefícios" onclick="expandImage(this)"><br>Te ajudo em algo mais?</div>
            <div class="options">
                <button onclick="showAnswer('Sistemas')">Sistemas Internos</button>
                <button onclick="showAnswer('Gestor')">Falar com meu Gestor</button>
                <button onclick="resetChat()">Voltar para o início</button>
            </div>`;
    } else if (option === 'Sistemas') {
        newMessage = `
            <div class="message bot">Precisa de ajuda com nossas ferramentas e sistemas internos? Aqui estão eles!! 😀<br>
            <img src="/assets/Ferramentas_e_sistemas.png" alt="Sistemas Internos" onclick="expandImage(this)"><br>Te ajudo em algo mais?</div>
            <div class="options">
                <button onclick="showAnswer('Cultura')">Cultura da empresa</button>
                <button onclick="showAnswer('Gestor')">Falar com meu Gestor</button>
                <button onclick="resetChat()">Voltar para o início</button>
            </div>`;
    } else if (option === 'Horario') {
        newMessage = `
            <div class="message bot">Os horários variam por setor!! ⏰<br>Estou te enviando uma grade com os horários de cada setor!!<br>
            <img src="/assets/Grade_de_horários.png" alt="Horários" onclick="expandImage(this)"><br>Com o que mais posso te ajudar?</div>
            <div class="options">
                <button onclick="showAnswer('Beneficios')">Benefícios e direitos</button>
                <button onclick="showAnswer('Gestor')">Falar com meu Gestor</button>
                <button onclick="resetChat()">Voltar para o início</button>
            </div>`;
    } else if (option === 'Gestor') {
        newMessage = `
            <div class="message bot">Você pode falar com seu gestor através do Teams ou pessoalmente na sua unidade de trabalho!! 😀<br>Posso te ajudar com mais alguma coisa?</div>
            <div class="options">
                <button onclick="resetChat()">Voltar para o início</button>
                <button onclick="endChat()">Finalizar conversa</button>
            </div>`;
    } else if (option === 'Finalizar') {
        newMessage = `
            <div class="message bot">Qualquer dúvida, estou aqui à disposição para lhe ajudar!! 💛</div>`;
    }

    chatBox.innerHTML += newMessage;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function expandImage(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("expandedImg");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

function resetChat() {
    location.reload();
}

function endChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="message bot">Conversa finalizada! Espero ter ajudado. Até mais! 👋</div>`;
}