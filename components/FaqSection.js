"use client";

import SingleFaq from "./SingleFaq";


export default function Faq() {
  const list1 = [
    {
      title: "Signing up on WERK app",
      message:
        "<p>Signing up is free!</p><ul><li>Upon launching the WERK app, click the Login button on the bottom right-hand corner</li><li>Fill in your Email, Password, Profile name and click sign up</li><li>You will be prompted to validate your email address next.</li></ul><p>To validate your email address:</p><ul><li>Look for an email from no-reply@werk.sg with the subject “Validate your email – from WERK”.</li><li>Click on the link provided in the email.</li></ul>",
    },
    {
      title: "How to create a WERK profile?",
      message:
        "<p>Create a good profile to leave an impression on your future employers.</p><ul><li>Put up a profile picture that will get you noticed</li><li>Express yourself on your About section</li><li>Fill up your past work/study experiences</li><li>Upload a resume</li></ul>",
    },
    {
      title: "How to put up a listing?",
      message:
        "<p>Before providing a service, it would be good to think about the scope of work that interests you & what you are good at.</p><ul><li>Click on the + button at the bottom of the main page or click on “My Services” on your account page</li><li>Click on the “Add Service” button</li><li>Key in the Service you would like to provide, the pricing, photos & a description</li><li>Click “Post” and be ready to get hired!</li></ul>",
    },
    {
      title: "Can I have more than one WERK account?",
      message:
        "<ul><li>In line with WERK’s commitment to creating a safe platform, you may only have one account on WERK unless expressly permitted.</li><li>We understand that every service provider and employer is unique and may have different needs. If you require more than 1 account on WERK, let us know and we’ll assess your request.</li><ul>",
    },
    {
      title: "How should I keep my payments safe?",
      message:
        "<ul><li>Keep your personal banking details confidential  –  Information such as 16 digit numbers on your credit/debit card, CVV, PIN, OTP, i-banking passwords are confidential and should not be shared with other parties.</li></ul>",
    },
    {
      title: "How can I find out more about the service provider?",
      message:
        "<ul><li>Read employer reviews - You can read through detailed reviews that a service provider received by going to their profile. This is where other users, including employers like yourself, share their experiences dealing with the service provider.</li><li>Do your due diligence - Do your research and homework, read the description of service, ask questions and request for photos to ensure that the service you are getting is what you expect. If you come across a service which you think should not be listed on WERK, do not hesitate to report it to us so that it can be reviewed and removed if needed.</li><li>Learn about a service provider's policies - Every deal on WERK is considered an agreement between you and the service provider. If any service providers have individual policies, such as whether they accept negotiations, be sure to clue yourself in on them before you commit to a deal.</li><li>Secure an agreement by making an offer to Engage the service provider - This, along with the service provider's acceptance of the offer, is WERK’s way of a firm handshake to show both parties are committed to the deal. This is because both parties would be able to exchange reviews thereafter. Do make sure all aspects of the transaction have been negotiated and agreed on, such as price, location, expectations and day & time etc.</li><li>While WERK may be a community, always remember that meeting up with someone for the first time is akin to meeting a stranger, so be safe and take proper precautions! Avoid carrying large sums of cash with you!</li></ul>",
    },
    {
      title: "How can I find out more about the buyer?",
      message:
        "<ul><li>Read user reviews - You can read through detailed reviews that an employer received by going to their profile. This is where other community members, including service providers like yourself, share their experiences dealing with the user.</li></ul>",
    },
    {
      title: "What should I take note of when transacting?",
      message:
        "<ul><li>State your policies clearly - Every deal on WERK is considered a private agreement between you and the employer. If you have any policies regarding negotiations, be sure that they are communicated to and acknowledged by your employer prior to their commitment and carrying out of the deal.</li><li>Secure an agreement by accepting an offer - This, following a buyer's making of an offer, is WERK’s way of a firm handshake to show both parties are committed to the deal. This is because both parties would be able to exchange reviews thereafter. The right time to make to do this would be when all aspects of the transaction have been negotiated and agreed on, such as price and delivery method, day & time etc.</li><li>Always make ensure that payment has actually reached you. Even if the employer has provided you with a transaction receipt, it is the best practice to check your bank transaction history to ensure that the money has already been credited to you. Do not rely solely on text messages or email notifications that inform you of incoming fund transfers.</li><li>While WERK may be a community, always remember that meeting up with someone for the first time is akin to meeting a stranger, so be safe and take proper precautions! Avoid carrying large sums of cash with you!</li></ul>",
    },
  ];

  return (
    
    <div
      id=""
      className="py-6 md:w-3/4 mx-auto"
    >
      <h1 className="text-3xl font-semibold text-center">
          Frequently Asked Questions
        </h1>
      <div>
        <ul className="space-y-6 lg:mt-10 md:mt-20">
          {/* Render list1 messages */}
          {list1.map((item, index) => (
            <li key={index}>
              {/* Render SingleFaq component with the message */}
              <SingleFaq title={item.title} message={item.message}></SingleFaq>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        
        {/* <div className="mx-auto md:mx-0 glass-back rounded-lg w-3/4 md:w-[342px] mt-6 min-h-[200px] p-6 flex flex-col justify-between ">
          <div>
            <div className="font-semibold text-xl" id="contact">Still have questions?</div>
            <div className="mt-14">
              <p className="font-semibold">Contact Us: </p>
              <ul>
                <li>support@werk.sg</li>
              </ul>
            </div>
          </div>
          <div>
            
          </div>
        </div> */}
      </div>
    </div>
  );
}
