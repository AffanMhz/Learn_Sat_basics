import CodeBlock from '../components/CodeBlock';
import { Link } from 'react-router-dom';

const SatelliteData = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Satellite Data Processing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide to understanding, processing, and analyzing satellite imagery 
            for Earth observation and geospatial applications.
          </p>
        </div>

        {/* Introduction */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Satellite Data</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Satellite data forms the backbone of modern Earth observation science. These datasets provide 
                critical information for monitoring environmental changes, managing natural resources, 
                and supporting decision-making across various sectors.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                From weather forecasting to agricultural monitoring, satellite imagery enables us to 
                observe our planet from space with unprecedented detail and temporal frequency.
              </p>
            </div>
            <div className="space-y-6">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1708738793054-32b71e3fc822?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Earth Observation Satellites"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold text-lg">Earth Observation Satellites</p>
                    <p className="text-gray-200 text-sm">Monitoring our planet from space</p>
                  </div>
                </div>
              </div>
              
              {/* Educational Video */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  NASA: How Do Satellites Work?
                </h4>
                <p className="text-blue-700 text-sm mb-3">Understanding satellite technology and data collection</p>
                <a 
                  href="https://www.youtube.com/watch?v=VM5nOaLU7XM&t=1s" 
                  
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Satellite Data */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Satellite Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="tutorial-card group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">🌈 Optical Data</h3>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📷</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Captures reflected sunlight across visible and near-infrared spectrum for natural color imaging.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  <span>RGB bands (Red, Green, Blue)</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  <span>Near-Infrared (NIR)</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                  <span>Short-wave Infrared (SWIR)</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                  <span>Panchromatic (high resolution)</span>
                </div>
              </div>
              <div className="mt-auto p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-800 font-medium">
                  <strong>🛰️ Examples:</strong> Landsat, Sentinel-2, MODIS, WorldView
                </p>
              </div>
            </div>

            <div className="tutorial-card group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-green-500">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">📡 Radar Data (SAR)</h3>
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📶</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Active microwave sensors that can penetrate clouds and work day/night.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                  <span>C-band, X-band, L-band</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  <span>VV, VH, HH, HV polarizations</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                  <span>Interferometric capabilities</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                  <span>All-weather imaging</span>
                </div>
              </div>
              <div className="mt-auto p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                <p className="text-xs text-green-800 font-medium">
                  <strong>🛰️ Examples:</strong> Sentinel-1, RADARSAT, ALOS PALSAR
                </p>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🌡️ Thermal Data</h3>
              <p className="text-gray-700 mb-3">
                Measures thermal radiation to determine surface temperature.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Thermal Infrared (TIR)</li>
                <li>• Land Surface Temperature</li>
                <li>• Urban heat islands</li>
                <li>• Agricultural stress detection</li>
              </ul>
              <div className="mt-3 p-3 bg-red-50 rounded-lg">
                <p className="text-xs text-red-700">
                  <strong>Examples:</strong> Landsat TIR, MODIS LST, ASTER TIR
                </p>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🌊 Hyperspectral Data</h3>
              <p className="text-gray-700 mb-3">
                Hundreds of narrow spectral bands for detailed material identification.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 200+ spectral bands</li>
                <li>• Material identification</li>
                <li>• Mineral mapping</li>
                <li>• Vegetation stress analysis</li>
              </ul>
              <div className="mt-3 p-3 bg-purple-50 rounded-lg">
                <p className="text-xs text-purple-700">
                  <strong>Examples:</strong> Hyperion, AVIRIS, EnMAP, PRISMA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Characteristics */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Data Characteristics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">📏 Spatial Resolution</h3>
              <p className="text-gray-700 mb-3">Size of the smallest detectable feature</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Very High</span>
                  <span className="text-xs text-gray-600">&lt; 5m</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">High</span>
                  <span className="text-xs text-gray-600">5-30m</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Medium</span>
                  <span className="text-xs text-gray-600">30-250m</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Low</span>
                  <span className="text-xs text-gray-600">&gt; 250m</span>
                </div>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">⏰ Temporal Resolution</h3>
              <p className="text-gray-700 mb-3">Frequency of data acquisition</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Sub-daily</span>
                  <span className="text-xs text-gray-600">GOES, MSG</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Daily</span>
                  <span className="text-xs text-gray-600">MODIS, VIIRS</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Weekly</span>
                  <span className="text-xs text-gray-600">Sentinel-2</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">16-day</span>
                  <span className="text-xs text-gray-600">Landsat</span>
                </div>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🌈 Spectral Resolution</h3>
              <p className="text-gray-700 mb-3">Number and width of spectral bands</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Multispectral</span>
                  <span className="text-xs text-gray-600">3-20 bands</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Superspectral</span>
                  <span className="text-xs text-gray-600">20-100 bands</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Hyperspectral</span>
                  <span className="text-xs text-gray-600">100+ bands</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="text-sm">Ultraspectral</span>
                  <span className="text-xs text-gray-600">1000+ bands</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Major Satellite Missions */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Major Satellite Missions</h2>
          
          {/* Quick Comparison Table */}
          <div className="mb-8 overflow-hidden rounded-lg border border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">🔍 Quick Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mission</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resolution</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revisit</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Access</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🇺🇸</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Landsat 8/9</div>
                          <div className="text-sm text-gray-500">NASA/USGS</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">30m / 15m</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">16 days</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Optical + Thermal
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Free
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🇪🇺</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Sentinel-2</div>
                          <div className="text-sm text-gray-500">ESA Copernicus</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10-60m</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5 days</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Multispectral
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Free
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🇮🇳</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Resourcesat-2A</div>
                          <div className="text-sm text-gray-500">ISRO</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5.8-56m</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">24 days</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Multispectral
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Registered
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            
            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🇺🇸 Landsat Program
              </h3>
              <p className="text-gray-700 mb-3">
                Longest-running Earth observation program providing continuous data since 1972.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium">Spatial Resolution</p>
                  <p className="text-xs text-gray-600">30m (multispectral), 15m (pan)</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium">Temporal Resolution</p>
                  <p className="text-xs text-gray-600">16 days</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium">Spectral Bands</p>
                  <p className="text-xs text-gray-600">11 bands (visible to thermal)</p>
                </div>
              </div>
            </div>

            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🇪🇺 Sentinel Missions
              </h3>
              <p className="text-gray-700 mb-3">
                European Space Agency's Copernicus program providing free and open satellite data.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium">Sentinel-1 (Radar)</p>
                  <p className="text-xs text-gray-600">6-12 day revisit, C-band SAR</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium">Sentinel-2 (Optical)</p>
                  <p className="text-xs text-gray-600">5 day revisit, 10-60m resolution</p>
                </div>
              </div>
            </div>

            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🇮🇳 Indian Satellites (ISRO)
              </h3>
              <p className="text-gray-700 mb-3">
                India's comprehensive Earth observation satellites for various applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium">Resourcesat</p>
                  <p className="text-xs text-gray-600">Natural resource monitoring</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium">Cartosat</p>
                  <p className="text-xs text-gray-600">High-resolution mapping</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm font-medium">RISAT</p>
                  <p className="text-xs text-gray-600">Radar imaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Processing Steps */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Processing Pipeline</h2>
          <div className="mb-6 text-center">
            <p className="text-gray-600">Follow this systematic approach for satellite data analysis</p>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8 px-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
              <div className="w-16 h-1 bg-blue-500 mx-2"></div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
              <div className="w-16 h-1 bg-green-500 mx-2"></div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
              <div className="w-16 h-1 bg-yellow-500 mx-2"></div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</div>
              <div className="w-16 h-1 bg-purple-500 mx-2"></div>
            </div>
            <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">5</div>
          </div>
          
          <div className="space-y-4">
            
            <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                1
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">Raw Data Acquisition</h3>
                  <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-medium">Start Here</span>
                </div>
                <p className="text-gray-700 mb-3">Download satellite imagery from data portals or APIs</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Earth Explorer</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Copernicus Hub</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">USGS</span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Preprocessing</h3>
                <p className="text-gray-700 text-sm">Atmospheric correction, geometric correction, radiometric calibration</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Image Enhancement</h3>
                <p className="text-gray-700 text-sm">Contrast adjustment, noise reduction, band combinations</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Analysis & Classification</h3>
                <p className="text-gray-700 text-sm">Feature extraction, machine learning classification, change detection</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
                5
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Validation & Output</h3>
                <p className="text-gray-700 text-sm">Accuracy assessment, result visualization, report generation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Exercise Section */}
        <div className="section-card bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Try It Yourself</h2>
            <p className="text-lg text-gray-700">Practice with real satellite data using these interactive exercises</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">NDVI Analysis</h3>
                  <p className="text-sm text-gray-600">Beginner Level</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Calculate vegetation health using Landsat data. Learn to identify healthy crops vs stressed vegetation.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Download Landsat 8 data
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Calculate NDVI index
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Create visualization
                </div>
              </div>
              <a 
                href="https://earthexplorer.usgs.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
              >
                <span className="mr-2">🚀</span>
                Start Exercise
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Water Body Detection</h3>
                  <p className="text-sm text-gray-600">Intermediate Level</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Use Sentinel-2 data to map water bodies and monitor changes over time using spectral indices.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Access Sentinel-2 data
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Apply NDWI algorithm
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Time series analysis
                </div>
              </div>
              <a 
                href="https://scihub.copernicus.eu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <span className="mr-2">🚀</span>
                Start Exercise
              </a>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start">
              <span className="text-yellow-600 mr-3 text-xl">💡</span>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-1">Pro Tip</h4>
                <p className="text-yellow-700 text-sm">
                  Start with cloud-free images and small study areas. Always check data quality and processing levels before analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources and Tools */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🛠️ Essential Tools & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl text-white">🐍</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">Python Libraries</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm font-medium">rasterio</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Raster I/O</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm font-medium">GDAL</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Processing</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm font-medium">xarray</span>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Analysis</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl text-white">☁️</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">Cloud Platforms</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm font-medium">Google Earth Engine</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Free</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm font-medium">AWS</span>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Paid</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm font-medium">Planetary Computer</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Free</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl text-white">🖥️</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">Desktop Software</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm font-medium">QGIS</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Free</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm font-medium">ENVI</span>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Commercial</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="text-sm font-medium">SNAP</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Python Example: Loading Satellite Data</h2>
          <CodeBlock 
            title="Satellite Data Processing with Python"
            code={`import rasterio
import numpy as np
import matplotlib.pyplot as plt
from rasterio.plot import show

# Load Landsat bands
def load_landsat_bands(file_paths):
    """Load multiple Landsat bands into a numpy array"""
    bands = []
    for path in file_paths:
        with rasterio.open(path) as src:
            band = src.read(1)  # Read first band
            bands.append(band)
    return np.stack(bands, axis=0)

# Calculate NDVI
def calculate_ndvi(nir_band, red_band):
    """Calculate Normalized Difference Vegetation Index"""
    # Avoid division by zero
    ndvi = np.divide(
        (nir_band - red_band),
        (nir_band + red_band),
        out=np.zeros_like(nir_band, dtype=float),
        where=(nir_band + red_band) != 0
    )
    return ndvi

# Example usage
band_paths = [
    'LC08_B2.TIF',  # Blue
    'LC08_B3.TIF',  # Green
    'LC08_B4.TIF',  # Red
    'LC08_B5.TIF'   # NIR
]

# Load bands
bands = load_landsat_bands(band_paths)
blue, green, red, nir = bands

# Calculate NDVI
ndvi = calculate_ndvi(nir, red)

# Create RGB composite
rgb = np.stack([red, green, blue], axis=2)
rgb_normalized = rgb / np.max(rgb)  # Normalize for display

# Display results
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))
ax1.imshow(rgb_normalized)
ax1.set_title('RGB Composite')
ax1.axis('off')

im = ax2.imshow(ndvi, cmap='RdYlGn', vmin=-1, vmax=1)
ax2.set_title('NDVI')
ax2.axis('off')
plt.colorbar(im, ax=ax2)

plt.tight_layout()
plt.show()`}
          />
        </div>

        {/* Common Applications */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="tutorial-card">
              <div className="text-3xl mb-3">🌾</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Agriculture</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Crop monitoring and yield prediction</li>
                <li>• Irrigation management</li>
                <li>• Pest and disease detection</li>
                <li>• Precision agriculture</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <div className="text-3xl mb-3">🌳</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Forestry</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Deforestation monitoring</li>
                <li>• Forest health assessment</li>
                <li>• Carbon stock estimation</li>
                <li>• Wildfire detection</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <div className="text-3xl mb-3">🏙️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Urban Planning</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Urban growth mapping</li>
                <li>• Infrastructure monitoring</li>
                <li>• Heat island analysis</li>
                <li>• Population estimation</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <div className="text-3xl mb-3">🌊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Water Resources</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Water quality monitoring</li>
                <li>• Flood mapping</li>
                <li>• Reservoir management</li>
                <li>• Coastal erosion</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <div className="text-3xl mb-3">⛰️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Geology</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Mineral exploration</li>
                <li>• Geological mapping</li>
                <li>• Landslide monitoring</li>
                <li>• Earthquake damage assessment</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <div className="text-3xl mb-3">🌡️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Climate</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Climate change monitoring</li>
                <li>• Weather forecasting</li>
                <li>• Drought assessment</li>
                <li>• Sea level rise</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ Frequently Asked Questions</h2>
          <div className="space-y-4">
            
            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">What's the difference between Landsat and Sentinel-2?</h3>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-gray-700">
                <p className="mb-2">Key differences:</p>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Revisit Time:</strong> Landsat (16 days) vs Sentinel-2 (5 days)</li>
                  <li>• <strong>Resolution:</strong> Landsat (30m) vs Sentinel-2 (10-60m)</li>
                  <li>• <strong>Bands:</strong> Landsat has thermal bands, Sentinel-2 has more visible/NIR bands</li>
                  <li>• <strong>Coverage:</strong> Both global, but different orbital patterns</li>
                </ul>
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">How do I choose the right satellite data for my project?</h3>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-gray-700 text-sm">
                <p className="mb-2">Consider these factors:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Spatial Requirements:</p>
                    <ul className="space-y-1">
                      <li>• Study area size</li>
                      <li>• Required detail level</li>
                      <li>• Feature identification needs</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Temporal Requirements:</p>
                    <ul className="space-y-1">
                      <li>• Change detection frequency</li>
                      <li>• Seasonal analysis needs</li>
                      <li>• Historical data availability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">What preprocessing steps are essential?</h3>
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-gray-700 text-sm">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                    <div>
                      <p className="font-medium">Cloud masking</p>
                      <p className="text-gray-600">Remove clouds and shadows from analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                    <div>
                      <p className="font-medium">Atmospheric correction</p>
                      <p className="text-gray-600">Convert to surface reflectance values</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                    <div>
                      <p className="font-medium">Geometric correction</p>
                      <p className="text-gray-600">Ensure accurate geolocation and projection</p>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/rasterization"
            className="btn-secondary"
          >
            ← Previous: Rasterization
          </Link>
          <Link
            to="/machine-learning"
            className="btn-primary"
          >
            Next: Machine Learning →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SatelliteData;
