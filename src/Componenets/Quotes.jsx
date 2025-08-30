
export default function Quotes(){
    return(
<div className="relative min-h-screen w-full bg-[url('/bg1.webp')] bg-cover bg-center flex flex-col items-center justify-center">
  
  {/* Gradient Circle Overlay */}
  <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-b from-black/80 to-white/50 flex flex-col items-center justify-center p-8 text-center shadow-xl">
    
    {/* Quote */}
    <p className="text-2xl font-semibold text-white drop-shadow-lg">
      "The best way to predict the future is to create it."
    </p>

    {/* Author */}
    <span className="mt-3 text-lg text-gray-200 italic">
      — Peter Drucker
    </span>
  </div>

  {/* Buttons under circle */}
  <div className="mt-6 flex gap-4">
    {/* Regenerate */}
    <button className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-medium shadow-lg hover:bg-white/30 transition">
      🔄 Regenerate
    </button>
    
    {/* Copy */}
    <button className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-medium shadow-lg hover:bg-white/30 transition">
      📋 Copy
    </button>
  </div>
</div>





    )
}