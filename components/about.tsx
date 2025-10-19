export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img src="/crysta-about.jpg" alt="Innova Crysta" className="rounded-lg shadow-lg w-full" />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About RajeshTours & Travels</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              RajeshTours & Travels offers premium travel experiences across India with comfort-driven vehicles like
              Urbania and Innova Crysta. Whether it's family trips, corporate tours, or long-distance journeys — we make
              every ride smooth, safe, and memorable.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Premium Vehicles</h3>
                  <p className="text-foreground/70">Urbania and Innova Crysta for ultimate comfort</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Expert Drivers</h3>
                  <p className="text-foreground/70">Professional and experienced drivers</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Safe & Reliable</h3>
                  <p className="text-foreground/70">Your safety is our top priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
