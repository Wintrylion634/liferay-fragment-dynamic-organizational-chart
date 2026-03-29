🌳 README — Fragmento Organograma
🧩 Sobre o Projeto

O Organograma é um componente visual para exibição de estruturas organizacionais dentro do Liferay DXP.

O objetivo foi permitir a construção de organogramas dinâmicos, editáveis e visualmente intuitivos diretamente pelo no code.

✨ Funcionalidades
🧑‍💼 Estrutura hierárquica (presidente → diretor → equipe)
🖼️ Suporte a imagem por membro
📝 Nome e cargo editáveis
🎨 Quantidade de Cards por nível editável
⚡ Renderização leve (sem bibliotecas externas)

🖼️ Exemplo de Uso
Fazer upload das fotos

⚙️ Estrutura do Fragmento
/organogram-fragment
 ├── index.html
 ├── main.js
 ├── styles.css
 └── configuration.json
 
🚀 Como Usar
No Liferay, vá até Fragments
Crie um novo fragmento
Adicione os arquivos do projeto
Configure os campos editáveis no HTML:
  Nome
  Cargo
  Imagem
  
Publique e utilize nas páginas

🧠 Como Funciona
O organograma é construído com base em:

Estrutura HTML hierárquica (<ul>, <li>)
Uso das estruturas data-lfr-editable para tornar possivel a configuração dos textos do fragmento editor de página

🧩 Exemplo de Estrutura
<ul>
  <li>
    <div class="node presidente">Presidente</div>
    <ul>
      <li>
        <div class="node diretor">Diretor</div>
      </li>
    </ul>
  </li>
</ul>

🔧 Melhorias Futuras
 Definir quantos nivel serão possiveis incluir
 Integração com dados dinâmicos (Liferay Objects)
 Responsividade avançada
