import Thorgrim from '../images/Thorgrim.webp';
import Ungrim from '../images/ungrim.webp';
import MaestroIngeniero from '../images/Ingeniero_enano_octava.webp';
import HerreroRunico from '../images/herrero-runico.webp';
import SeñorClan from '../images/señor-clan.webp';
import GuerrerosEnanos from '../images/warriors-snow.webp';
import Rompehierros from '../images/veterans.jpg';
import Barbaslargas from '../images/Barbaslargas_Enanos_imagen_8ª.webp';
import Matadores from '../images/Enano_matador.webp';
import Ballesteros from '../images/ballesteros enanos.webp';
import Mineros from '../images/Minerosoctavaimagen.webp';
import Atronadores from '../images/Atronadores_Enanos_por_Paul_Herbert.webp';
import Dracohierros from '../images/Dracohierros.webp';
import Lanzaagravios from '../images/lanzaagravios.webp';
import Cañon from '../images/cannon.png';
import CañonOrgano from '../images/Cañón_Órgano_Enano_por_Paul_Dainton.webp';
import Lanzallamas from '../images/Lanzallamas.webp';
import Girocoptero from '../images/Girocoptero.webp';
import GirocopteroBombardero from '../images/Girobombardero.webp';
import logo from '../images/dwarf-icon4.webp';
import './Units.css';

function Units() {
  return (
    <>
      <div className="titulo-principal">
        <div className="logo-controller">
          <img width="50px" src={logo}></img>
          <h1>Units</h1>
          <img width="50px" src={logo}></img>
        </div>
      </div>

      <div>
        <h2 className="titulo-segundo">Héroes</h2>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Thorgrim</div>
          <img src={Thorgrim} />
        </div>
        <div className="unit-description">
          Thorgrim es el descendiente del más antiguo y noble de todos los Señores de los Enanos. La propia sangre de
          Grungni fluye por sus venas y la sabiduría de Valaya reposa sobre sus hombros.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Ungrim</div>
          <img src={Ungrim} />
        </div>
        <div className="unit-description">
          Ungrim Puñohierro es el actual Rey Matador de Karak-Kadrin. Hay muy pocas razas de monstruo a las que Ungrim
          Puñohierro no haya dado muerte en combate. Armado con la enorme Hacha de Dargo, Ungrim siembra la muerte,
          abriendo un camino de destrucción roja ante sí mientras canta viejas canciones con voz retumbante.
        </div>
      </div>
      <div>
        <h2 className="titulo-segundo">Generales</h2>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Maestro Ingeniero</div>
          <img src={MaestroIngeniero} />
        </div>
        <div className="unit-description">
          El Maestro Ingeniero es un experto Ingeniero Enano de excepcional conocimiento, destreza y habilidad. Muchos
          trabajan durante años para alcanzar este nivel de experiencia, y la mayoría lo hacen en vano. Los Maestros
          Ingenieros representan la habilidad y conocimiento tecnológico Enano.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Herrero Rúnico</div>
          <img src={HerreroRunico} />
        </div>
        <div className="unit-description">
          Los Herreros Rúnicos crean hechizos con sus martillos, uniendo los Vientos de la Magia a potentes runas de
          poder. Son tremendamente desconfiados y protegen celosamente los secretos guardados en sus yunques y
          martillos, guardando el conocimiento que les permite hacer objetos mágicos.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Señor del clan</div>
          <img src={SeñorClan} />
        </div>
        <div className="unit-description">
          Los líderes de los Enanos son los Señores de los Enanos y Señores de Clan, los guerreros más poderosos del
          ejército, curtidos y equipados con las mejores armas y armaduras del clan.
        </div>
      </div>
      <div>
        <h2 className="titulo-segundo">Infantería</h2>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Guerreros Enanos</div>
          <img src={GuerrerosEnanos} />
        </div>
        <div className="unit-description">
          Acorazado y escudado. Las unidades acorazadas pueden bloquear todos los daños excepto los de las armas con
          escudos pueden repeler flechas, virotes, disparos de rifle y otras armas de fuego de poca potencia, pero solo
          cuando su trayectoria de disparo se proyecta hacia delante. Defensa ante cargas de enemigos grandes. Al
          resistir una carga y protegerse de un ataque de grandes enemigos, como caballería o monstruos, esta unidad le
          negará al enemigo la bonificación de carga.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Rompehierros</div>
          <img src={Rompehierros} />
        </div>
        <div className="unit-description">
          Acorazado y escudado. Las unidades acorazadas pueden bloquear todos los daños excepto los de las armas con
          escudos pueden repeler flechas, virotes, disparos de rifle y otras armas de fuego de poca potencia, pero solo
          cuando su trayectoria de disparo se proyecta hacia delante. Arma especial de proyectiles. Esta unidad tiene un
          ataque especial con proyectiles, pero con munición limitada, lo que puede ser muy útil al iniciar un ataque.
          No puede atacar a unidades aéreas. Algunas armas de proyectiles, como los lanzagranadas, las bombas o las
          cargas explosivas, no podrán atacar a las unidades aéreas. Defensa frente a cargas contra todos. Al resistir y
          protegerse contra una carga, esta unidad anulará la bonificación de carga del enemigo.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Barbaslargas</div>
          <img src={Barbaslargas} />
        </div>
        <div className="unit-description">
          Acorazado y escudado. Las unidades acorazadas pueden bloquear todos los daños excepto los de las armas con
          escudos pueden repeler flechas, virotes, disparos de rifle y otras armas de fuego de poca potencia, pero solo
          cuando su trayectoria de disparo se proyecta hacia delante. Arma especial de proyectiles. Esta unidad tiene un
          ataque especial con proyectiles, pero con munición limitada, lo que puede ser muy útil al iniciar un ataque.
          No puede atacar a unidades aéreas. Algunas armas de proyectiles, como los lanzagranadas, las bombas o las
          cargas explosivas, no podrán atacar a las unidades aéreas. Defensa frente a cargas contra todos. Al resistir y
          protegerse contra una carga, esta unidad anulará la bonificación de carga del enemigo.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Matadores</div>
          <img src={Matadores} />
        </div>
        <div className="unit-description">
          Rápido para ser Enano. Si bien no se puede decir que los Enanos sean los habitantes más ligeros del Viejo
          Mundo, te sorprendería lo rápido que pueden moverse cuando no llevan una armadura pesada. Eficaz contra
          enemigos grandes. Las unidades eficaces contra enemigos grandes tienen ventaja contra objetivos del tamaño de
          un caballo o mayores. Esta ventaja puede consistir en una bonificación de daño contra objetivos grandes o un
          ataque que se centre en una zona muy pequeña. Sin embargo, algunas unidades son sencillamente mejores contra
          objetivos grandes porque sus ataques son lentos y fáciles de esquivar por los habilidosos combatientes cuerpo
          a cuerpo. Golpe final. Los Matadores son indesmoralizables y siempre luchan hasta el último aliento; a veces,
          incluso, más. Cuando la muerte es inminente, luchan con más brío si cabe. Cuando un Matador muere en combate
          cuerpo a cuerpo, lanza un golpe final mortal. Hachas giratorias. Los Matadores van armados con dos hachas, que
          hacen girar con destreza para desviar el fuego de proyectiles.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Ballesteros</div>
          <img src={Ballesteros} />
        </div>
        <div className="unit-description">
          Acorazado y escudado. Las unidades acorazadas pueden bloquear todos los daños excepto los de las armas con
          escudos pueden repeler flechas, virotes, disparos de rifle y otras armas de fuego de poca potencia, pero solo
          cuando su trayectoria de disparo se proyecta hacia delante. Combatiente decente cuerpo a cuerpo. A pesar de
          que es eminentemente una unidad de proyectiles o lanzadora de hechizos, esta unidad sabe defenderse cuerpo a
          cuerpo.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Mineros</div>
          <img src={Mineros} />
        </div>
        <div className="unit-description">
          Acorazado. Las unidades acorazadas pueden bloquear todos los daños excepto los de las armas con daño por poder
          de penetración. Perfora corazas. El daño de las armas con poder de penetración ignora en gran parte la coraza
          del objetivo, lo que las hace muy útiles contra enemigos fuertemente acorazados. Suelen ser pesadas y tienen
          una menor cadencia de ataque, lo que las hace menos eficientes contra objetivos mal protegidos. Eficaz contra
          las puertas. Esta unidad es más rápida que la mayoría cuando se trata de derribar las puertas con sus armas
          cuerpo a cuerpo.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Atronadores</div>
          <img src={Atronadores} />
        </div>
        <div className="unit-description">
          Acorazado y escudado. Las unidades acorazadas pueden bloquear todos los daños excepto los de las armas con
          escudos pueden repeler flechas, virotes, disparos de rifle y otras armas de fuego de poca potencia, pero solo
          cuando su trayectoria de disparo se proyecta hacia delante. Combatiente decente cuerpo a cuerpo. A pesar de
          que es eminentemente una unidad de proyectiles o lanzadora de hechizos, esta unidad sabe defenderse cuerpo a
          cuerpo. Proyectiles con poder de penetración. El daño de las armas con poder de penetración ignora en gran
          parte la coraza del objetivo, lo que las hace muy útiles contra enemigos fuertemente acorazados. Suelen ser
          pesadas y tienen una menor cadencia de ataque, lo que las hace menos eficientes contra objetivos mal
          protegidos.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Dracohierros</div>
          <img src={Dracohierros} />
        </div>
        <div className="unit-description">
          Acorazado. Las unidades acorazadas pueden bloquear todos los daños excepto los de las armas con daño por poder
          de penetración. Ineficaz contra armaduras. El ataque de esta unidad no perforará las armaduras, así que usarla
          contra enemigos bien protegidos es perder el tiempo. Eficaz contra infantería. Las unidades eficaces contra la
          infantería tienen ventaja contra objetivos más pequeños que un caballo. Esta ventaja puede ser una
          bonificación contra objetivos pequeños, su mayor peso para arrollar a los enemigos más ligeros o un ataque
          explosivo a distancia contra una zona extensa.
        </div>
      </div>
      <div>
        <h2 className="titulo-segundo">Artillería</h2>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Lanzaagravios</div>
          <img src={Lanzaagravios} />
        </div>
        <div className="unit-description">
          Proyectiles con poder de penetración. El daño de las armas con poder de penetración ignora en gran parte la
          coraza del objetivo, lo que las hace muy útiles contra enemigos fuertemente acorazados. Suelen ser pesadas y
          tienen una menor cadencia de ataque, lo que las hace menos eficientes contra objetivos mal protegidos. Eficaz
          contra infantería. Las unidades eficaces contra la infantería tienen ventaja contra objetivos más pequeños que
          un caballo. Esta ventaja puede ser una bonificación contra objetivos pequeños, su mayor peso para arrollar a
          los enemigos más ligeros o un ataque explosivo a distancia contra una zona extensa.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Cañón</div>
          <img src={Cañon} />
        </div>
        <div className="unit-description">
          Proyectiles con poder de penetración. El daño de las armas con poder de penetración ignora en gran parte la
          coraza del objetivo, lo que las hace muy útiles contra enemigos fuertemente acorazados. Suelen ser pesadas y
          tienen una menor cadencia de ataque, lo que las hace menos eficientes contra objetivos mal protegidos. Eficaz
          contra enemigos grandes Las unidades eficaces contra enemigos grandes. tienen ventaja contra objetivos del
          tamaño de un caballo o mayores. Esta ventaja puede consistir en una bonificación de daño contra objetivos
          grandes o un ataque que se centre en una zona muy pequeña. Sin embargo, algunas unidades son sencillamente
          mejores contra objetivos grandes porque sus ataques son lentos y fáciles de esquivar por los habilidosos
          combatientes cuerpo a cuerpo.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Cañón órgano</div>
          <img src={CañonOrgano} />
        </div>
        <div className="unit-description">
          Proyectiles con poder de penetración. El daño de las armas con poder de penetración ignora en gran parte la
          coraza del objetivo, lo que las hace muy útiles contra enemigos fuertemente acorazados. Suelen ser pesadas y
          tienen una menor cadencia de ataque, lo que las hace menos eficientes contra objetivos mal protegidos.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Lanzallamas</div>
          <img src={Lanzallamas} />
        </div>
        <div className="unit-description">
          Eficaz contra infantería. Las unidades eficaces contra la infantería tienen ventaja contra objetivos más
          pequeños que un caballo. Esta ventaja puede ser una bonificación contra objetivos pequeños, su mayor peso para
          arrollar a los enemigos más ligeros o un ataque explosivo a distancia contra una zona extensa.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Girocóptero</div>
          <img src={Girocoptero} />
        </div>
        <div className="unit-description">
          Acorazado. Las unidades acorazadas pueden bloquear todos los daños excepto los de las armas con daño por poder
          de penetración. Poca precisión. Los ataques de esta unidad son propensos a no dar en el blanco. Eficaz contra
          infantería. Las unidades eficaces contra la infantería tienen ventaja contra objetivos más pequeños que un
          caballo. Esta ventaja puede ser una bonificación contra objetivos pequeños, su mayor peso para arrollar a los
          enemigos más ligeros o un ataque explosivo a distancia contra una zona extensa.
        </div>
      </div>
      <div className="unit">
        <div className="img-unit">
          <div className="unit-name">Girocóptero Bombardero</div>
          <img src={GirocopteroBombardero} />
        </div>
        <div className="unit-description">
          Acorazado. Las unidades acorazadas pueden bloquear todos los daños excepto los de las armas con daño por poder
          de penetración. Proyectiles con poder de penetración. El daño de las armas con poder de penetración ignora en
          gran parte la coraza del objetivo, lo que las hace muy útiles contra enemigos fuertemente acorazados. Suelen
          ser pesadas y tienen una menor cadencia de ataque, lo que las hace menos eficientes contra objetivos mal
          protegidos. Eficaz contra infantería. Las unidades eficaces contra la infantería tienen ventaja contra
          objetivos más pequeños que un caballo. Esta ventaja puede ser una bonificación contra objetivos pequeños, su
          mayor peso para arrollar a los enemigos más ligeros o un ataque explosivo a distancia contra una zona extensa.
        </div>
      </div>
    </>
  );
}

export default Units;
