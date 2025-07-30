function Home() {
  const githubLink = "https://github.com/SEU_USUARIO_GITHUB"; // Substitua pelo seu usuário do GitHub
  const linkedinLink = "https://www.linkedin.com/in/SEU_PERFIL_LINKEDIN"; // Substitua pelo seu perfil do LinkedIn

  return (
    <div className="home-container"> {/* Adicionei uma div para estilização futura */}
      <h1>Ivo Ricardo Lozekam - Informática Biomédica</h1>

      <p className="greeting">👋 Olá! Eu sou Ivo</p>

      <p>
        Estudante de graduação em **Informática Biomédica** na Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA), apaixonado por aplicar soluções tecnológicas aos desafios da saúde.
      </p>

      <div className="icons">
        <span>💻</span> <span>🧬</span> <span>💡</span>
      </div>

      <p>
        Minha jornada na UFCSPA tem me proporcionado uma base sólida em **ciência da computação e biologia/saúde**, preparando-me para desenvolver soluções inovadoras e impactantes.
      </p>

      <p>
        Busco ativamente oportunidades para aplicar meus conhecimentos em projetos que gerem **impacto positivo na saúde humana**, seja através de pesquisa, desenvolvimento de softwares ou análise de dados complexos. Tenho interesse especial em [adicione aqui áreas específicas, ex: bioinformática, telemedicina, inteligência artificial aplicada à saúde].
      </p>

      <div className="social-links">
        <h2>Conecte-se Comigo!</h2>
        <ul>
          <li>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

     
    </div>
  );
}

export default Home;
