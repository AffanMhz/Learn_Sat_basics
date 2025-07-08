const TermsOfService = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: July 9, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-green-900 mb-3">Educational Purpose</h2>
            <p className="text-green-800">
              This platform is created for educational purposes to help students learn satellite data analysis, remote sensing, and geospatial technologies. By using this website, you agree to these terms.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Educational Use</h2>
            <div className="space-y-4">
              <p className="text-gray-700">This platform is intended for:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Educational and learning purposes</li>
                <li>Research and academic projects</li>
                <li>ISRO hackathon preparation</li>
                <li>Skill development in geospatial technologies</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Content Usage</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">What you can do:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use the content for learning and educational purposes</li>
                <li>Share knowledge with fellow students and educators</li>
                <li>Reference our materials in academic work (with proper attribution)</li>
                <li>Contribute improvements via GitHub</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800">What you cannot do:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use content for commercial purposes without permission</li>
                <li>Redistribute the entire platform as your own work</li>
                <li>Remove attribution or copyright notices</li>
                <li>Use the platform to harm others or violate laws</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Content</h2>
            <p className="text-gray-700 mb-4">
              Our platform includes content from third-party sources:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Images:</strong> From Unsplash (free to use under Unsplash License)</li>
              <li><strong>Videos:</strong> YouTube educational content (subject to YouTube's terms)</li>
              <li><strong>Code examples:</strong> Using open-source libraries and tools</li>
            </ul>
            <p className="text-gray-700 mt-4">
              You are responsible for complying with the terms of these third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                The original content, organization, and presentation of materials on this website are the intellectual property of the contributors.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">
                  <strong>Attribution:</strong> When using our content, please provide appropriate credit and link back to our repository.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimers</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Educational Content:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Content is provided for educational purposes only</li>
                <li>We strive for accuracy but cannot guarantee error-free content</li>
                <li>Technology and best practices evolve; content may become outdated</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800">External Links:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We are not responsible for content on external websites</li>
                <li>YouTube videos are subject to availability and creator policies</li>
                <li>Software and tools mentioned may have their own terms and conditions</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700">
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. User Conduct</h2>
            <p className="text-gray-700 mb-4">When using our platform, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use the service for lawful purposes only</li>
              <li>Respect intellectual property rights</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Be respectful in any interactions or contributions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contributions</h2>
            <p className="text-gray-700 mb-4">
              If you contribute to our project via GitHub:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Your contributions will be subject to the repository's license</li>
              <li>You retain copyright to your original contributions</li>
              <li>You grant us permission to use your contributions in the project</li>
              <li>Contributions should be your original work or properly licensed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li><strong>GitHub Issues:</strong> <a href="https://github.com/AffanMhz/Learn_Sat_basics/issues" className="text-blue-600 hover:text-blue-800">Report issues or ask questions</a></li>
                <li><strong>Repository:</strong> <a href="https://github.com/AffanMhz/Learn_Sat_basics" className="text-blue-600 hover:text-blue-800">Learn_Sat_basics</a></li>
                <li><strong>Discussions:</strong> <a href="https://github.com/AffanMhz/Learn_Sat_basics/discussions" className="text-blue-600 hover:text-blue-800">Community discussions</a></li>
              </ul>
            </div>
          </section>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Thank You!</h3>
            <p className="text-blue-800">
              Thank you for using our educational platform. We hope it helps you in your journey to learn satellite data analysis and geospatial technologies!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
