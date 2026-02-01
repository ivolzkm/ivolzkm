import Head from "next/head";
import Image from "next/image";
import ThemeToggleButton from "../components/ThemeToggleButton";

function HomePage() {
  const githubLink = "https://github.com/ivolzkm";
  const linkedinLink =
    "https://www.linkedin.com/in/ivo-ricardo-lozekam-junior-6944a1195/";

  return (
    <>
      <Head>
        <title>Portfólio Ivo Lozekam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-500">
        <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 relative">
          <div className="absolute top-4 right-4">
            <ThemeToggleButton />
          </div>

          <header className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-10">
            <Image
              src="/images/ivo.jpeg"
              alt="Foto de perfil de Ivo Ricardo Lozekam"
              width={150}
              height={150}
              className="flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-full mb-6 sm:mb-0 sm:mr-8 border-4 border-blue-500 shadow-lg profile-image"
            />

            <div>
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100">
                Ivo Ricardo Lozekam Junior
              </h1>
              <h2 className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mt-1">
                Informática Biomédica
              </h2>
            </div>
          </header>

          <main>
            <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <p className="text-lg text-center sm:text-left mb-4 text-gray-700 dark:text-gray-300">
                👋 Olá! Eu sou Ivo, estudante de graduação na{" "}
                <strong className="font-semibold text-gray-800 dark:text-gray-100">
                  Universidade Federal de Ciências da Saúde de Porto Alegre
                  (UFCSPA)
                </strong>
                . Sou um entusiasta da tecnologia apaixonado por encontrar e
                aplicar soluções inovadoras para os desafios da área da saúde.
              </p>

              <div className="flex justify-center my-8">
                <Image
                  src="/images/ufcspafrente.jpeg"
                  alt="Frente da UFCSPA"
                  width={1200}
                  height={800}
                  className="rounded-lg shadow-lg"
                />
              </div>

              <p className="text-lg text-center sm:text-left text-gray-700 dark:text-gray-300">
                Minha jornada na UFCSPA tem me proporcionado uma base sólida em
                ciência da computação e biologia, preparando-me para desenvolver
                projetos de impacto.
              </p>

              <p className="text-lg text-center sm:text-left mb-8 text-gray-700 dark:text-gray-300">
                Que tal explorar de forma interativa{" "}
                <strong className="font-semibold text-blue-600 dark:text-blue-400">
                  como a tecnologia e a saúde se conectam
                </strong>{" "}
                ? Criei um{" "}
                <span className="italic text-blue-500 dark:text-blue-400">
                  laboratório digital
                </span>{" "}
                onde você pode descobrir minha paixão pela UFCSPA, entender o
                que é Informática Biomédica na prática e ver os projetos que
                ganham vida no código.
              </p>

              <div className="mb-10 text-center">
                <a
                  href="/laboratorio"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] group"
                  style={{ minWidth: "280px" }}
                >
                  <span className="text-2xl mr-3 group-hover:rotate-12 transition-transform">
                    🧪
                  </span>
                  <span className="text-lg">
                    Acessar Laboratório Interativo
                  </span>
                  <span className="ml-3 opacity-75 group-hover:ml-4 group-hover:opacity-100 transition-all">
                    →
                  </span>
                </a>

                <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
                  Uma experiência gamificada sobre saúde, código e inovação
                </p>
              </div>
            </section>

            <section className="mt-10 text-center">
              <h3 className="text-2xl font-bold mb-5 text-gray-800 dark:text-gray-100">
                Conecte-se Comigo!
              </h3>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-gray-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-md transform hover:scale-105"
                >
                  GitHub
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-700 transition-all duration-300 shadow-md transform hover:scale-105"
                >
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
