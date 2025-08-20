import gente from '../assets/gente.jpg'

export default function Nosotros() {
  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-gray-100 mt-[-30px]">
        <div className="bg-green-600 rounded-2xl max-w-6xl w-full shadow-xl overflow-hidden p-10">
          
          {/* Imagen con texto encima */}
          <div className="relative flex justify-center">
            <img 
              src={gente} 
              alt="gente" 
              className="w-[95%] h-80 object-cover rounded-lg shadow-lg"
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-6xl md:text-7xl text-center px-6 drop-shadow-xl">
              Why Niagara College?
            </h1>
          </div>

          {/* Texto inferior */}
          <div className="px-8 py-10 text-white">
            <h2 className="text-3xl font-bold drop-shadow-lg">Convenios internacionales</h2>
            <p className="italic mt-4 text-l drop-shadow-md text-opacity-80">
              Intercambio de estudiantes de pregrado y posgrado, personal académico, investigador y administrativo.
            </p>
            <p className="italic text-l drop-shadow-md text-opacity-80">
              Desarrollo de proyectos conjuntos de carácter académico cultural.
            </p>
            <p className="mt-6 text-s drop-shadow-md text-opacity-60">— Donald Trump</p>
          </div>
        </div>
      </main>
    </>
  )
}
