import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";

const Timeline = () => {
  return (
    <div className='text-white text-3xl font-bold underline bg-[#2E2E2E]'>
        <Navbar/>
        <div className="flex flex-col gap-15 justify-center items-start h-dvh p-20 text-xl">
          <h1 className="font-eleanora font-bold text-4xl">
            A fibra da criação
          </h1>
          <p className="text-base text-justify w-[35rem]">
            No princípio, não havia tempo, nem forma, apenas o vazio absoluto. uma 
            consciência sem nome — que veio a ser chamada apenas de o Tecelão —, 
            com suas mão puxou fios de luz e sombra e começou a tecer o universo.
            Assim nasceu Varrain — um mundo moldado por intenções e silêncios, com rios
            de energia primordial correndo por seus veios e estrelas suspensas como pedras 
            preciosas no firmamento, cada uma cantando a canção da criação.
          </p>
        </div>

        <div className="flex flex-col gap-15 justify-center items-end h-dvh p-20 text-xl">
          <h1 className="font-eleanora font-bold text-4xl">
            Ascensão
          </h1>
          <p className="text-base text-justify w-[35rem]">
            Milhares de ciclos depois, surgiram os humanos, criaturas curiosas e frágeis, 
            porém dotadas de conhecimento. Ergueram cidades, rasgaram os céus com maquinas, 
            e os mares com sondas. Era a era dos dados, da 
            ciência, da expansão tecnológica — onde cada pergunta parecia ter resposta e 
            cada resposta levava a uma nova conquista. Durante séculos, acreditaram que 
            que os vazio podia ser domado e não notaram a tapeçaria sendo desfeita.
          </p>
        </div>

        <div className="flex flex-col gap-15 justify-center items-start h-dvh p-20 text-xl">
          <h1 className="font-eleanora font-bold text-4xl">
            Rasgando fibras
          </h1>
          <p className="text-base text-justify w-[35rem]">
            Vieram os séculos de desequilíbrio: os mares ferviam com o refluxo dos erros humanos, 
            as florestas murchavam sob céus envenenados, e Varrain rangia, como se protestasse. 
            Então, como punição ou acaso, uma chuva de meteoros rasgou o firmamento, trazendo consigo 
            materiais alienígenas que distorceram as leis naturais do planeta. Os continentes mudaram 
            de lugar, o tempo se dobrava em certos vales, e o planeta tornou-se quase irreconhecível — 
            uma ferida aberta na tapeçaria original.
          </p>
        </div>


        <div className="flex flex-col gap-15 justify-center items-end h-dvh p-20 text-xl">
          <h1 className="font-eleanora font-bold text-4xl">
            Starlight
          </h1>
          <p className="text-base text-justify w-[35rem]">
            Antevendo o fim, alguns escaparam — os escolhidos, os preparados, os afortunados. Subiram 
            aos céus em naves silenciosas, adormecendo em cápsulas de criogenia enquanto sondas robóticas 
            observavam Varrain de longe, esperando o dia em que a vida fosse possível novamente. No vácuo 
            do espaço, sonhavam com um lar que não existia mais, suas memórias preservadas por máquinas 
            que os chamavam de "esperança".
          </p>
        </div>

        <div className="flex flex-col gap-15 justify-center items-start h-dvh p-20 text-xl">
          <h1 className="font-eleanora font-bold text-4xl">
            A queda
          </h1>
          <p className="text-base text-justify w-[35rem]">
            Uma colisão fatídica entre a nave humana adormecida e uma nave alienígena de origem indecifrável 
            selou o destino de ambos os povos. As carcaças das naves despencaram na superfície agora irreconhecível
              de Varrain, espalhando tecnologia, corpos e memórias em uma colisão de culturas e eras. O impacto 
              acordou os humanos e desorientou os alienígenas, forçando os sobreviventes a olhar para um céu 
              desconhecido sobre um mundo que já não obedecia a nenhuma lógica familiar.
          </p>
        </div>

        <div className="flex flex-col gap-15 justify-center items-end h-dvh p-20 text-xl">
          <h1 className="font-eleanora font-bold text-4xl">
            Sperare
          </h1>
          <p className="text-base text-justify w-[35rem]">
            A nova Varrain não era mais o mundo que conheciam. As leis da física se contorciam como fumaça ao vento, 
            o tempo escorria como líquido entre as árvores que cresciam de cristais, e o céu mudava de cor com os pensamentos. 
            Humanos e alienígenas, unidos pela necessidade, reconstruíram sob essas novas regras, criando uma sociedade híbrida 
            onde ciência e instinto caminhavam lado a lado — e onde, pela primeira vez, perguntaram não como o mundo funcionava, 
            mas por que.
          </p>
        </div>
        
        <About/>
        <Footer/>
    </div>
  )
}

export default Timeline
