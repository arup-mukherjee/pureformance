const projects = [
  {
    title: 'Brand Refresh',
    client: 'Tech Innovators Inc.',
    description: 'Complete brand overhaul and digital presence optimization',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80',
  },
  {
    title: 'E-commerce Growth',
    client: 'Fashion Forward',
    description: '200% increase in online sales through strategic digital marketing',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Digital Transformation',
    client: 'Global Solutions Ltd',
    description: 'End-to-end digital transformation and automation implementation',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];

export default function Work() {
  return (
    <div id="work" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Transforming businesses through innovative digital solutions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <span className="absolute inset-0" />
                {project.client}
              </h3>
              <p className="text-base font-semibold text-gray-900">{project.title}</p>
              <p className="mt-1 text-sm text-gray-500">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}