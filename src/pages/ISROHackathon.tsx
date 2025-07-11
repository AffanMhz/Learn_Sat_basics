import { Link } from 'react-router-dom';

const ISROHackathon = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ISRO Hackathon Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete preparation guide for ISRO hackathons, covering problem-solving strategies, 
            technical skills, and winning approaches for space technology challenges.
          </p>
        </div>

        {/* Introduction */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About ISRO Hackathons</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                ISRO (Indian Space Research Organisation) regularly organizes hackathons to engage 
                innovators, students, and professionals in solving real-world space technology 
                challenges. These events focus on satellite data applications, space exploration, 
                and Earth observation problems.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Participants work with actual satellite datasets, develop innovative solutions, 
                and contribute to India's space program through creative problem-solving and 
                technological innovation.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Common Themes:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Earth observation and monitoring</li>
                  <li>• Agricultural applications</li>
                  <li>• Disaster management</li>
                  <li>• Urban planning and development</li>
                  <li>• Climate change analysis</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/02/isro-1024x575.jpg" 
                alt="ISRO Space Innovation Challenge" 
                className="w-full h-64 object-cover"
              />
              <div className="bg-gray-50 p-3 text-center">
                <p className="text-sm font-medium text-gray-700">ISRO Innovation Challenge</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hackathon Types */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of ISRO Hackathons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🌍 Earth Observation</h3>
              <p className="text-gray-700 mb-3">
                Focus on satellite data analysis for monitoring Earth's resources and environment.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Land cover classification</li>
                <li>• Crop monitoring and yield prediction</li>
                <li>• Water resource management</li>
                <li>• Forest monitoring</li>
                <li>• Urban heat island analysis</li>
              </ul>
              <div className="mt-3 p-3 bg-green-50 rounded-lg">
                <p className="text-xs text-green-700">
                  <strong>Datasets:</strong> Resourcesat, Cartosat, Sentinel, Landsat
                </p>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">⚡ Disaster Management</h3>
              <p className="text-gray-700 mb-3">
                Develop solutions for rapid disaster response and recovery using satellite data.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Flood mapping and assessment</li>
                <li>• Cyclone tracking and impact</li>
                <li>• Earthquake damage assessment</li>
                <li>• Wildfire detection and monitoring</li>
                <li>• Landslide susceptibility mapping</li>
              </ul>
              <div className="mt-3 p-3 bg-red-50 rounded-lg">
                <p className="text-xs text-red-700">
                  <strong>Focus:</strong> Real-time processing, early warning systems
                </p>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏛️ Smart Cities</h3>
              <p className="text-gray-700 mb-3">
                Urban planning and smart city solutions using high-resolution satellite imagery.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Urban sprawl monitoring</li>
                <li>• Infrastructure development</li>
                <li>• Traffic and transportation analysis</li>
                <li>• Green cover assessment</li>
                <li>• Population estimation</li>
              </ul>
              <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-700">
                  <strong>Data:</strong> Very high-resolution imagery, GIS datasets
                </p>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🌡️ Climate Studies</h3>
              <p className="text-gray-700 mb-3">
                Climate change research and environmental monitoring applications.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Carbon footprint analysis</li>
                <li>• Sea level rise monitoring</li>
                <li>• Glacier retreat assessment</li>
                <li>• Air quality monitoring</li>
                <li>• Weather pattern analysis</li>
              </ul>
              <div className="mt-3 p-3 bg-purple-50 rounded-lg">
                <p className="text-xs text-purple-700">
                  <strong>Approach:</strong> Time series analysis, trend detection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Problem-Solving Strategy */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Problem-Solving Strategy</h2>
          <div className="space-y-6">
            
            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Understand the Problem</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Carefully read the problem statement and identify key requirements
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• What is the main objective?</li>
                  <li>• What datasets are provided?</li>
                  <li>• What are the expected deliverables?</li>
                  <li>• Are there any constraints or limitations?</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Data Exploration</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Thoroughly examine the provided datasets and understand their characteristics
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Data format and structure</li>
                  <li>• Spatial and temporal coverage</li>
                  <li>• Quality assessment and missing data</li>
                  <li>• Coordinate reference systems</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Solution Design</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Plan your approach and select appropriate methods and tools
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Choose the right algorithms</li>
                  <li>• Plan the processing workflow</li>
                  <li>• Consider computational requirements</li>
                  <li>• Design validation strategy</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Implementation</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Develop and test your solution iteratively
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Start with a simple baseline</li>
                  <li>• Implement core functionality first</li>
                  <li>• Test on sample data</li>
                  <li>• Iterate and improve</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
                5
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Validation & Presentation</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Validate results and prepare compelling presentation
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Quantitative accuracy assessment</li>
                  <li>• Visual validation with examples</li>
                  <li>• Create clear visualizations</li>
                  <li>• Prepare demonstration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Required */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🐍 Programming</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Python (NumPy, Pandas, Matplotlib)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  R (for statistical analysis)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  JavaScript (for web applications)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Google Earth Engine (cloud computing)
                </li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📊 Data Processing</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  GDAL/OGR (geospatial data handling)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Rasterio (raster data processing)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  GeoPandas (vector data analysis)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  Xarray (multidimensional arrays)
                </li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🤖 Machine Learning</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  Scikit-learn (classical ML)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  TensorFlow/PyTorch (deep learning)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-lime-500 rounded-full mr-2"></span>
                  OpenCV (computer vision)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  Keras (neural networks)
                </li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🗺️ GIS Tools</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  QGIS (desktop GIS)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-violet-500 rounded-full mr-2"></span>
                  ArcGIS (commercial GIS)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                  GRASS GIS (analysis tools)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>
                  PostGIS (spatial database)
                </li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">☁️ Cloud Platforms</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Google Earth Engine
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  AWS (S3, EC2, SageMaker)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Microsoft Azure
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  Docker (containerization)
                </li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📈 Visualization</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                  Matplotlib/Seaborn (Python)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Plotly (interactive plots)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Folium (web mapping)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  D3.js (web visualizations)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sample Problem */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sample Problem: Crop Health Monitoring</h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
            
            <div className="problem-card bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🌾 Problem Statement
              </h3>
              <p className="text-gray-700 mb-4">
                Develop a system to monitor crop health across agricultural regions using multi-temporal 
                satellite imagery. The solution should identify stressed areas, predict potential yield 
                issues, and provide actionable insights to farmers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-900">Provided Data</h4>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Sentinel-2 multispectral imagery (6 months)</li>
                    <li>• Field boundary polygons</li>
                    <li>• Crop type information</li>
                    <li>• Weather station data</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-900">Expected Output</h4>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• Crop health index maps</li>
                    <li>• Stress detection alerts</li>
                    <li>• Yield prediction models</li>
                    <li>• Web-based dashboard</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="problem-card bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                💡 Solution Approach
              </h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">1. Data Preprocessing</h4>
                  <p className="text-xs text-gray-600">Cloud masking, atmospheric correction, time series stacking</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">2. Feature Engineering</h4>
                  <p className="text-xs text-gray-600">NDVI, EVI, NDWI calculation, phenological metrics extraction</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">3. Machine Learning</h4>
                  <p className="text-xs text-gray-600">Random Forest for classification, LSTM for time series prediction</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">4. Validation & Deployment</h4>
                  <p className="text-xs text-gray-600">Cross-validation with ground truth, web application development</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Winning Strategies */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Winning Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="tutorial-card border-l-4 border-yellow-500">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Technical Excellence</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⭐</span>
                  <span className="text-gray-700 text-sm">Use multiple validation approaches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⭐</span>
                  <span className="text-gray-700 text-sm">Implement robust error handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⭐</span>
                  <span className="text-gray-700 text-sm">Optimize for computational efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⭐</span>
                  <span className="text-gray-700 text-sm">Document code and methodology</span>
                </li>
              </ul>
            </div>

            <div className="tutorial-card border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Innovation Factor</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💡</span>
                  <span className="text-gray-700 text-sm">Combine multiple data sources creatively</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💡</span>
                  <span className="text-gray-700 text-sm">Apply novel algorithms or approaches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💡</span>
                  <span className="text-gray-700 text-sm">Address real-world scalability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💡</span>
                  <span className="text-gray-700 text-sm">Consider user experience and usability</span>
                </li>
              </ul>
            </div>

            <div className="tutorial-card border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Presentation Impact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🎯</span>
                  <span className="text-gray-700 text-sm">Tell a compelling story with data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🎯</span>
                  <span className="text-gray-700 text-sm">Create stunning visualizations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🎯</span>
                  <span className="text-gray-700 text-sm">Demonstrate clear business value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🎯</span>
                  <span className="text-gray-700 text-sm">Prepare for technical questions</span>
                </li>
              </ul>
            </div>

            <div className="tutorial-card border-l-4 border-purple-500">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Team Collaboration</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🤝</span>
                  <span className="text-gray-700 text-sm">Leverage diverse skill sets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🤝</span>
                  <span className="text-gray-700 text-sm">Use version control (Git)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🤝</span>
                  <span className="text-gray-700 text-sm">Assign clear roles and responsibilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">🤝</span>
                  <span className="text-gray-700 text-sm">Regular progress reviews and iterations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Useful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📚 Learning Materials</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• ISRO official documentation</li>
                <li>• Remote sensing textbooks</li>
                <li>• Google Earth Engine tutorials</li>
                <li>• Coursera/edX courses</li>
                <li>• YouTube technical channels</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">💾 Datasets</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• ISRO Data Portal (Bhuvan)</li>
                <li>• Google Earth Engine catalog</li>
                <li>• Copernicus Open Access Hub</li>
                <li>• USGS Earth Explorer</li>
                <li>• NASA Earthdata</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🛠️ Tools & Platforms</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Jupyter Notebooks</li>
                <li>• Google Colab</li>
                <li>• GitHub for collaboration</li>
                <li>• Docker for deployment</li>
                <li>• Cloud computing platforms</li>
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
                🎥 ISRO Missions & Achievements
              </h3>
              <p className="text-gray-700 mb-4">
                Learn about ISRO's incredible space missions and technological achievements
              </p>
              <a 
                href="https://www.youtube.com/watch?v=RgLwBq0Y1mE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <span className="mr-2">▶️</span>
                Watch Documentary
              </a>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🎥 Hackathon Success Stories
              </h3>
              <p className="text-gray-700 mb-4">
                Inspiring stories and solutions from previous ISRO hackathon winners
              </p>
              <a 
                href="https://www.youtube.com/watch?v=Wh3yYHs8i-g" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <span className="mr-2">▶️</span>
                Watch Stories
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/qgis"
            className="btn-secondary"
          >
            ← Previous: QGIS
          </Link>
          <Link
            to="/preparation"
            className="btn-primary"
          >
            Next: Preparation →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ISROHackathon;
