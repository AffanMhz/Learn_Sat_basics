const Preparation = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preparation Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive preparation guide with practice datasets, coding exercises, 
            and resources to master satellite data analysis and geospatial skills.
          </p>
        </div>

        {/* Learning Path */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Learning Path</h2>
          <div className="space-y-6">
            
            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Fundamentals (Weeks 1-2)</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Build strong foundation in remote sensing principles and GIS concepts
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-900 text-sm">Theory</h4>
                    <ul className="text-xs text-blue-700 space-y-1 mt-1">
                      <li>• Electromagnetic spectrum</li>
                      <li>• Satellite orbits and sensors</li>
                      <li>• Coordinate systems</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-900 text-sm">Tools</h4>
                    <ul className="text-xs text-blue-700 space-y-1 mt-1">
                      <li>• QGIS installation and setup</li>
                      <li>• Python environment</li>
                      <li>• Basic GDAL operations</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-900 text-sm">Practice</h4>
                    <ul className="text-xs text-blue-700 space-y-1 mt-1">
                      <li>• Load and visualize satellite data</li>
                      <li>• Coordinate transformations</li>
                      <li>• Basic band combinations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Data Processing (Weeks 3-4)</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Master satellite data preprocessing and analysis techniques
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-medium text-green-900 text-sm">Preprocessing</h4>
                    <ul className="text-xs text-green-700 space-y-1 mt-1">
                      <li>• Atmospheric correction</li>
                      <li>• Geometric correction</li>
                      <li>• Cloud masking</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-medium text-green-900 text-sm">Indices</h4>
                    <ul className="text-xs text-green-700 space-y-1 mt-1">
                      <li>• NDVI, EVI, SAVI</li>
                      <li>• NDWI, MNDWI</li>
                      <li>• NDBI, UI</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-medium text-green-900 text-sm">Operations</h4>
                    <ul className="text-xs text-green-700 space-y-1 mt-1">
                      <li>• Image mosaicking</li>
                      <li>• Clipping and masking</li>
                      <li>• Resampling methods</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Machine Learning (Weeks 5-6)</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Apply machine learning techniques to satellite data analysis
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-medium text-yellow-900 text-sm">Supervised Learning</h4>
                    <ul className="text-xs text-yellow-700 space-y-1 mt-1">
                      <li>• Land cover classification</li>
                      <li>• Random Forest, SVM</li>
                      <li>• Accuracy assessment</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-medium text-yellow-900 text-sm">Deep Learning</h4>
                    <ul className="text-xs text-yellow-700 space-y-1 mt-1">
                      <li>• CNNs for image analysis</li>
                      <li>• Transfer learning</li>
                      <li>• Semantic segmentation</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-medium text-yellow-900 text-sm">Time Series</h4>
                    <ul className="text-xs text-yellow-700 space-y-1 mt-1">
                      <li>• Change detection</li>
                      <li>• Trend analysis</li>
                      <li>• Anomaly detection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Advanced Applications (Weeks 7-8)</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Work on real-world projects and competition-style problems
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-medium text-purple-900 text-sm">Projects</h4>
                    <ul className="text-xs text-purple-700 space-y-1 mt-1">
                      <li>• Crop monitoring system</li>
                      <li>• Urban growth analysis</li>
                      <li>• Disaster impact assessment</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-medium text-purple-900 text-sm">Deployment</h4>
                    <ul className="text-xs text-purple-700 space-y-1 mt-1">
                      <li>• Web applications</li>
                      <li>• Cloud computing</li>
                      <li>• API development</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="font-medium text-purple-900 text-sm">Portfolio</h4>
                    <ul className="text-xs text-purple-700 space-y-1 mt-1">
                      <li>• GitHub repositories</li>
                      <li>• Documentation</li>
                      <li>• Presentation skills</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Datasets */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice Datasets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🌍 Beginner Level</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Start with these manageable datasets to learn basic concepts
              </p>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-900 text-sm">Landsat 8 Sample</h4>
                  <p className="text-xs text-blue-700 mb-2">Single scene over agricultural area</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded">30m resolution</span>
                    <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded">Multi-spectral</span>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-900 text-sm">Sentinel-2 Subset</h4>
                  <p className="text-xs text-green-700 mb-2">Cloud-free urban area</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded">10m resolution</span>
                    <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded">13 bands</span>
                  </div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <h4 className="font-medium text-yellow-900 text-sm">MODIS Time Series</h4>
                  <p className="text-xs text-yellow-700 mb-2">One year of vegetation index data</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded">250m resolution</span>
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded">16-day composite</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🚀 Advanced Level</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Challenge yourself with complex, real-world datasets
              </p>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-medium text-red-900 text-sm">Disaster Response Dataset</h4>
                  <p className="text-xs text-red-700 mb-2">Before/after flood imagery</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-red-200 text-red-800 text-xs rounded">Multi-temporal</span>
                    <span className="px-2 py-1 bg-red-200 text-red-800 text-xs rounded">Multi-sensor</span>
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium text-purple-900 text-sm">Hyperspectral Collection</h4>
                  <p className="text-xs text-purple-700 mb-2">Mineral mapping challenge</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded">200+ bands</span>
                    <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded">High spectral resolution</span>
                  </div>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <h4 className="font-medium text-indigo-900 text-sm">SAR Time Series</h4>
                  <p className="text-xs text-indigo-700 mb-2">Coherence change detection</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-indigo-200 text-indigo-800 text-xs rounded">C-band SAR</span>
                    <span className="px-2 py-1 bg-indigo-200 text-indigo-800 text-xs rounded">Interferometric</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coding Exercises */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coding Exercises</h2>
          <div className="space-y-6">
            
            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                💻 Exercise 1: NDVI Calculator
              </h3>
              <p className="text-gray-700 mb-3 text-sm">
                Create a Python function to calculate NDVI from multispectral satellite imagery
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-3">
                <h4 className="text-white font-medium mb-2 text-sm">Starter Code:</h4>
                <pre className="text-green-400 text-xs">
{`import rasterio
import numpy as np

def calculate_ndvi(red_band_path, nir_band_path, output_path):
    """
    Calculate NDVI from red and NIR bands
    
    Parameters:
    red_band_path: Path to red band file
    nir_band_path: Path to NIR band file
    output_path: Path for output NDVI file
    
    Returns:
    ndvi: NDVI array
    """
    # Your code here
    pass

# Test with sample data
ndvi = calculate_ndvi('red.tif', 'nir.tif', 'ndvi.tif')`}
                </pre>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-medium text-blue-900 text-sm">Learning Objectives:</h4>
                <ul className="text-xs text-blue-700 space-y-1 mt-1">
                  <li>• Raster data I/O operations</li>
                  <li>• Mathematical operations on arrays</li>
                  <li>• Handling NoData values</li>
                  <li>• Saving results with proper metadata</li>
                </ul>
              </div>
            </div>

            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🎯 Exercise 2: Land Cover Classification
              </h3>
              <p className="text-gray-700 mb-3 text-sm">
                Implement supervised classification using training polygons and satellite imagery
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-900 text-sm">Tasks:</h4>
                  <ul className="text-xs text-green-700 space-y-1 mt-1">
                    <li>• Load multispectral image</li>
                    <li>• Extract training samples</li>
                    <li>• Train Random Forest classifier</li>
                    <li>• Apply to entire image</li>
                    <li>• Calculate accuracy metrics</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <h4 className="font-medium text-yellow-900 text-sm">Skills Developed:</h4>
                  <ul className="text-xs text-yellow-700 space-y-1 mt-1">
                    <li>• Feature engineering</li>
                    <li>• Machine learning workflows</li>
                    <li>• Model validation</li>
                    <li>• Spatial data handling</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                📈 Exercise 3: Time Series Analysis
              </h3>
              <p className="text-gray-700 mb-3 text-sm">
                Analyze vegetation phenology using multi-temporal NDVI data
              </p>
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="font-medium text-purple-900 text-sm">Advanced Challenge:</h4>
                <p className="text-xs text-purple-700 mt-1">
                  Detect crop growth stages, identify anomalies, and predict harvest timing 
                  using time series decomposition and trend analysis techniques.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools and Setup */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Development Environment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🐍 Python Setup</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Essential Python environment for satellite data analysis
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-3">
                <h4 className="text-white font-medium mb-2 text-sm">Installation Commands:</h4>
                <pre className="text-green-400 text-xs">
{`# Create conda environment
conda create -n satellite python=3.9

# Activate environment
conda activate satellite

# Install core packages
conda install -c conda-forge rasterio geopandas
conda install -c conda-forge folium matplotlib seaborn
conda install scikit-learn tensorflow pytorch

# Install via pip
pip install earthengine-api
pip install planetary-computer
pip install xarray rioxarray`}
                </pre>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🛠️ Essential Tools</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Complete toolkit for geospatial development
              </p>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-900 text-sm">IDE & Editors</h4>
                  <ul className="text-xs text-blue-700 space-y-1 mt-1">
                    <li>• Jupyter Lab/Notebook</li>
                    <li>• Visual Studio Code</li>
                    <li>• PyCharm Professional</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-900 text-sm">GIS Software</h4>
                  <ul className="text-xs text-green-700 space-y-1 mt-1">
                    <li>• QGIS (latest LTR version)</li>
                    <li>• GRASS GIS</li>
                    <li>• SAGA GIS</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium text-purple-900 text-sm">Version Control</h4>
                  <ul className="text-xs text-purple-700 space-y-1 mt-1">
                    <li>• Git for code versioning</li>
                    <li>• GitHub for collaboration</li>
                    <li>• Git LFS for large files</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Study Schedule */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">8-Week Study Schedule</h2>
          <div className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="tutorial-card bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Week 1-2</h3>
                <h4 className="font-medium text-blue-800 text-sm mb-2">Foundations</h4>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Remote sensing theory (8 hours)</li>
                  <li>• Python/GDAL basics (12 hours)</li>
                  <li>• QGIS fundamentals (8 hours)</li>
                  <li>• Practice exercises (12 hours)</li>
                </ul>
              </div>

              <div className="tutorial-card bg-gradient-to-br from-green-50 to-green-100">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Week 3-4</h3>
                <h4 className="font-medium text-green-800 text-sm mb-2">Data Processing</h4>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• Image preprocessing (10 hours)</li>
                  <li>• Index calculations (8 hours)</li>
                  <li>• Geometric operations (8 hours)</li>
                  <li>• Mini-projects (14 hours)</li>
                </ul>
              </div>

              <div className="tutorial-card bg-gradient-to-br from-yellow-50 to-yellow-100">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Week 5-6</h3>
                <h4 className="font-medium text-yellow-800 text-sm mb-2">Machine Learning</h4>
                <ul className="text-xs text-yellow-700 space-y-1">
                  <li>• Classification methods (12 hours)</li>
                  <li>• Deep learning intro (10 hours)</li>
                  <li>• Time series analysis (8 hours)</li>
                  <li>• Validation techniques (10 hours)</li>
                </ul>
              </div>

              <div className="tutorial-card bg-gradient-to-br from-purple-50 to-purple-100">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Week 7-8</h3>
                <h4 className="font-medium text-purple-800 text-sm mb-2">Applications</h4>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>• End-to-end projects (20 hours)</li>
                  <li>• Competition practice (10 hours)</li>
                  <li>• Portfolio development (6 hours)</li>
                  <li>• Presentation skills (4 hours)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Daily Commitment</h3>
              <p className="text-sm text-gray-700 mb-2">
                Recommended daily study time: <strong>3-4 hours</strong> (flexible based on your schedule)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-2 rounded">
                  <strong>Theory & Reading:</strong> 1 hour
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Hands-on Practice:</strong> 2 hours
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Review & Documentation:</strong> 1 hour
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment Checklist */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills Assessment Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ Technical Skills</h3>
              <div className="space-y-2">
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                  <span>Load and visualize satellite imagery in Python</span>
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                  <span>Calculate vegetation and water indices</span>
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                  <span>Perform supervised classification</span>
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                  <span>Handle time series satellite data</span>
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                  <span>Use QGIS for geospatial analysis</span>
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                  <span>Apply machine learning to satellite data</span>
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-blue-600" />
                  <span>Create web-based visualizations</span>
                </label>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Project Skills</h3>
              <div className="space-y-2">
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                  <span>Complete end-to-end data analysis workflow</span>
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                  <span>Document code and methodology</span>
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                  <span>Create professional visualizations</span>
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                  <span>Validate results with ground truth</span>
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                  <span>Present findings effectively</span>
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                  <span>Collaborate using version control</span>
                </label>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-3 h-4 w-4 text-green-600" />
                  <span>Deploy solutions to cloud platforms</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start?</h2>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              You now have a comprehensive roadmap to master satellite data analysis. 
              Start with the fundamentals and progress through each stage systematically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/rasterization"
                className="btn-primary"
              >
                Begin Learning Journey
              </a>
              <a
                href="/isro-hackathon"
                className="btn-secondary"
              >
                View Hackathon Guide
              </a>
            </div>
          </div>
        </div>

        {/* YouTube Learning Resources */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📺 Learning Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🎥 Python for Geospatial
              </h3>
              <p className="text-gray-700 mb-4">
                Complete Python programming course for geospatial analysis
              </p>
              <a 
                href="https://www.youtube.com/watch?v=olxhwAkZGZA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <span className="mr-2">▶️</span>
                Watch Course
              </a>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🎥 Remote Sensing Basics
              </h3>
              <p className="text-gray-700 mb-4">
                Fundamentals of remote sensing and satellite image interpretation
              </p>
              <a 
                href="https://www.youtube.com/watch?v=wn_VWOWGRXo" 
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
                🎥 Competition Strategies
              </h3>
              <p className="text-gray-700 mb-4">
                Tips and strategies for succeeding in hackathons and competitions
              </p>
              <a 
                href="https://www.youtube.com/watch?v=7Hu2fuRCL7Q" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <span className="mr-2">▶️</span>
                Watch Tips
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <a
            href="/isro-hackathon"
            className="btn-secondary"
          >
            ← Previous: ISRO Hackathon
          </a>
          <a
            href="/"
            className="btn-primary"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Preparation;
