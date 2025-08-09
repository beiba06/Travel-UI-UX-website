export default function Services() {
  return (
    <section className="max-container padding-container py-10 pb-32">
      <div className="text-center">
        <h1 className="bold-52 lg:bold-88">Our Services</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] mx-auto">
          Discover our comprehensive range of hiking and adventure services designed to enhance your outdoor experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* Service 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
            <img src="/map.svg" alt="Offline Maps" className="w-8 h-8" />
          </div>
          <h3 className="bold-32 text-green-50 mb-4">Offline Maps</h3>
          <p className="regular-16 text-gray-30 mb-6">
            Access detailed topographic maps even without internet connection. Download maps for your entire region and never lose your way again.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-green-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-14">High-resolution topographic maps</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-green-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-14">Trail difficulty ratings</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-green-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-14">Points of interest markers</span>
            </li>
          </ul>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
            <img src="/tech.svg" alt="AR Navigation" className="w-8 h-8" />
          </div>
          <h3 className="bold-32 text-green-50 mb-4">AR Navigation</h3>
          <p className="regular-16 text-gray-30 mb-6">
            Revolutionary augmented reality technology that overlays trail information directly onto your camera view for intuitive navigation.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-orange-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-14">Real-time trail overlay</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-orange-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-14">Distance and elevation markers</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-orange-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-14">Weather condition alerts</span>
            </li>
          </ul>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
            <img src="/calendar.svg" alt="Trip Planning" className="w-8 h-8" />
          </div>
          <h3 className="bold-32 text-green-50 mb-4">Trip Planning</h3>
          <p className="regular-16 text-gray-30 mb-6">
            Plan your adventures with friends using our intelligent scheduling system that considers weather, difficulty, and group preferences.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-green-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-14">Group coordination tools</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-green-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-14">Weather-based recommendations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-green-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-14">Equipment checklists</span>
            </li>
          </ul>
        </div>

        {/* Service 4 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
            <img src="/location.svg" alt="Community Sharing" className="w-8 h-8" />
          </div>
          <h3 className="bold-32 text-green-50 mb-4">Community Sharing</h3>
          <p className="regular-16 text-gray-30 mb-6">
            Connect with fellow hikers worldwide and discover new locations through our vibrant community of outdoor enthusiasts.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-orange-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-14">Photo and experience sharing</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-orange-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-14">Trail reviews and ratings</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 bg-orange-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-14">Safety alerts and updates</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
