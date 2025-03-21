export default function AboutUs() {
    return (
        <section className="bg-[#0d0f1a]  p-10 flex justify-center items-center min-h-screen">
        <div className="max-w-3xl p-6 rounded-md">
          <h2 className="text-[#9333EA] text-3xl font-bold">About skillcert</h2>
          <p className="text-gray-400 mt-2">
            Empowering learners with cutting-edge online courses
          </p>

          <h3 className="text-[#9333EA] text-3xl font-semibold mt-6">
            What is skillcert ?
          </h3>
          <p className="text-gray-400 mt-2 text-sm leading-relaxed">
            SkillCert is a revolutionary platform that issues NFT-based digital
            certificates on the Stellar blockchain, ensuring authenticity,
            traceability, and forgery resistance. Designed for universities,
            academies, and companies, the platform enables trusted verification
            of digital achievements and skills. Additionally, SkillCert features
            an educational marketplace where institutions offer courses paired
            with automated, validated certificate issuance.
          </p>

          <h3 className="text-[#9333EA] text-xl font-semibold mt-6">
            Innovation education
          </h3>
          <ul className="list-disc list-inside text-gray-400 mt-2 text-sm space-y-2">
            <li>
              Issue NFT-based digital certificates on the Stellar blockchain
            </li>
            <li>
              Guarantee authenticity, traceability, and resistance to forgery
            </li>
            <li>
              Operate an educational marketplace for courses and validated
              certificates issuance
            </li>
          </ul>
        </div>
      </section>
    )
  }
  