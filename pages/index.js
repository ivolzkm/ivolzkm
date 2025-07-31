import Head from 'next/head';
import Image from 'next/image';



function HomePage() {
  const githubLink = "https://github.com/ivolzkm"; 
  const linkedinLink = "https://www.linkedin.com/in/ivo-ricardo-lozekam-junior-6944a1195/"; 

  return (
    // Usamos um Fragment (<>) para agrupar os elementos sem adicionar um nó extra ao DOM
    <>
      <Head>
        <title>Portfólio Ivo Lozekam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Container principal com a cor de fundo e garantindo que ocupe a tela toda */}
      <div className="bg-gray-100 text-gray-800 min-h-screen">
        <div className="max-w-4xl mx-auto p-4 sm:p-8">
            
            {/* Cabeçalho com a imagem e o título */}
            <header className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left mb-12 pt-8">
                {/* Imagem de Perfil usando o componente Image do Next.js */}
                <Image 
                    src="/images/ivo.jpeg" 
                    alt="Foto de perfil de Ivo Ricardo Lozekam"
                    width={160} // Obrigatório para o componente Image
                    height={160} // Obrigatório para o componente Image
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-6 sm:mb-0 sm:mr-8 border-4 border-white shadow-lg profile-image"
                />
                
                {/* Título e Subtítulo */}
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Ivo Ricardo Lozekam</h1>
                    <h2 className="text-xl sm:text-2xl text-blue-600">Informática Biomédica</h2>
                </div>
            </header>

            {/* Seção "Sobre Mim" */}
            <main>
                <section className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-center">Sobre Mim</h3>
                    
                    <p className="text-lg mb-4">
                        👋 Olá! Eu sou Ivo, estudante de graduação em <strong className="text-blue-600">Informática Biomédica</strong> na Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA). Sou um entusiasta da tecnologia apaixonado por encontrar e aplicar soluções inovadoras para os desafios da área da saúde.
                    </p>

                    <div className="flex justify-center space-x-6 my-6 text-4xl">
                        <span>💻</span>
                        <span>🧬</span>
                        <span>💡</span>
                    </div>

                    <p className="text-lg">
                        Minha jornada na UFCSPA tem me proporcionado uma base sólida em ciência da computação e biologia, preparando-me para desenvolver projetos de impacto. Busco ativamente oportunidades para aplicar meus conhecimentos em pesquisa, desenvolvimento de software ou análise de dados complexos para melhorar a saúde humana.
                    </p>
                </section>

                {/* Seção de Links Sociais */}
                <section className="mt-8 text-center pb-8">
                    <h3 className="text-2xl font-bold mb-4">Conecte-se Comigo!</h3>
                    <div className="flex justify-center space-x-4">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 shadow-md">
                            GitHub
                        </a>
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md">
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
