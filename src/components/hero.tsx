import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{backgroundImage: "url('/images/2022-06-16.jpg')"}}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8             drop-shadow-md">Velkommen til</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">Hemsedal Fjellcamp</h1>
            <Button variant="default" size="lg">
              Sužinok Daugiau
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}