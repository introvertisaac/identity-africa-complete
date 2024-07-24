
import PrivacyContent from '@/app/components/Privacy/PrivacyContent'



export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen mt-32">
      <main className="container mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 font-recoleta">Privacy Policy</h1>
        <h2 className="text-md font-satoshi font-semibold text-black md:mb-4">Last Updated: July 2024</h2>
        <PrivacyContent />
      </main>
    </div>
  )
}