export default function HeroSection() {
    return (
        <section className="h-[85vh] flex mx-8">
            <div className="w-1/4 flex flex-col justify-center px-16 gap-6">
                <h1 className="text-4xl font-bold">
                    Hi, I'm Nathan and I love to backpack.
                </h1>
                <p>
                    A detailed record of my hiking adventures around the world with tips, guides, and stories to inspire your next outdoor journey.
                </p>
                <a href="/" className="border border-gray-400 rounded-full px-6 py-2 text-sm hover:bg-gray-100 transition self-start">
                    Explore Hikes
                </a>
            </div>
            <div 
                className="w-3/4 bg-cover bg-center mx-8 rounded-2xl overflow-hidden" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920')" }}>
            </div>
        </section>
    );
}