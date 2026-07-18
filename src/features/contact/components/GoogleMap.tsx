export default function GoogleMap() {
  return (
    <section className="bg-gray-50 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
          <iframe
            title="Al Ansar Tours & Travels Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.8000268630226!2d80.27188344013145!3d13.04839721324161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAyJzU0LjIiTiA4MMKwMTYnMjguMCJF!5e0!3m2!1sen!2sin!4v1784366487568!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}