import React from "react";
import { ShieldCheck, Home, Activity, Radio, File, Heart } from "lucide-react"; // You can replace icons with your own or use SVGs

const SidebarIcon = ({ icon: Icon }) => (
  <div className="p-4 hover:bg-gray-200 cursor-pointer">
    <Icon className="w-6 h-6 text-gray-700" />
  </div>
);

const VirusProtectionDashboard = () => {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Sidebar */}
      <aside className="w-16 bg-gray-100 flex flex-col items-center py-4">
        <div className="mb-8">
          <img src="/logo.png" alt="Logo" className="w-6 h-6" />
        </div>
        <SidebarIcon icon={Home} />
        <SidebarIcon icon={ShieldCheck} />
        <SidebarIcon icon={Activity} />
        <SidebarIcon icon={Radio} />
        <SidebarIcon icon={File} />
        <SidebarIcon icon={Heart} />
        <div className="mt-auto text-xs text-gray-500 mb-4">v2.0</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-semibold mb-4">Virus Protection</h1>
        <p className="text-gray-600 mb-8">
          Protection for your device from threats
        </p>

        <section className="bg-gray-50 p-6 rounded-lg shadow w-full max-w-md">
          <h2 className="text-lg font-medium mb-4">Current threats</h2>
          <p className="text-sm text-gray-700">No Current Threats.</p>
          <p className="text-sm text-gray-700">Last scan: n/a</p>
          <p className="text-sm text-gray-700">0 Threats found.</p>
          <p className="text-sm text-gray-700">Scan lasted: n/a</p>
          <p className="text-sm text-gray-700 mb-6">2 Files Scanned</p>

          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Quick Scan
          </button>

          <div className="mt-4 text-sm space-y-2">
            <a href="#" className="text-blue-600 hover:underline">
              Scan options
            </a>
            <br />
            <a href="#" className="text-blue-600 hover:underline">
              Protection History
            </a>
          </div>
        </section>

        {/* Footer links */}
        <div className="mt-12 text-sm space-y-4 text-gray-700">
          <div>
            <p>Our community videos</p>
            <a href="#" className="text-blue-600 hover:underline">
              Learn more about protection
            </a>
          </div>
          <div>
            <p>Do you have a question?</p>
            <a href="#" className="text-blue-600 hover:underline">
              Get help
            </a>
          </div>
          <div>
            <p>Help improve Dws</p>
            <a href="#" className="text-blue-600 hover:underline">
              Give us feedback
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VirusProtectionDashboard;
