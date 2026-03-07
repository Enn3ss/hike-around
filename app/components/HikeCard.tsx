import { Hike } from "../types";

export default function HikeCard({ hike }: { hike: Hike }) {
    return (
        <section className="flex bg-gray-100 rounded-2xl p-6 gap-6">
            <div className="w-1/2 flex flex-col">
                <h1 className="text-3xl font-bold">{hike.name}</h1>
                <p className="text-sm text-gray-500">{hike.description}</p>
                <div className="flex mt-6">
                    <div className="w-1/2 flex flex-col gap-4">
                        <div>
                            <p className="text-xs font-bold text-gray-400">LOCATION</p>
                            <p className="text-sm">{hike.location}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400">STAGES</p>
                            <p className="text-sm">{hike.stages} days</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col gap-4">
                        <div>
                            <p className="text-xs font-bold text-gray-400">DISTANCE</p>
                            <p className="text-sm">{hike.distance} km</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400">ELEVATION GAIN</p>
                            <p className="text-sm">{hike.elevationGain} m</p>
                        </div>
                    </div>
                </div>
                <a href="/" className="border border-gray-400 rounded-full px-6 py-2 text-sm hover:bg-gray-200 transition self-start mt-auto">
                    EXPLORE
                </a>
            </div>
            <img 
                src={hike.image} 
                alt={hike.name}
                className="w-1/2 h-64 rounded-2xl object-cover"
            />
        </section>
    );
}