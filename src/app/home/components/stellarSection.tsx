import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function StellarSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="rounded-[24px] bg-gradient-to-r from-[#1A1B26] from-0% via-[#1A1B26] via-30% via-[#2D1F3B] via-50% via-[#4D1F3F] via-65% via-[#661840] via-80% to-[#831843] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-56 h-56 relative flex-shrink-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stellar%20icon-Y9LTaopZGvHLWjt2debNd0o2jC9781.png"
            alt="Stellar Logo"
            width={224}
            height={224}
            className="w-full h-full"
            priority
          />
        </div>

        <div className="flex-1 text-center md:text-left pl-4 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-medium text-[#D8B4FE] mb-3 -ml-4 md:-ml-8">Pay with stellar</h2>
          <p className="text-gray-200 mb-3 leading-relaxed">
            Skillcert uses Stellar cryptocurrency for all transactions, including course enrollments and instructor
            payouts. Stellar offers:
          </p>
          <ul className="text-gray-200 space-y-2 mb-6 leading-relaxed">
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-200 flex-shrink-0" />
              Fast and secure transactions
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-200 flex-shrink-0" />
              Low transaction fees
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-200 flex-shrink-0" />
              Global accessibility
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-200 flex-shrink-0" />
              Easy integration with our platform
            </li>
          </ul>
          <Button asChild className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-gray-900 font-medium px-6 rounded-full">
            <Link href="/learn-more">Learn more about Stellar</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}