// pages/index.js

import Head from 'next/head';
import Image from 'next/image';
import ThemeToggleButton from '../components/ThemeToggleButton'; // Importe o novo componente

function HomePage() {
  const githubLink = "https://github.com/ivolzkm";  
  const linkedinLink = "https://www.linkedin.com/in/ivo-ricardo-lozekam-junior-6944a1195/";  

  return (
    <>
      <Head>
        <title>Portfólio Ivo Lozekam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Container principal */}
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-500">
        
        {/* O "cartão" branco */}
        <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 relative">

            {/* Botão de Dark Mode no canto superior direito */}
            <div className="absolute top-4 right-4">
                <ThemeToggleButton />
            </div>

            {/* Cabeçalho */}
            <header className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-10">
                <Image  
                    src="/images/ivo.jpeg"  
                    alt="Foto de perfil de Ivo Ricardo Lozekam"
                    width={150}
                    height={150}
                    className="flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-full mb-6 sm:mb-0 sm:mr-8 border-4 border-blue-500 shadow-lg profile-image"
                />
                
                <div>
                    <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100">Ivo Ricardo Lozekam Junior</h1>
                    <h2 className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mt-1">Informática Biomédica</h2>
                </div>
            </header>

            {/* Conteúdo principal */}
            <main>
                <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <p className="text-lg text-center sm:text-left mb-4 text-gray-700 dark:text-gray-300">
                        👋 Olá! Eu sou Ivo, estudante de graduação na <strong className="font-semibold text-gray-800 dark:text-gray-100">Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA)</strong>. Sou um entusiasta da tecnologia apaixonado por encontrar e aplicar soluções inovadoras para os desafios da área da saúde.
                    </p>

                    <div className="flex justify-center space-x-6 my-8 text-4xl text-gray-400 dark:text-gray-500">
                        <span>💻</span>
                        <span>🧬</span>
                        <span>💡</span>
                    </div>

                    <p className="text-lg text-center sm:text-left text-gray-700 dark:text-gray-300">
                        Minha jornada na UFCSPA tem me proporcionado uma base sólida em ciência da computação e biologia, preparando-me para desenvolver projetos de impacto. Busco ativamente oportunidades para aplicar meus conhecimentos em pesquisa, desenvolvimento de software ou análise de dados complexos para melhorar a saúde humana.
                    </p>
                </section>

                {/* Links Sociais */}
                <section className="mt-10 text-center">
                    <h3 className="text-2xl font-bold mb-5 text-gray-800 dark:text-gray-100">Conecte-se Comigo!</h3>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gray-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-md transform hover:scale-105">
                            GitHub
                        </a>
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-700 transition-all duration-300 shadow-md transform hover:scale-105">
                            LinkedIn
                        </a>
                    </div>
                </section>
            </main>

        </div>
      </div>
    </>
  );
}

export default HomePage;
