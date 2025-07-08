import CodeBlock from '../components/CodeBlock';

const Rasterization = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Rasterization Fundamentals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the art of converting vector data to raster format and understanding 
            spatial resolution in geospatial analysis.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Rasterization?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Rasterization is the process of converting vector-based geographic data (points, lines, and polygons) 
                into a raster format (a grid of pixels or cells). This process is fundamental in GIS and remote 
                sensing applications, particularly when working with satellite imagery.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In satellite data processing, rasterization helps create uniform data structures that can be easily 
                analyzed, processed, and visualized. Each pixel in the raster represents a specific geographic area 
                and contains attribute information.
              </p>
            </div>
            <div className="space-y-6">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=600&h=400&fit=crop" 
                  alt="Vector to Raster Conversion Process"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold text-lg">Vector to Raster Conversion</p>
                    <p className="text-gray-200 text-sm">Geographic data transformation process</p>
                  </div>
                </div>
              </div>
              
              {/* YouTube Tutorial */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Watch: Rasterization in GIS
                </h4>
                <p className="text-red-700 text-sm mb-3">Learn rasterization concepts with practical examples</p>
                <a 
                  href="https://www.youtube.com/watch?v=IiHqFJvhVE8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Tutorial
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Concepts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spatial Resolution</h3>
              <p className="text-gray-700 mb-3">
                The size of each pixel in the raster, determining the level of detail. Higher resolution means 
                smaller pixels and more detail, but larger file sizes.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Low Resolution: 1km, 500m (climate studies)</li>
                <li>• Medium Resolution: 30m, 15m (land cover mapping)</li>
                <li>• High Resolution: 1m, 0.5m (urban planning)</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cell Assignment Methods</h3>
              <p className="text-gray-700 mb-3">
                Different algorithms for determining pixel values when converting vector features to raster cells.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Cell Center: Uses center point intersection</li>
                <li>• Maximum Area: Uses largest overlapping area</li>
                <li>• Maximum Combined Area: Considers all features</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Coordinate Systems</h3>
              <p className="text-gray-700 mb-3">
                Proper coordinate reference systems (CRS) are crucial for accurate rasterization and spatial analysis.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• WGS84 (EPSG:4326): Global geographic</li>
                <li>• UTM zones: Projected for local accuracy</li>
                <li>• Web Mercator (EPSG:3857): Web mapping</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Types</h3>
              <p className="text-gray-700 mb-3">
                Understanding different raster data types helps optimize storage and processing efficiency.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Integer: Categorical data (land use)</li>
                <li>• Float: Continuous data (elevation)</li>
                <li>• Boolean: Binary data (presence/absence)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practical Applications */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Practical Applications</h2>
          <div className="space-y-6">
            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🌾 Agricultural Monitoring
              </h3>
              <p className="text-gray-700 mb-3">
                Converting field boundaries to raster format for crop yield analysis and precision agriculture applications.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Example:</strong> Convert farm plot polygons to 10m resolution raster for NDVI analysis and yield prediction.
                </p>
              </div>
            </div>

            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🏙️ Urban Planning
              </h3>
              <p className="text-gray-700 mb-3">
                Rasterizing building footprints and road networks for urban heat island analysis and infrastructure planning.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Example:</strong> Create 1m resolution building density rasters for thermal analysis using satellite imagery.
                </p>
              </div>
            </div>

            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🌊 Environmental Monitoring
              </h3>
              <p className="text-gray-700 mb-3">
                Converting watershed boundaries and monitoring points to raster format for water quality assessment.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Example:</strong> Rasterize water body polygons at 30m resolution for change detection analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools and Techniques */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools and Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">QGIS</h3>
              <p className="text-gray-700 mb-3">
                Free and open-source GIS software with powerful rasterization tools.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Rasterize (Vector to Raster)</li>
                <li>• GDAL Rasterize algorithm</li>
                <li>• Processing Toolbox integration</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Python/GDAL</h3>
              <p className="text-gray-700 mb-3">
                Programmatic approach using Python libraries for automated processing.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• gdal.Rasterize() function</li>
                <li>• Rasterio library</li>
                <li>• Geopandas integration</li>
              </ul>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Earth Engine</h3>
              <p className="text-gray-700 mb-3">
                Cloud-based platform for large-scale geospatial analysis.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• ee.Image.paint() method</li>
                <li>• Vector to image conversion</li>
                <li>• Scalable cloud processing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Python Example</h2>
          <CodeBlock 
            title="Vector to Raster Conversion with Python"
            code={`import rasterio
from rasterio import features
import geopandas as gpd
import numpy as np

# Load vector data
vector_data = gpd.read_file('polygons.shp')

# Define raster properties
width, height = 1000, 1000
transform = rasterio.transform.from_bounds(
    vector_data.total_bounds[0], vector_data.total_bounds[1],
    vector_data.total_bounds[2], vector_data.total_bounds[3],
    width, height
)

# Rasterize vector data
raster = features.rasterize(
    [(geom, value) for geom, value in 
     zip(vector_data.geometry, vector_data['field_value'])],
    out_shape=(height, width),
    transform=transform,
    dtype='float32'
)

# Save raster
with rasterio.open('output.tif', 'w',
                   driver='GTiff',
                   height=height,
                   width=width,
                   count=1,
                   dtype='float32',
                   crs=vector_data.crs,
                   transform=transform) as dst:
    dst.write(raster, 1)`}
          />
        </div>

        {/* Best Practices */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Do's</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Choose appropriate resolution for your analysis scale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Ensure consistent coordinate reference systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Consider computational resources and storage requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">Validate results with ground truth data</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Don'ts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="text-gray-700">Use unnecessarily high resolution for regional analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="text-gray-700">Ignore edge effects and boundary conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="text-gray-700">Mix different coordinate systems without reprojection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="text-gray-700">Forget to handle NoData values appropriately</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <div></div>
          <a
            href="/satellite-data"
            className="btn-primary"
          >
            Next: Satellite Data →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rasterization;
