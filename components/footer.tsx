export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">D Elements</h3>
            <p className="text-sm text-gray-600">
              Discover D Elements from the world&apos;s best designers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-primary">Elements</a></li>
              <li><a href="/#" className="text-gray-600 hover:text-primary">Templates</a></li>
              <li><a href="/#" className="text-gray-600 hover:text-primary">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#" className="text-gray-600 hover:text-primary">About</a></li>
              <li><a href="/#" className="text-gray-600 hover:text-primary">Blog</a></li>
              <li><a href="/#" className="text-gray-600 hover:text-primary">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#" className="text-gray-600 hover:text-primary">Privacy</a></li>
              <li><a href="/#" className="text-gray-600 hover:text-primary">Terms</a></li>
              <li><a href="/#" className="text-gray-600 hover:text-primary">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © 2025 D Elements. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 