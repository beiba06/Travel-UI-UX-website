export default function Pricing() {
  return (
    <section className="max-container padding-container py-10 pb-32">
      <div className="text-center">
        <h1 className="bold-52 lg:bold-88">Pricing Plans</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] mx-auto">
          Choose the perfect plan for your hiking adventures. All plans include offline maps and basic features.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* Basic Plan */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-20">
          <h3 className="bold-32 text-green-50">Basic</h3>
          <div className="mt-4">
            <span className="bold-52">$9</span>
            <span className="regular-16 text-gray-30">/month</span>
          </div>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-16">Offline maps access</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-16">Basic trail information</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-16">Community access</span>
            </li>
          </ul>
          <button className="w-full mt-8 py-3 bg-green-50 text-white rounded-full bold-16 hover:bg-green-90 transition-all">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-green-50 rounded-2xl p-8 shadow-lg border-2 border-green-90 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-50 text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </div>
          <h3 className="bold-32 text-white">Pro</h3>
          <div className="mt-4">
            <span className="bold-52 text-white">$19</span>
            <span className="regular-16 text-green-90">/month</span>
          </div>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-green-50 text-xs">✓</span>
              <span className="regular-16 text-white">Everything in Basic</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-green-50 text-xs">✓</span>
              <span className="regular-16 text-white">AR navigation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-green-50 text-xs">✓</span>
              <span className="regular-16 text-white">Weather forecasts</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-green-50 text-xs">✓</span>
              <span className="regular-16 text-white">Priority support</span>
            </li>
          </ul>
          <button className="w-full mt-8 py-3 bg-white text-green-50 rounded-full bold-16 hover:bg-gray-10 transition-all">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-20">
          <h3 className="bold-32 text-green-50">Enterprise</h3>
          <div className="mt-4">
            <span className="bold-52">$49</span>
            <span className="regular-16 text-gray-30">/month</span>
          </div>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-16">Everything in Pro</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-16">Custom trip planning</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-16">Group management</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <span className="regular-16">24/7 support</span>
            </li>
          </ul>
          <button className="w-full mt-8 py-3 bg-green-50 text-white rounded-full bold-16 hover:bg-green-90 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
