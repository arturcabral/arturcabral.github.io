document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = 'https://api.waqi.info/feed/A254254/?token=bf2b5d2202475676c4e5eb03e8f63b675e1718e0';
    const pm25ValueElement = document.getElementById('pm25Value');

    // Função para atualizar o valor de PM2.5 no elemento <p> com animação
    function animatePM25Value(targetValue) {
        let currentValue = 0;
        const animationDuration = 6000; // Duração da animação em milissegundos
        const frameRate = 40; // Taxa de atualização da animação em quadros por segundo
        const step = (targetValue - currentValue) / (animationDuration / (1000 / frameRate));

        const interval = setInterval(() => {
            currentValue += step;
            pm25ValueElement.textContent = currentValue.toFixed(0);

            if (currentValue >= targetValue) {
                clearInterval(interval);
                pm25ValueElement.textContent = targetValue.toFixed(0);
            }
        }, 1000 / frameRate);
    }

       

    // Fazendo a solicitação HTTP GET
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Verifica se o JSON contém dados válidos de PM2.5
            if (data && data.data && data.data.iaqi && data.data.iaqi.pm25 && data.data.iaqi.pm25.v !== undefined) {
                const pm25Value = data.data.iaqi.pm25.v;
                // Anima o valor de PM2.5
                animatePM25Value(pm25Value);

                // Transforma o JSON em texto corrido sem quebra de linhas
                const jsonData = JSON.stringify(data, null, 2);
                const textData = jsonData.replace(/\n/g, ''); // Remove quebras de linha
                console.log(textData);

                // Salva os dados em uma variável
                const Tdados = textData;

                criarSVG(Tdados);
            } else {
                console.error('Dados de PM2.5 não encontrados no JSON.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});



// Função para criar o elemento SVG e adicioná-lo à div
        function criarSVG(texto) {
            

            const minhaString = texto.toString();
            const partes = 13;
            const tamanhoParte = Math.ceil(minhaString.length / partes);
            const partesDivididas = [];

            for (let i = 0; i < partes; i++) {
                const inicio = i * tamanhoParte;
                const fim = (i + 1) * tamanhoParte;
                const parte = minhaString.slice(inicio, fim);
                partesDivididas.push(parte);
            }

            console.log(partesDivididas);

            const svgData = `
                <svg id="digital" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 343 185" style="enable-background:new 0 0 343 185;" xml:space="preserve" width="100%">
                    <style>
                        textPath {
                            fill: white;
                            font-size: 8px;
                        }
                    
                    </style>
                    <path id="st0" fill="none" stroke="none" d="M68.5,48.8C97,23.6,134.4,8.3,175.4,8.3c89.1,0,161.2,72.2,161.2,161.2c0,5.9-0.3,11.7-0.9,17.4"/>
            <path id="st1" fill="none" stroke="none" d="M15.1,186.9c-0.6-5.7-0.9-11.5-0.9-17.4c0-40.2,14.7-76.9,39-105.2"/>
            <path id="st2" fill="none" stroke="none" d="M320,161.4c0.6,5.5,0.9,11.1,0.9,16.7c0,2.9-0.1,5.8-0.2,8.7"/>
            <path id="st3" fill="none" stroke="none" d="M33.4,187.4c-0.2-3.1-0.3-6.2-0.3-9.3C33.1,94.8,97.5,27.3,177,27.3c66.2,0,121.9,46.8,138.7,110.5"/>
            <path id="st4" fill="none" stroke="none" d="M69,109.3c21-37,60.8-62,106.4-62c67.5,0,122.2,54.7,122.2,122.3c0,5.8-0.4,11.6-1.2,17.2"/>
            <path id="st5" fill="none" stroke="none" d="M54.3,186.9c-0.8-5.7-1.2-11.4-1.2-17.3c0-14.5,2.5-28.3,7.1-41.2"/>
            <path id="st6" fill="none" stroke="none" d="M73.2,187.2c0-1.3-0.1-2.6-0.1-4c0-64.1,46.5-116,103.9-116s103.9,51.9,103.9,116c0,1.4,0,2.7-0.1,4.1"/>
            <path id="st7" fill="none" stroke="none" d="M94.3,187c-0.1-2.1-0.2-4.2-0.2-6.3c0-51,37.7-92.4,84.1-92.4s84.1,41.4,84.1,92.4c0,2.2-0.1,4.4-0.2,6.6"/>
            <path id="st8" fill="none" stroke="none" d="M115.6,187c-0.3-2.7-0.4-5.4-0.4-8.2c0-38.4,28.2-69.5,62.9-69.8s62.9,31.1,62.9,69.5c0,2.9-0.2,5.8-0.5,8.6"
              />
            <path id="st9" fill="none" stroke="none" d="M216.5,160.2c1.8,5.5,2.8,11.5,2.8,17.8c0,3.2-0.3,6.3-0.8,9.4"/>
            <path id="st10" fill="none" stroke="none" d="M139.3,154.4c7.2-15.4,21.3-25.9,37.5-25.9c11.1,0,21.2,4.9,28.8,13"/>
            <path id="st11" fill="none" stroke="none" d="M159.3,187.4c-4.8-4.4-7.9-10.7-7.9-17.8c0-6.8,2.9-13,7.4-17.4"/>
            <path id="st12" fill="none" stroke="none" d="M185,151.9c8.9,4.4,15.3,12.4,16.7,22.3c0.7,4.6,0.2,9-1.3,13.2"/>
    
            <text>
              <textPath id="st0" href="#st0" side="left" startOffset="0%">${partesDivididas[10]} 
                <animate attributeName="startOffset" from="0%" to="80%" begin="0s" dur="8s" repeatCount="indefinite"></animate>
              </textPath>

              <textPath href="#st1" side="left" startOffset="0%">${partesDivididas[1]} 
                <animate attributeName="startOffset" from="0%" to="50%" begin="0s" dur="8s" repeatCount="indefinite"></animate>
              </textPath>
              <textPath href="#st2" side="left" startOffset="0%">${partesDivididas[2]} 
                <animate attributeName="startOffset" from="0%" to="50%" begin="0s" dur="8s" repeatCount="indefinite"></animate>
              </textPath>
              <textPath href="#st3" side="left" startOffset="0%">${partesDivididas[3]}
                <animate attributeName="startOffset" from="0%" to="50%" begin="0s" dur="8s" repeatCount="indefinite"></animate> 
              </textPath>
              <textPath href="#st4" side="left" startOffset="0%">${partesDivididas[4]}
                <animate attributeName="startOffset" from="100%" to="50%" begin="0s" dur="8s" repeatCount="indefinite"></animate> 
              </textPath>
              <textPath href="#st5" side="left" startOffset="0%">${partesDivididas[5]}
               <animate attributeName="startOffset" from="50%" to="0%" begin="0s" dur="8s" repeatCount="indefinite"></animate>
              </textPath>
              <textPath href="#st6" side="left" startOffset="0%">${partesDivididas[6]}
               <animate attributeName="startOffset" from="0%" to="50%" begin="0s" dur="8s" repeatCount="indefinite"></animate> 
              </textPath>
              <textPath href="#st7" side="left" startOffset="0%">${partesDivididas[7]}
               <animate attributeName="startOffset" from="100%" to="50%" begin="0s" dur="8s" repeatCount="indefinite"></animate> 
              </textPath>
              <textPath href="#st8" side="left" startOffset="0%">${partesDivididas[8]}
               <animate attributeName="startOffset" from="0%" to="50%" begin="0s" dur="8s" repeatCount="indefinite"></animate> 
              </textPath>
              <textPath href="#st9" side="left" startOffset="0%">${partesDivididas[9]}
               <animate attributeName="startOffset" from="50%" to="0%" begin="0s" dur="8s" repeatCount="indefinite"></animate> 
              </textPath>
              <textPath href="#st10" side="left" startOffset="0%">${partesDivididas[10]}
               <animate attributeName="startOffset" from="0%" to="50%" begin="0s" dur="8s" repeatCount="indefinite"></animate> 
              </textPath>
              <textPath href="#st11" side="left" startOffset="0%">${partesDivididas[11]}
                <animate attributeName="startOffset" from="0%" to="50%" begin="0s" dur="8s" repeatCount="indefinite"></animate> 
              </textPath>
              <textPath href="#st12" side="left" startOffset="0%">${partesDivididas[12]}
               <animate attributeName="startOffset" from="50%" to="0%" begin="0s" dur="8s" repeatCount="indefinite"></animate> 
              </textPath>

            </text>
              <animate xlink:href="#st1" attributeName="startOffset" from="0%" to="100%" dur="3s" repeatCount="indefinite" />

                </svg>
            `;
// Crie um elemento div para conter o SVG
            const div = document.getElementById("svg-novo");

            // Defina o conteúdo HTML da div para o SVG
            div.innerHTML = svgData;

        }


        // Chame a função para criar o SVG quando a página carregar
        window.onload = criarSVG;

