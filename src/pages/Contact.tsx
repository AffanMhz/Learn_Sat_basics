const Contact = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch with us for questions, feedback, or contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900">GitHub Repository</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our primary communication channel for technical questions, bug reports, and feature requests.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://github.com/AffanMhz/Learn_Sat_basics" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-center"
                >
                  View Repository
                </a>
                <a 
                  href="https://github.com/AffanMhz/Learn_Sat_basics/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-center"
                >
                  Report an Issue
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <h3 className="text-xl font-semibold text-gray-900">Discussions</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Join our community discussions for general questions, sharing ideas, and connecting with other learners.
              </p>
              <a 
                href="https://github.com/AffanMhz/Learn_Sat_basics/discussions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
              >
                Join Discussions
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
                <h3 className="text-xl font-semibold text-gray-900">Social Media</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Follow us on social media for updates and quick questions.
              </p>
              <a 
                href="https://twitter.com/AffanMhz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-center"
              >
                Follow on Twitter
              </a>
            </div>
          </div>

          {/* Contact Information and Guidelines */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Contact Guidelines</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">🐛 Bug Reports</h4>
                  <p className="text-blue-800 text-sm">
                    Use GitHub Issues with detailed description, steps to reproduce, and expected vs actual behavior.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">💡 Feature Requests</h4>
                  <p className="text-blue-800 text-sm">
                    Submit via GitHub Issues with clear use case and benefits explanation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">❓ Questions</h4>
                  <p className="text-blue-800 text-sm">
                    Use GitHub Discussions for general questions and learning-related inquiries.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">🤝 Contributions</h4>
                  <p className="text-blue-800 text-sm">
                    Fork the repository, make changes, and submit a pull request with detailed description.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 What We Can Help With</h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Technical questions about satellite data processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Code examples and implementation guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">ISRO hackathon preparation strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Learning path recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Resource suggestions and tool recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Content improvements and corrections</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">⚡ Response Time</h3>
              <div className="space-y-3 text-yellow-800">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">GitHub Issues:</span>
                  <span className="text-sm">1-3 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Discussions:</span>
                  <span className="text-sm">1-5 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Pull Requests:</span>
                  <span className="text-sm">2-7 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Social Media:</span>
                  <span className="text-sm">Best effort</span>
                </div>
              </div>
              <p className="text-yellow-700 text-xs mt-3">
                * Response times may vary depending on complexity and current workload
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🌟 Contributing</h3>
              <p className="text-purple-800 text-sm mb-4">
                We welcome contributions from the community! Whether it's fixing typos, adding new content, or improving existing tutorials.
              </p>
              <div className="space-y-2">
                <a 
                  href="https://github.com/AffanMhz/Learn_Sat_basics/blob/main/README.md" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-purple-700 hover:text-purple-900 text-sm underline"
                >
                  📖 Read Contributing Guidelines
                </a>
                <a 
                  href="https://github.com/AffanMhz/Learn_Sat_basics/fork" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-purple-700 hover:text-purple-900 text-sm underline"
                >
                  🍴 Fork the Repository
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6">
              Have a question, found a bug, or want to contribute? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/AffanMhz/Learn_Sat_basics/issues/new" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Report an Issue
              </a>
              <a 
                href="https://github.com/AffanMhz/Learn_Sat_basics/discussions/new" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
              >
                Start a Discussion
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
