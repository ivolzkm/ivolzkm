<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio Ivo Lozekam</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        /* Usando a fonte Inter para um visual mais moderno */
        body { 
            font-family: 'Inter', sans-serif;
        }
        /* Estilo para a imagem de perfil para garantir que seja redonda e bem ajustada */
        .profile-image {
            object-fit: cover; /* Garante que a imagem cubra o espaço sem distorcer */
        }
    </style>
</head>
<body class="bg-gray-100 text-gray-800">

    <!-- Container principal com padding e largura máxima para centralização -->
    <div id="root" class="max-w-4xl mx-auto p-4 sm:p-8">
        
        <!-- Cabeçalho com a imagem e o título -->
        <header class="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left mb-12">
            <!-- Imagem de Perfil -->
            <!-- O Next.js otimiza imagens, mas para um exemplo HTML simples, usamos a tag <img> -->
            <!-- A imagem está sendo carregada de um placeholder, substitua pelo seu caminho real se necessário -->
            <img 
                src="https://placehold.co/150x150/3498db/ffffff?text=Ivo" 
                alt="Foto de perfil de Ivo Ricardo Lozekam"
                onerror="this.onerror=null;this.src='https://placehold.co/150x150/cccccc/ffffff?text=Foto+N%C3%A3o+Encontrada';"
                class="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-6 sm:mb-0 sm:mr-8 border-4 border-white shadow-lg profile-image"
            />
            
            <!-- Título e Subtítulo -->
            <div>
                <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Ivo Ricardo Lozekam</h1>
                <h2 class="text-xl sm:text-2xl text-blue-600">Informática Biomédica</h2>
            </div>
        </header>

        <!-- Seção "Sobre Mim" -->
        <main>
            <section class="bg-white p-8 rounded-lg shadow-md">
                <h3 class="text-2xl font-bold mb-4 text-center">Sobre Mim</h3>
                
                <p class="text-lg mb-4">
                    👋 Olá! Eu sou Ivo, estudante de graduação em <strong class="text-blue-600">Informática Biomédica</strong> na Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA). Sou um entusiasta da tecnologia apaixonado por encontrar e aplicar soluções inovadoras para os desafios da área da saúde.
                </p>

                <div class="flex justify-center space-x-6 my-6 text-4xl">
                    <span>💻</span>
                    <span>🧬</span>
                    <span>💡</span>
                </div>

                <p class="text-lg">
                    Minha jornada na UFCSPA tem me proporcionado uma base sólida em ciência da computação e biologia, preparando-me para desenvolver projetos de impacto. Busco ativamente oportunidades para aplicar meus conhecimentos em pesquisa, desenvolvimento de software ou análise de dados complexos para melhorar a saúde humana.
                </p>
            </section>

            <!-- Seção de Links Sociais -->
            <section class="mt-8 text-center">
                <h3 class="text-2xl font-bold mb-4">Conecte-se Comigo!</h3>
                <div class="flex justify-center space-x-4">
                    <a href="https://github.com/ivolzkm" target="_blank" rel="noopener noreferrer" class="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 shadow-md">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/ivo-ricardo-lozekam-junior-6944a1195/" target="_blank" rel="noopener noreferrer" class="bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md">
                        LinkedIn
                    </a>
                </div>
            </section>
        </main>

    </div>

</body>
</html>
