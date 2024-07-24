'use client'

import { useState, useEffect } from 'react'

const privacySections = [
  {
    title: "1. Introduction",
    content: [
      "This procedure is intended to be used when a business process is put in place which requires the collection of personal data from data subjects who fall within the scope of the Data Protection Regulation (GDPR).",
      "The GDPR/ODPC requires that specific information is provided at the point of data collection or receipt which informs the data subject about the use that the data will be put to, and their rights over that data. This information will vary according to the specific circumstances and this procedure should be used to ensure that the correct information is given in the correct format so that IdentifyAfrica remains compliant with the ODPC/GDPR at all times.",
      "Whereas in the past, information regarding privacy has tended to be provided in a single document (often called a \"Privacy Policy\"), the GDPR/ODPC lends itself more to an approach where individual privacy notices are used according to the transaction involved. This allows the privacy information provided to be more transparent and less confusing for the data subject.",
      "Such privacy policies may be used in conjunction with a more traditional privacy policy if desired."
    ]
  },
  {
    title: "2. Privacy Policy Procedure",
    content: [
      "The purpose of this procedure is to create an appropriate privacy notice which provides the data subject with the information they are required to receive, in as fair and transparent a way as possible.",
      "There are two main ways of obtaining personal data which are covered by the ODPC/GDPR. These are:",
      "In both cases, the ODPC/GDPR specifies the information that must be provided to the data subject. This procedure describes that information and explains how to create a privacy notice that meets the requirements."
    ],
    list: [
      "Where personal data are collected from the data subject",
      "Where personal data have not been obtained from the data subject"
    ]
  },
  {
    title: "2.1 Does the data subject already have the information?",
    content: [
      "The ODPC/GDPR requires the data subject to be provided with the listed information unless the data subject already has the information. It is therefore important to determine whether it is reasonable to believe that the data subject is already aware of all the information that would otherwise be required to be provided.",
      "Where this is the case, the rationale for this belief must be documented and retained as evidence of ODPC/GDPR compliance. Care should be taken to ensure that this applies to all the information required and all the data subjects affected, otherwise steps should be taken to address any gaps."
    ]
  },
  {
    title: "2.2 Where personal data is collected from the data subject",
    content: [
      "If the data subject does not have the information required, the following must be provided at the time when personal data are obtained:"
    ],
    list: [
      "Identity and contact details of the controller and, where applicable, of the controller's representative",
      "Contact details of the data protection officer, where applicable",
      "The purposes and legal basis of the processing (e.g. consent, legal obligation, legitimate interest)",
      "The legitimate interests pursued by the controller, or by a third party (if legitimate interest is defined as the lawful basis of the processing)",
      "The recipients, or categories of recipients, of the data, if any",
      "Details of any planned transfers of personal data to a third country or international organisation",
      "The length of time that the personal data will be stored for (or the criteria used to determine that period)",
      "The data subject's rights to access, rectification, erasure and portability of the personal data (depending on the lawful basis used)",
      "The data subject's rights to restriction of, or objection to, processing of their personal data",
      "The data subject's rights to withdraw consent at any time (if consent is used as the lawful basis of the processing)",
      "The data subject's right to lodge a complaint with a supervisory authority",
      "Whether the collection of the personal data is a statutory or contractual requirement and whether they are obliged to provide it",
      "Whether the personal data will be subject to automated processing, including profiling and, if so, the logic and potential consequences involved"
    ]
  },
  {
    title: "2.3 Where personal data has not been obtained from data subject",
    content: [
      "If the personal data are not obtained directly from the data subject, there are a number of additional circumstances (i.e. in addition to the case where the data subject already has the information) allowable by the ODPC/GDPR that mean that the information does not have to be provided. These are:",
      "Where any of these conditions apply, the rationale for this belief must be documented and retained as evidence of ODPC/GDPR compliance. Care should be taken to ensure that this applies to all the information required and all the data subjects affected, otherwise steps should be taken to address any gaps.",
      "If none of these conditions apply, the information must be provided to the data subject:"
    ],
    list1: [
      "If the provision of the information proves impossible or would involve a disproportionate effort",
      "Where it is covered by other applicable law(s) which provide appropriate measures to protect the data subject's legitimate interests",
      "Where the data is confidential under law"
    ],
    list2: [
      "Within a reasonable time, at the latest one month after obtaining it",
      "If used for communication (e.g. email addresses), at the latest when the first communication takes place",
      "At the point where the data are disclosed to another recipient (if applicable)"
    ]
  },
  {
    title: "2.4 Informing the data subject",
    content: [
      "There are two Privacy Notice Planning Forms available; one to be used where the personal data are collected directly from the data subject, and the other where the personal data are obtained from another source. Use the relevant form to ensure that all the required information has been captured before it is put into the appropriate format for communication to the data subject.",
      "As with all information provided to data subjects in accordance with the ODPC/GDPR, the information must be in an intelligible and easily accessible form, using clear and plain language. The best method of providing the information to the data subject will depend upon the specifics of the business process and may include one or more of:",
      "The approach to privacy notices needs to be carefully planned so that the relevant information is presented to the data subject at the appropriate time. This will tend to mean that a coherent set of privacy notices is required, rather than a single document that covers all processing. Each privacy notice should be designed to be displayed at the appropriate point in the business process and be specific to the information being collected, the purpose for which it will be put, and the lawful basis of the processing involved. This is often referred to as a \"just in time approach\" to privacy notices.",
      "Equally, the best way to present the information should be carefully considered. Presenting a link to the relevant privacy notice document may meet the requirements of GDPR on a website, but alternative methods of screen design may allow a smoother user experience."
    ],
    list: [
      "As a notice on a website/platform",
      "Via email",
      "Via physical post",
      "Via virtual meeting/call",
      "By telephone",
      "Face to face"
    ]
  },
  {
    title: "3. Further Processing",
    content: [
      "However, if it is decided to use the personal data for a purpose other than that for which the data were obtained or collected, further information about that purpose, and the basis on which it is deemed lawful, must be provided to the data subject before the processing happens."
    ]
  }
]

export default function PrivacyContent() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-full md:pr-8 font-satoshi">
          <p className={`mb-6 transition-opacity duration-500 ease-in-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
            Your privacy is important to us. It is identityafrica&apos;s policy to respect your privacy regarding
            any information we may collect from you across our website, 
            <a href="https://identityafrica.io" className="text-blue-600">https://identityafrica.io</a>, and
            other sites we own and operate.
          </p>

          <div className={`transition-opacity duration-500 ease-in-out delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {privacySections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-6 font-recoleta">{section.title}</h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4">{paragraph}</p>
                ))}
                {section.list && (
                  <ol className="list-decimal list-inside mb-4 ml-4">
                    {section.list.map((item, lIndex) => (
                      <li key={lIndex}>{item}</li>
                    ))}
                  </ol>
                )}
                {section.list1 && (
                  <ul className="list-disc list-inside mb-4 ml-4">
                    {section.list1.map((item, l1Index) => (
                      <li key={l1Index}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.list2 && (
                  <ul className="list-disc list-inside mb-4 ml-4">
                    {section.list2.map((item, l2Index) => (
                      <li key={l2Index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}