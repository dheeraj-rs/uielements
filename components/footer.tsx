import Link from 'next/link'

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
              <li><Link href="/" className="text-gray-600 hover:text-primary">Elements</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-primary">Templates</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-primary">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#" className="text-gray-600 hover:text-primary">About</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#" className="text-gray-600 hover:text-primary">Privacy</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-primary">Terms</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-primary">Cookies</Link></li>
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