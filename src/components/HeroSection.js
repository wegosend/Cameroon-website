import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[530px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK1knFplcQmCIVy9E4rFXzDGvbgjLZyywFHbMMFOwxgB5-5RQpXACOazMd5sMC269aRrZDFOB2fT-gsU7c1n8zhv7ms9hj0tPkwkVkVaIieltQ3rZjF_CG8Jc8NhBR-qtNWGPfoTGZPgpQyIwstKx4nph09YE8P4DVD0KjkvLDp-iLJ_cCLGDEqakLbM5MEALIN37ppENG8qSN5LWmWe-ALLMoB2H6uIDOH28VZ3_BipQZQ1m8SdLp-iarogwgotJxz3_lP7fxRtg"
          alt="Panoramic view of Yaoundé cityscape with green hills"
          fill
          style={{objectFit: "cover"}}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="font-display-xl text-display-xl text-white mb-6">Gateway to the <br />Heart of Africa</h1>
          <p className="font-body-lg text-body-lg text-white/90 mb-8">Everything you need to know for your journey to the Republic of Cameroon, from travel logistics to strategic investment opportunities.</p>
        </div>
      </div>
    </section>
  );
}
