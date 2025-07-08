const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: July 9, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">Important Notice</h2>
            <p className="text-blue-800">
              This is an educational platform created for learning purposes. We are committed to protecting your privacy and being transparent about our data practices.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Information you provide directly:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Contact information when you reach out to us through GitHub</li>
                <li>Any feedback or contributions you make to the project</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800">Information collected automatically:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Usage statistics through GitHub Pages (provided by GitHub)</li>
                <li>Browser type and device information</li>
                <li>Pages visited and time spent on the site</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To provide and improve our educational content</li>
              <li>To respond to your questions and feedback</li>
              <li>To understand how the platform is being used</li>
              <li>To maintain and secure the website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">Our website uses the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>GitHub Pages:</strong> For hosting our website</li>
              <li><strong>Unsplash:</strong> For educational images</li>
              <li><strong>YouTube:</strong> For embedded educational videos</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Each of these services has their own privacy policies, which we encourage you to review.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Children's Privacy</h2>
            <p className="text-gray-700">
              Our service is intended for educational purposes and may be used by students of all ages. We do not knowingly collect personal information from children under 13 without parental consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access the personal information we have about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to our use of your information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li><strong>GitHub:</strong> <a href="https://github.com/AffanMhz/Learn_Sat_basics/issues" className="text-blue-600 hover:text-blue-800">Create an issue</a></li>
                <li><strong>Email:</strong> Through GitHub profile contact information</li>
                <li><strong>Repository:</strong> <a href="https://github.com/AffanMhz/Learn_Sat_basics" className="text-blue-600 hover:text-blue-800">Learn_Sat_basics</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
