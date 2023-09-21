import './App.css';
import Header from './componentes/Header';
import Proyectos from './componentes/Proyectos';
import Skill from './componentes/Skill';
import Work from './componentes/Works';
import SocialMedia from './componentes/SocialMedia';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './componentes/Contact';

const raguiK = require('./images/raguik.jpg');
const cara = require('./images/cara.jp');



function App() {
  return (
    <div className="App">
      <Header />
      <h1>Habilidades</h1>
      <div className="skills">
        <Skill name="HTML" percentage={70} />
        <Skill name="CSS" percentage={70} />
        <Skill name="JavaScript" percentage={60} />
        <Skill name="Java" percentage={50} />
        <Skill name="Python" percentage={70} />
        <Skill name="React" percentage={65} />
        <Skill name="Django" percentage={65} />
        <Skill name="Bootstrap" percentage={50} />
        <Skill name="WordPress" percentage={50} />
      </div>
      <h1>Proyectos</h1>
      <div className="proyectos">
        <Proyectos
            title="Proyecto Ragui-K"
            description="Tienda Online utilizando Bootstrap"
            imageUrl={foto}
          />
          <Proyectos
            title="Tesla Clone"
            description="Clon de la pagina oficial de Tesla, a fin de practicar habilidades."
            imageUrl={foto}
          />
      </div>
      <h1>Experiencia Laboral</h1>
      <div className="works">
        <Work
          title="Tienda Online"
          company="Ragui-K"
          description="*Levantamiento del sitio web. *Configuracion y mantencion del sitio web. *Administrar, modificar y actualizar datos y productos del sitio web. *Deribar pedidos a area encargada"
          imageUrl={raguiK}
        />
        <Work
          title="Proyecto DEF"
          company="Otra Empresa"
          description="Participación en el diseño y desarrollo del proyecto DEF."
          imageUrl={foto}
        />
      </div>
      <Contact />
      <div className="social-media-container">
        <SocialMedia />
      </div>
    </div>
  );
}

export default App;
