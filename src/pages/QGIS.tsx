const QGIS = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            QGIS for Satellite Data Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master QGIS, the powerful open-source GIS software, for processing, 
            analyzing, and visualizing satellite imagery and geospatial data.
          </p>
        </div>

        {/* Introduction */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why QGIS for Satellite Data?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                QGIS (Quantum GIS) is a free, open-source Geographic Information System that provides 
                comprehensive tools for satellite data processing, analysis, and visualization. Its 
                extensive plugin ecosystem makes it ideal for remote sensing applications.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With built-in support for various satellite data formats and powerful processing 
                algorithms, QGIS serves as an excellent platform for both beginners and advanced users 
                in satellite data analysis.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Key Advantages:</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Free and open-source</li>
                  <li>• Cross-platform compatibility</li>
                  <li>• Extensive plugin ecosystem</li>
                  <li>• Active community support</li>
                  <li>• Regular updates and improvements</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="QGIS Geographic Information System Interface" 
                className="w-full h-64 object-cover"
              />
              <div className="bg-gray-50 p-3 text-center">
                <p className="text-sm font-medium text-gray-700">QGIS Interface</p>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started with QGIS</h2>
          <div className="space-y-6">
            
            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">📥 Installation</h3>
              <p className="text-gray-700 mb-3">Download and install QGIS from the official website</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-900">Windows</h4>
                  <p className="text-xs text-blue-700">OSGeo4W installer or standalone installer</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-900">macOS</h4>
                  <p className="text-xs text-green-700">DMG package or Homebrew</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h4 className="font-medium text-orange-900">Linux</h4>
                  <p className="text-xs text-orange-700">Package managers (apt, yum, pacman)</p>
                </div>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🔧 Essential Plugins</h3>
              <p className="text-gray-700 mb-3">Key plugins for satellite data processing</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-gray-900">Semi-Automatic Classification Plugin</h4>
                    <p className="text-xs text-gray-600">Complete workflow for satellite image classification</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-gray-900">Google Earth Engine</h4>
                    <p className="text-xs text-gray-600">Access cloud-based satellite data processing</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-gray-900">Orfeo Toolbox</h4>
                    <p className="text-xs text-gray-600">Advanced remote sensing image processing</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-gray-900">GRASS GIS</h4>
                    <p className="text-xs text-gray-600">Powerful raster and vector processing tools</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-gray-900">SAGA GIS</h4>
                    <p className="text-xs text-gray-600">System for automated geoscientific analyses</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-gray-900">Dzetsaka</h4>
                    <p className="text-xs text-gray-600">Classification plugin with machine learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Operations */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Basic Operations</h2>
          <div className="space-y-6">
            
            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                📂 Loading Satellite Data
              </h3>
              <p className="text-gray-700 mb-3">
                Import various satellite data formats into QGIS for analysis
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Step-by-step Process:</h4>
                <ol className="text-sm text-gray-700 space-y-1">
                  <li>1. <strong>Layer → Add Layer → Add Raster Layer</strong></li>
                  <li>2. Navigate to your satellite image file (GeoTIFF, HDF, etc.)</li>
                  <li>3. Select the file and click "Open"</li>
                  <li>4. Configure band rendering if needed</li>
                  <li>5. Set appropriate coordinate reference system (CRS)</li>
                </ol>
              </div>
            </div>

            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🎨 Band Combinations
              </h3>
              <p className="text-gray-700 mb-3">
                Create different band combinations for various analysis purposes
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-medium text-red-900">True Color (RGB)</h4>
                  <p className="text-xs text-red-700">Red: Band 4, Green: Band 3, Blue: Band 2</p>
                  <p className="text-xs text-red-600 mt-1">Natural color representation</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-900">False Color (CIR)</h4>
                  <p className="text-xs text-green-700">Red: Band 5, Green: Band 4, Blue: Band 3</p>
                  <p className="text-xs text-green-600 mt-1">Vegetation appears red</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-900">SWIR Composite</h4>
                  <p className="text-xs text-blue-700">Red: Band 7, Green: Band 5, Blue: Band 4</p>
                  <p className="text-xs text-blue-600 mt-1">Geology and soil analysis</p>
                </div>
              </div>
            </div>

            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                📊 Calculating Vegetation Indices
              </h3>
              <p className="text-gray-700 mb-3">
                Use the Raster Calculator to compute vegetation indices like NDVI
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">NDVI Formula in QGIS:</h4>
                <code className="text-green-400 text-sm">
                  (NIR - Red) / (NIR + Red)
                </code>
                <br />
                <code className="text-green-400 text-sm mt-2 block">
                  ("landsat_B5@1" - "landsat_B4@1") / ("landsat_B5@1" + "landsat_B4@1")
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Workflows */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Workflows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Land Cover Classification</h3>
              <p className="text-gray-700 mb-3">
                Complete workflow for supervised classification using QGIS
              </p>
              <div className="space-y-2">
                <div className="bg-blue-50 p-2 rounded text-xs">
                  <strong>1. Data Preparation:</strong> Load satellite image, create band stack
                </div>
                <div className="bg-green-50 p-2 rounded text-xs">
                  <strong>2. Training Data:</strong> Create polygons for each land cover class
                </div>
                <div className="bg-yellow-50 p-2 rounded text-xs">
                  <strong>3. Classification:</strong> Use Semi-Automatic Classification Plugin
                </div>
                <div className="bg-purple-50 p-2 rounded text-xs">
                  <strong>4. Validation:</strong> Assess accuracy using confusion matrix
                </div>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🔄 Change Detection</h3>
              <p className="text-gray-700 mb-3">
                Analyze temporal changes using multi-date satellite imagery
              </p>
              <div className="space-y-2">
                <div className="bg-red-50 p-2 rounded text-xs">
                  <strong>1. Image Registration:</strong> Ensure geometric alignment
                </div>
                <div className="bg-orange-50 p-2 rounded text-xs">
                  <strong>2. Preprocessing:</strong> Atmospheric correction, normalization
                </div>
                <div className="bg-blue-50 p-2 rounded text-xs">
                  <strong>3. Change Analysis:</strong> Image differencing, ratio methods
                </div>
                <div className="bg-green-50 p-2 rounded text-xs">
                  <strong>4. Thresholding:</strong> Define change/no-change areas
                </div>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">📈 Time Series Analysis</h3>
              <p className="text-gray-700 mb-3">
                Analyze temporal patterns in satellite data
              </p>
              <div className="space-y-2">
                <div className="bg-purple-50 p-2 rounded text-xs">
                  <strong>1. Data Stack:</strong> Create temporal image stack
                </div>
                <div className="bg-indigo-50 p-2 rounded text-xs">
                  <strong>2. Profile Tool:</strong> Extract pixel time series
                </div>
                <div className="bg-pink-50 p-2 rounded text-xs">
                  <strong>3. Trend Analysis:</strong> Identify patterns and anomalies
                </div>
                <div className="bg-cyan-50 p-2 rounded text-xs">
                  <strong>4. Visualization:</strong> Create charts and animations
                </div>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🗺️ Map Production</h3>
              <p className="text-gray-700 mb-3">
                Create professional maps and visualizations
              </p>
              <div className="space-y-2">
                <div className="bg-gray-100 p-2 rounded text-xs">
                  <strong>1. Layout Design:</strong> Use Print Layout for map composition
                </div>
                <div className="bg-gray-200 p-2 rounded text-xs">
                  <strong>2. Symbology:</strong> Apply appropriate color schemes
                </div>
                <div className="bg-gray-300 p-2 rounded text-xs">
                  <strong>3. Annotations:</strong> Add legends, scale bars, north arrow
                </div>
                <div className="bg-gray-400 p-2 rounded text-xs text-white">
                  <strong>4. Export:</strong> Generate high-quality images or PDFs
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Processing Toolbox */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Processing Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🧮 Raster Calculator</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Perform mathematical operations on raster bands
              </p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Vegetation indices (NDVI, EVI, SAVI)</li>
                <li>• Water indices (NDWI, MNDWI)</li>
                <li>• Band ratios and transformations</li>
                <li>• Conditional statements</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📐 Geometric Operations</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Geometric processing and transformation tools
              </p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Reprojection and warping</li>
                <li>• Georeferencing</li>
                <li>• Clipping and masking</li>
                <li>• Resampling and aggregation</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📊 Statistical Analysis</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Generate statistics and analyze raster data
              </p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Zonal statistics</li>
                <li>• Histogram analysis</li>
                <li>• Correlation analysis</li>
                <li>• Principal component analysis</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎨 Visualization</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Advanced visualization and rendering options
              </p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Color ramps and classifications</li>
                <li>• Transparency and blending</li>
                <li>• 3D visualization</li>
                <li>• Animation and time controls</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🔍 Object Detection</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Identify and extract features from imagery
              </p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Segmentation algorithms</li>
                <li>• Edge detection</li>
                <li>• Texture analysis</li>
                <li>• Feature extraction</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🌐 Web Services</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Access remote sensing web services
              </p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• WMS/WMTS layers</li>
                <li>• Google Earth Engine</li>
                <li>• Planet Labs API</li>
                <li>• Sentinel Hub</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practical Example */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical Example: NDVI Analysis</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Step-by-Step NDVI Calculation and Analysis
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Load Landsat Data</h4>
                  <p className="text-sm text-gray-600">Import Red (Band 4) and NIR (Band 5) bands</p>
                  <code className="text-xs bg-gray-200 px-2 py-1 rounded mt-1 inline-block">
                    Layer → Add Layer → Add Raster Layer
                  </code>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Open Raster Calculator</h4>
                  <p className="text-sm text-gray-600">Access the raster calculator tool</p>
                  <code className="text-xs bg-gray-200 px-2 py-1 rounded mt-1 inline-block">
                    Raster → Raster Calculator
                  </code>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Enter NDVI Formula</h4>
                  <p className="text-sm text-gray-600">Calculate NDVI using the formula</p>
                  <div className="bg-gray-800 text-green-400 p-2 rounded text-xs mt-1 font-mono">
                    ("NIR_Band@1" - "Red_Band@1") / ("NIR_Band@1" + "Red_Band@1")
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Apply Color Ramp</h4>
                  <p className="text-sm text-gray-600">Visualize NDVI with appropriate colors</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Right-click layer → Properties → Symbology → RdYlGn color ramp
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Analyze Results</h4>
                  <p className="text-sm text-gray-600">Interpret NDVI values and create reports</p>
                  <div className="text-xs text-gray-500 mt-1 space-y-1">
                    <p>• Values &gt; 0.5: Dense vegetation</p>
                    <p>• Values 0.2-0.5: Moderate vegetation</p>
                    <p>• Values &lt; 0.2: Sparse/no vegetation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips and Best Practices */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips & Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="tutorial-card border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Best Practices</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700 text-sm">Always check and set appropriate CRS</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700 text-sm">Save your project frequently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700 text-sm">Use virtual rasters for large datasets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700 text-sm">Document your processing workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700 text-sm">Validate results with ground truth data</span>
                </li>
              </ul>
            </div>

            <div className="tutorial-card border-l-4 border-yellow-500">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Performance Tips</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⚡</span>
                  <span className="text-gray-700 text-sm">Use pyramids for faster rendering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⚡</span>
                  <span className="text-gray-700 text-sm">Process tiles instead of entire images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⚡</span>
                  <span className="text-gray-700 text-sm">Close unused layers to save memory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⚡</span>
                  <span className="text-gray-700 text-sm">Use appropriate data types (UInt16 vs Float32)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⚡</span>
                  <span className="text-gray-700 text-sm">Enable multi-threading for processing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* YouTube Learning Resources */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📺 Learn More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🎥 QGIS Beginner Tutorial
              </h3>
              <p className="text-gray-700 mb-4">
                Complete guide to getting started with QGIS for beginners
              </p>
              <a 
                href="https://www.youtube.com/watch?v=xGgfQ_Mg-vM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <span className="mr-2">▶️</span>
                Watch Tutorial
              </a>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🎥 Satellite Data in QGIS
              </h3>
              <p className="text-gray-700 mb-4">
                Working with satellite imagery and remote sensing data in QGIS
              </p>
              <a 
                href="https://www.youtube.com/watch?v=D_jmYzKF7wU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <span className="mr-2">▶️</span>
                Watch Tutorial
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <a
            href="/machine-learning"
            className="btn-secondary"
          >
            ← Previous: Machine Learning
          </a>
          <a
            href="/isro-hackathon"
            className="btn-primary"
          >
            Next: ISRO Hackathon →
          </a>
        </div>
      </div>
    </div>
  );
};

export default QGIS;
