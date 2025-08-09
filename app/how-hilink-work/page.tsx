export default function HowHilinkWork() {
  return (
    <section className="max-container padding-container py-10 pb-32">
      <div className="text-center">
        <h1 className="bold-52 lg:bold-88">How Hilink Works</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] mx-auto">
          Discover how our innovative platform revolutionizes your hiking experience through cutting-edge technology and community-driven features.
        </p>
      </div>
      
      <div className="mt-20">
        {/* Step 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <span className="bold-20 text-white">1</span>
              </div>
              <h2 className="bold-40 text-green-50">Download & Setup</h2>
            </div>
            <p className="regular-16 text-gray-30 mb-6">
              Download the Hilink app from your device's app store and create your personalized hiking profile. Set your experience level, preferred difficulty, and fitness goals to receive tailored recommendations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <img src="/phone.png" alt="" className="w-5 h-5" />
                <span className="regular-14">Available on iOS and Android</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/user.svg" alt="" className="w-5 h-5" />
                <span className="regular-14">Quick profile setup</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/star.svg" alt="" className="w-5 h-5" />
                <span className="regular-14">Personalized recommendations</span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <img src="/phones.png" alt="Download App" className="w-full h-auto" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-20">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                <span className="bold-20 text-white">2</span>
              </div>
              <h2 className="bold-40 text-green-50">Explore & Plan</h2>
            </div>
            <p className="regular-16 text-gray-30 mb-6">
              Browse thousands of trails worldwide, read community reviews, and plan your perfect adventure. Use our intelligent filters to find trails that match your preferences and skill level.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <img src="/map.svg" alt="" className="w-5 h-5" />
                <span className="regular-14">Interactive trail maps</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/calendar.svg" alt="" className="w-5 h-5" />
                <span className="regular-14">Smart scheduling system</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/quote.svg" alt="" className="w-5 h-5" />
                <span className="regular-14">Community reviews</span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <img src="/feature-bg.png" alt="Explore Trails" className="w-full h-auto" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <span className="bold-20 text-white">3</span>
              </div>
              <h2 className="bold-40 text-green-50">Navigate with AR</h2>
            </div>
            <p className="regular-16 text-gray-30 mb-6">
              Experience the future of hiking with our augmented reality navigation. Point your camera at the trail and see real-time directions, distance markers, and points of interest overlaid on your view.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <img src="/tech.svg" alt="" className="w-5 h-5" />
                <span className="regular-14">AR-powered navigation</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/location.svg" alt="" className="w-5 h-5" />
                <span className="regular-14">Real-time positioning</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/meter.svg" alt="" className="w-5 h-5" />
                <span className="regular-14">Distance and elevation tracking</span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <img src="/hero.png" alt="AR Navigation" className="w-full h-auto" />
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                <span className="bold-20 text-white">4</span>
              </div>
              <h2 className="bold-40 text-green-50">Share & Connect</h2>
            </div>
            <p className="regular-16 text-gray-30 mb-6">
              Share your adventures with the global Hilink community. Upload photos, write reviews, and discover new trails recommended by fellow hikers from around the world.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <img src="/facebook.svg" alt="" className="w-5 h-5" />
                <span className="regular-14">Social sharing features</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/instagram.svg" alt="" className="w-5 h-5" />
                <span className="regular-14">Photo documentation</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/youtube.svg" alt="" className="w-5 h-5" />
                <span className="regular-14">Community contributions</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 relative">
            <img src="/img-1.png" alt="Community" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
