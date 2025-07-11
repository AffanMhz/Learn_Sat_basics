import CodeBlock from '../components/CodeBlock';
import { Link } from 'react-router-dom';

const MachineLearning = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Machine Learning in Satellite Data
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how artificial intelligence and machine learning are revolutionizing 
            satellite data analysis and Earth observation applications.
          </p>
        </div>


        {/* Introduction */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why ML for Satellite Data?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The exponential growth in satellite data volume has created both opportunities and challenges. 
                Traditional manual analysis methods cannot keep pace with the petabytes of data generated daily 
                by Earth observation satellites.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Machine learning provides automated, scalable solutions for extracting meaningful insights from 
                complex multispectral and temporal satellite datasets.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Key Benefits:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Automated feature extraction</li>
                  <li>• Large-scale processing capabilities</li>
                  <li>• Pattern recognition in complex data</li>
                  <li>• Real-time analysis and monitoring</li>
                </ul>
              </div>
        
              {/* 🔗 Read further link */}
              <div className="mt-4">
                <a 
                  href="https://mygeoblog.com/2019/10/18/using-artificial-intelligence-for-satellite-image-classification/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Read further →
                </a>
              </div>
            </div>
        
            <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://mygeoblog.com/wp-content/uploads/2019/10/aiworkflow1.png" 
              alt="AI and Machine Learning in Earth Observation" 
              className="w-full object-contain"
            />
            <div className="bg-gray-50 p-3 text-center">
              <p className="text-sm font-medium text-gray-700">AI-Powered Earth Observation</p>
            </div>
          </div>
          </div>
          </div>

        {/* ML Techniques */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Machine Learning Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Supervised Learning</h3>
              <p className="text-gray-700 mb-3">
                Uses labeled training data to learn patterns for classification or regression tasks.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">Classification</h4>
                  <p className="text-xs text-gray-600">Land cover mapping, crop type identification</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">Regression</h4>
                  <p className="text-xs text-gray-600">Yield prediction, biomass estimation</p>
                </div>
              </div>
              <div className="mt-3 p-3 bg-green-50 rounded-lg">
                <p className="text-xs text-green-700">
                  <strong>Algorithms:</strong> Random Forest, SVM, Neural Networks
                </p>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🔍 Unsupervised Learning</h3>
              <p className="text-gray-700 mb-3">
                Discovers hidden patterns in data without labeled examples.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">Clustering</h4>
                  <p className="text-xs text-gray-600">Land cover grouping, anomaly detection</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">Dimensionality Reduction</h4>
                  <p className="text-xs text-gray-600">Feature selection, data visualization</p>
                </div>
              </div>
              <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-700">
                  <strong>Algorithms:</strong> K-means, PCA, UMAP, t-SNE
                </p>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🧠 Deep Learning</h3>
              <p className="text-gray-700 mb-3">
                Neural networks with multiple layers for complex pattern recognition.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">CNNs</h4>
                  <p className="text-xs text-gray-600">Image classification, object detection</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">RNNs/LSTMs</h4>
                  <p className="text-xs text-gray-600">Time series analysis, forecasting</p>
                </div>
              </div>
              <div className="mt-3 p-3 bg-purple-50 rounded-lg">
                <p className="text-xs text-purple-700">
                  <strong>Frameworks:</strong> TensorFlow, PyTorch, Keras
                </p>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">⚡ Transfer Learning</h3>
              <p className="text-gray-700 mb-3">
                Leverages pre-trained models to solve new but related problems.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">Feature Extraction</h4>
                  <p className="text-xs text-gray-600">Use pre-trained CNN features</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">Fine-tuning</h4>
                  <p className="text-xs text-gray-600">Adapt models to specific domains</p>
                </div>
              </div>
              <div className="mt-3 p-3 bg-orange-50 rounded-lg">
                <p className="text-xs text-orange-700">
                  <strong>Models:</strong> ResNet, VGG, EfficientNet, Vision Transformers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Applications</h2>
          <div className="space-y-6">
            
            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🗺️ Land Cover Classification
              </h3>
              <p className="text-gray-700 mb-3">
                Automatically identify and map different land cover types using multispectral imagery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-900">Input Features</h4>
                  <p className="text-xs text-green-700">Spectral bands, indices (NDVI, NDWI), texture</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-900">Algorithms</h4>
                  <p className="text-xs text-blue-700">Random Forest, CNN, U-Net</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium text-purple-900">Output</h4>
                  <p className="text-xs text-purple-700">Classified maps, accuracy metrics</p>
                </div>
              </div>
            </div>

            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                📈 Change Detection
              </h3>
              <p className="text-gray-700 mb-3">
                Detect and monitor changes in Earth's surface over time using temporal satellite data.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-medium text-red-900">Applications</h4>
                  <p className="text-xs text-red-700">Deforestation, urban growth, disaster monitoring</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <h4 className="font-medium text-yellow-900">Methods</h4>
                  <p className="text-xs text-yellow-700">Image differencing, CNN-based detection</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">Challenges</h4>
                  <p className="text-xs text-gray-700">Seasonal variations, atmospheric effects</p>
                </div>
              </div>
            </div>

            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🌾 Crop Monitoring
              </h3>
              <p className="text-gray-700 mb-3">
                Monitor crop growth, predict yields, and detect agricultural stress using time series analysis.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-900">Time Series Features</h4>
                  <p className="text-xs text-green-700">NDVI curves, phenological stages, growth patterns</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h4 className="font-medium text-orange-900">ML Models</h4>
                  <p className="text-xs text-orange-700">LSTM, Random Forest, Gaussian Process</p>
                </div>
              </div>
            </div>

            <div className="problem-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🚨 Disaster Monitoring
              </h3>
              <p className="text-gray-700 mb-3">
                Rapid detection and assessment of natural disasters using satellite imagery and ML.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-medium text-red-900">Disaster Types</h4>
                  <p className="text-xs text-red-700">Floods, wildfires, earthquakes, hurricanes</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-900">Real-time Processing</h4>
                  <p className="text-xs text-blue-700">Automated alerts, damage assessment, recovery monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Python Example: Land Cover Classification</h2>
          <CodeBlock
            title="Land Cover Classification with Random Forest"
            code={`import numpy as np
import rasterio
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
import joblib

class SatelliteImageClassifier:
    def __init__(self, n_estimators=100):
        self.model = RandomForestClassifier(
            n_estimators=n_estimators,
            random_state=42,
            n_jobs=-1
        )
        self.is_trained = False
    
    def load_satellite_data(self, image_path):
        """Load multispectral satellite image"""
        with rasterio.open(image_path) as src:
            image = src.read()  # Shape: (bands, height, width)
            transform = src.transform
            crs = src.crs
        return image, transform, crs
    
    def prepare_features(self, image):
        """Prepare features from satellite bands"""
        bands, height, width = image.shape
        
        # Reshape to (pixels, bands)
        pixels = image.reshape(bands, -1).T
        
        # Calculate vegetation indices
        if bands >= 4:  # Assuming R, G, B, NIR
            red = pixels[:, 2]
            nir = pixels[:, 3]
            
            # NDVI
            ndvi = (nir - red) / (nir + red + 1e-10)
            
            # EVI (Enhanced Vegetation Index)
            evi = 2.5 * (nir - red) / (nir + 6 * red - 7.5 * pixels[:, 0] + 1)
            
            # Add indices to features
            features = np.column_stack([pixels, ndvi, evi])
        else:
            features = pixels
        
        return features.reshape(height, width, -1)
    
    def train(self, image_path, labels_path):
        """Train the classifier"""
        # Load data
        image, _, _ = self.load_satellite_data(image_path)
        features = self.prepare_features(image)
        
        with rasterio.open(labels_path) as src:
            labels = src.read(1)
        
        # Flatten arrays
        height, width, n_features = features.shape
        X = features.reshape(-1, n_features)
        y = labels.flatten()
        
        # Remove no-data pixels
        valid_mask = y > 0
        X = X[valid_mask]
        y = y[valid_mask]
        
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )
        
        # Train model
        print("Training Random Forest classifier...")
        self.model.fit(X_train, y_train)
        
        # Evaluate
        y_pred = self.model.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)
        
        print(f"Accuracy: {accuracy:.4f}")
        print("\\nClassification Report:")
        print(classification_report(y_test, y_pred))
        
        self.is_trained = True
        return self.model
    
    def predict(self, image_path, output_path):
        """Classify new satellite image"""
        if not self.is_trained:
            raise ValueError("Model must be trained first!")
        
        # Load and prepare data
        image, transform, crs = self.load_satellite_data(image_path)
        features = self.prepare_features(image)
        
        height, width, n_features = features.shape
        X = features.reshape(-1, n_features)
        
        # Predict
        print("Classifying image...")
        predictions = self.model.predict(X)
        classified_image = predictions.reshape(height, width)
        
        # Save results
        with rasterio.open(
            output_path, 'w',
            driver='GTiff',
            height=height,
            width=width,
            count=1,
            dtype='uint8',
            crs=crs,
            transform=transform
        ) as dst:
            dst.write(classified_image.astype('uint8'), 1)
        
        print(f"Classification saved to {output_path}")
        return classified_image
    
    def save_model(self, model_path):
        """Save trained model"""
        joblib.dump(self.model, model_path)
        print(f"Model saved to {model_path}")
    
    def load_model(self, model_path):
        """Load pre-trained model"""
        self.model = joblib.load(model_path)
        self.is_trained = True
        print(f"Model loaded from {model_path}")

# Example usage
if __name__ == "__main__":
    # Initialize classifier
    classifier = SatelliteImageClassifier(n_estimators=200)
    
    # Train model
    classifier.train(
        image_path='training_image.tif',
        labels_path='training_labels.tif'
    )
    
    # Save model
    classifier.save_model('landcover_model.joblib')
    
    # Classify new image
    classifier.predict(
        image_path='new_image.tif',
        output_path='classified_output.tif'
    )`}
          />
        </div>

        {/* Deep Learning Section */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Deep Learning for Satellite Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🔷 Convolutional Neural Networks</h3>
              <p className="text-gray-700 mb-3">
                CNNs are particularly effective for image-based satellite data analysis.
              </p>
              <div className="space-y-2">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-900">Advantages</h4>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Automatic feature extraction</li>
                    <li>• Spatial relationship modeling</li>
                    <li>• Translation invariance</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">Popular Architectures</h4>
                  <p className="text-xs text-gray-700">U-Net, ResNet, DenseNet, EfficientNet</p>
                </div>
              </div>
            </div>

            <div className="tutorial-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">📊 Attention Mechanisms</h3>
              <p className="text-gray-700 mb-3">
                Focus on important spatial and temporal features in satellite data.
              </p>
              <div className="space-y-2">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium text-purple-900">Applications</h4>
                  <ul className="text-xs text-purple-700 space-y-1">
                    <li>• Multi-temporal analysis</li>
                    <li>• Feature importance visualization</li>
                    <li>• Cross-modal data fusion</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900">Models</h4>
                  <p className="text-xs text-gray-700">Vision Transformers, CBAM, Self-Attention</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges and Solutions */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenges & Solutions</h2>
          <div className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="tutorial-card border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Common Challenges</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <span className="text-gray-700 text-sm">Limited labeled training data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <span className="text-gray-700 text-sm">Cloud contamination and atmospheric effects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <span className="text-gray-700 text-sm">High-dimensional and large-scale data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    <span className="text-gray-700 text-sm">Class imbalance in land cover data</span>
                  </li>
                </ul>
              </div>

              <div className="tutorial-card border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Best Practice Solutions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 text-sm">Transfer learning and data augmentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 text-sm">Cloud masking and quality filtering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 text-sm">Distributed computing and data tiling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 text-sm">Balanced sampling and cost-sensitive learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Learning Resources */}
        <div className="section-card">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📺 Learn More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🎥 Machine Learning for Earth Observation
              </h3>
              <p className="text-gray-700 mb-4">
                Comprehensive tutorial on applying ML techniques to satellite imagery analysis
              </p>
              <a 
                href="https://www.youtube.com/watch?v=U-uJGnhD-zg" 
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
                🎥 Deep Learning for Remote Sensing
              </h3>
              <p className="text-gray-700 mb-4">
                Advanced techniques using neural networks for satellite data processing
              </p>
              <a 
                href="https://www.youtube.com/watch?v=o-hD_yH_j-s" 
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
          <Link
            to="/satellite-data"
            className="btn-secondary"
          >
            ← Previous: Satellite Data
          </Link>
          <Link
            to="/qgis"
            className="btn-primary"
          >
            Next: QGIS →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
