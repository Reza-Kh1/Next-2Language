import CareersBox from '@/app/components/CareersBox/CareersBox'
import ContainerHeader from '@/app/components/ContainerHeader/ContainerHeader'
import HeaderTitle from '@/app/components/HeaderTitle/HeaderTitle'
import ImageCustom from '@/app/components/ImageCustom/ImageCustom'
import Image from 'next/image'
import React from 'react'
import { BsDot } from 'react-icons/bs'
const dataCareers = [
  {
    address: 'Mumbai, India',
    bags: 'Experience - Minimum 1 year of professional web design experience.',
    image: '/icons/mouse.png',
    skill: 'Skills - Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.',
    price: 'Salary - $45,000 - $60,000 per year (based on experience)',
    title: 'Web Designer'
  },
  {
    address: 'Mumbai, India',
    bags: 'Experience - Minimum 2 years of mobile app development experience.',
    image: '/icons/phone.png',
    price: 'Salary - $55,000 - $75,000 per year (based on experience)',
    skill: 'Skills - Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.',
    title: 'Mobile App Developer'
  },
  {
    address: 'Mumbai, India',
    bags: 'Experience - Minimum 3 years of digital marketing experience.',
    image: '/icons/fast.png',
    price: 'Salary - $50,000 - $65,000 per year (based on expertise)',
    skill: 'Skills - Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.',
    title: 'Digital Marketing Specialist'
  },
  {
    address: 'Mumbai, India',
    bags: 'Experience - Minimum 3 years of digital marketing experience.',
    image: '/icons/sun.png',
    skill: 'Skills - Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.',
    price: 'Salary - $60,000 - $80,000 per year (based on experience and qualifications).',
    title: 'Project Manager'
  },
]
const cardBox = [
  {
    name: "Explore Job Listings",
    number: "01",
    text: "Visit our website's Careers page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations."
  }, {
    name: "Review Job Description",
    number: "02",
    text: "Click on the desired job title to view the detailed job description. Take your time to read through the responsibilities, requirements, and qualifications to ensure you have a clear understanding of the role."
  }, {
    name: "Complete the Application Form",
    number: "03",
    text: "Click the Apply Now button on the job listing page to access our online application form. Fill in your personal information, contact details, and the position you are applying for."
  }, {
    name: "Upload Your Documents",
    number: "04",
    text: "Attach your resume, cover letter, and portfolio (if applicable) in their respective fields on the application form."
  }, {
    name: "Submit Your Application",
    number: "05",
    text: "Double-check all the information you provided to ensure accuracy and completeness. Once you are satisfied with your application, click the Submit button to send it to our HR team."
  }, {
    name: "Interview Process",
    number: "06",
    text: "If you are selected for an interview, we will reach out to schedule a suitable date and time. Interviews may be conducted in-person or virtually, depending on the position and your location."
  },
]
const textData = [
  {
    iamge: "/icons/bags.png",
    name: "Competitive Compensation",
    arry: ["We offer competitive salary packages to reward your skills, experience, and dedication to the company."]
  },
  {
    name: "Health and Wellness",
    iamge: "/icons/app.png",
    arry: ["Health Insurance: Comprehensive health insurance plans to cover medical, dental, and vision needs.", "Wellness Programs: Initiatives to promote physical and mental well-being, such as fitness classes and workshops.", "Mental Health Support: Employee Assistance Program (EAP) providing counseling and support services."]
  },
  {
    iamge: "/icons/code.png",
    name: "Paid Time Off",
    arry: ["Vacation Leave: Generous vacation days to relax and recharge.", "Sick Leave: Paid sick days for when you need to take care of your health.", "Holidays: Enjoy paid time off on recognized public holidays."]
  },
  {
    iamge: "/icons/chart.png",
    name: "Professional Development",
    arry: ["Training Opportunities: Access to workshops, courses, and resources to enhance your skills and knowledge.", "Career Growth: Opportunities for career advancement and skill development."]
  },
  {
    iamge: "/icons/fast.png",
    name: "Flexible Work Arrangements",
    arry: ["Remote Work: We support flexible work arrangements, including remote work options for certain roles.", "Flexible Hours: Adjust your work schedule to accommodate personal commitments."]
  },
  {
    iamge: "/icons/lamp.png",
    name: "Employee Referral Program",
    arry: ["Incentives for referring qualified candidates to open positions at DigitX."]
  },
  {
    iamge: "/icons/html.png",
    name: "Team-Building Activities",
    arry: ["Regular team-building events and activities to foster camaraderie and collaboration among team members."]
  },
  {
    iamge: "/icons/sun.png",
    name: "Modern Workspace",
    arry: ["State-of-the-art office facilities and a comfortable working environment."]
  },
  {
    iamge: "/icons/win.png",
    name: "Company Events and Celebrations",
    arry: ["Celebrate company milestones, birthdays, and other special occasions together."]
  }
]
export default function page() {
  return (
    <>
      <ContainerHeader dark='in the Digital World' light='Unlock Your Potential' text='At DigitX, we believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. Join us to be part of a passionate and innovative team dedicated to crafting exceptional digital solutions for clients across the globe. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.' />
      <main className="main-class">
        <HeaderTitle firstLight dark='at DigitX' light='Job Listings' text='Explore our current job listings to discover exciting career opportunities that match your skill set and interests. We offer positions in various digital disciplines, including web design, mobile app development, digital marketing, project management, and more. Each job listing provides comprehensive details about the role, responsibilities, qualifications, and benefits. Whether you are an experienced professional or a fresh graduate, we welcome talent from all backgrounds to join our team.' />
        <div className='flex flex-col gap-10 mt-10'>
          {dataCareers.map((row, index) => (
            <CareersBox address={row.address} bags={row.bags} image={row.image} price={row.price} skill={row.skill} title={row.title} key={index} />
          ))}
        </div>
        <div>
          <HeaderTitle dark='How to' light='Apply' text='We are excited that you are interested in joining our team at DigitX! To apply for any of our job listings, please follow the simple steps below' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-12'>
            {cardBox.map((row, index) => (
              <section key={index}>
                <div className='rounded-t-xl border border-d-60 h-16 md:h-24 flex overflow-hidden'>
                  <div className='w-1/2 text-w-100 flex justify-start pl-6 items-center bg-black h-full'>
                    Step {row.number}
                  </div>
                  <div className='w-1/2 bg-d-60 h-full'></div>
                </div>
                <div className='p-4 md:p-6'>
                  <span className='block mb-2 text-w-100'>{row.name}</span>
                  <p className='text-w-50 text-sm md:text-base'>{row.text}</p>
                </div>
              </section>
            ))}
          </div>
          <div className='my-12 p-6 rounded-xl border border-d-60 flex flex-col'>
            <div className='flex gap-2 items-center'>
              <div className='p-3 rounded-full' style={{ background: "linear-gradient(180deg, #7f7d7d29, #000000c4)" }}>
                <ImageCustom src={'/icons/3star.png'} figureClass='w-auto' className='rounded-full' width={25} height={25} alt={"mouse"} />
              </div>
              <span className='text-w-100'>We value your interest in DigitX</span>
            </div>
            <p className='text-w-50 mt-4'>We value your interest in DigitX and appreciate the time and effort you put into your application. Our team looks forward to reviewing your application and finding the best talent to join our vibrant and innovative team. Apply now and take the next step towards an exciting and fulfilling career with DigitX!</p>
          </div>
          <HeaderTitle dark='Benefits &' light='Perks' text='At DigitX, we believe in prioritizing the well-being and growth of our team members. We offer a comprehensive range of benefits and perks to ensure our employees feel valued, motivated, and supported in both their personal and professional lives. As a member of the DigitX family, you can enjoy the following benefits' />
          <div className='flex flex-col gap-10 mt-12'>
            {textData.map((row, index) => (
              <section key={index} className='md:p-8 p-4 relative rounded-xl flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 justify-between' style={{ background: "linear-gradient(181deg, #9595950d, #0000004d)" }}>
                <div className='flex gap-2 items-center'>
                  <i className='rounded-full p-3' style={{ background: "linear-gradient(180deg, #7f7d7d29, #000000c4)" }}>
                    <Image src={row.iamge} alt='icon' width={30} height={30} />
                  </i>
                  <span className='text-xl font-semibold text-w-80'>{row.name}</span>
                </div>
                <div className='p-4 md:p-6 rounded-xl border border-d-60 flex flex-col gap-2 w-full md:w-4/6'>
                  {row.arry.map((item, number) => (
                    <div key={number} className='flex text-w-50 gap-1 items-center'>
                      <i className='w-6'>
                        <BsDot />
                      </i>
                      <p>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <span className='absolute left-0 top-0 w-full h-full bg-no-repeat bg-contain' style={{ backgroundImage: "url(/dot-top.png)" }}></span>
              </section>
            ))}
          </div>
        </div>
        <HeaderTitle dark='Employee' light='Referral Program' text='At DigitX, we believe that our employees are our most valuable asset. We recognize the importance of building a strong and talented team, and we encourage our employees to play an active role in shaping our workforce. Introducing our Employee Referral Program – an opportunity for you to help us find exceptional talent and be rewarded for your contributions.' />
        <div className='py-6 md:py-10 relative mt-12 text-2xl font-semibold rounded-t-xl text-center text-w-100 border border-d-60'>
          How It Works
          <span className='absolute left-1/2 w-1/3 h-full top-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ backgroundImage: 'url(/dot-top.png)' }}></span>
        </div>
        <div className='rounded-b-xl  border border-d-60 p-4 md:p-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {cardBox.map((row, index) => {
              if (index + 1 > 4) return
              return <section key={index}>
                <div className='rounded-t-xl border bg-center bg-no-repeat h-16 md:h-24 flex overflow-hidden border-d-60' style={{ backgroundImage: 'url(/color-range.png)' }}>
                  <div className='w-1/2 text-w-100 flex justify-start pl-6 items-center h-full'>
                    Step {row.number}
                  </div>
                  <div className='w-1/2  h-full'></div>
                </div>
                <div className='p-3 md:p-6'>
                  <span className='block mb-2 text-w-100'>{row.name}</span>
                  <p className='text-w-50 text-sm md:text-base'>{row.text}</p>
                </div>
              </section>
            })}
            <section className='col-span-1 md:col-span-2'>
              <div className='rounded-t-xl w-full border bg-center bg-no-repeat h-24 flex overflow-hidden border-d-60' style={{ backgroundImage: 'url(/color-range.png)' }}>
                <div className='w-1/2 text-w-100 flex justify-start pl-6 items-center h-full'>
                  Step 05
                </div>
                <div className='w-1/2  h-full'></div>
              </div>
              <div className='p-3 md:p-6'>
                <span className='block mb-2 text-w-100'>Successful Hiring</span>
                <p className='text-w-50 text-sm md:text-base'> If the referred candidate successfully joins DigitX and completes the probation period, you will be eligible for the referral reward.</p>
              </div>
            </section>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-12'>
          <div className='flex flex-col h-full'>
            <div className='py-6 md:py-10 relative text-2xl font-semibold rounded-t-xl text-center text-w-100 border border-d-60'>
              Rewards and Recognition
              <span className='absolute left-1/2 w-1/3 h-full top-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ backgroundImage: 'url(/dot-top.png)' }}></span>
            </div>
            <div className='p-3 md:p-6 rounded-b-xl border border-d-60 h-full'>
              <div className='rounded-xl flex flex-col gap-5 border h-full border-d-60 p-4 md:p-10 !pl-0'>
                <div className='flex text-w-50 gap-1 items-start'><i className='w-1/12 flex justify-end'><BsDot /></i>
                  <p className='w-11/12'>
                    For each successful referral, you will be rewarded with a generous cash bonus or an equivalent value in gift cards.
                  </p>
                </div>
                <div className='flex text-w-50 gap-1 items-start'><i className='w-1/12 flex justify-end'><BsDot /></i>
                  <p className='w-11/12'>
                    The value of the reward may vary depending on the level and significance of the role being filled.
                  </p>
                </div>
                <div className='flex text-w-50 gap-1 items-start'><i className='w-1/12 flex justify-end'><BsDot /></i>
                  <p className='w-11/12'>
                    You will be publicly recognized and appreciated for your contribution to the Employee Referral Program during company-wide announcements and events.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col h-full'>
            <div className='py-6 md:py-10 relative text-2xl font-semibold rounded-t-xl text-center text-w-100 border border-d-60'>
              Program Guidelines
              <span className='absolute left-1/2 w-1/3 h-full top-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ backgroundImage: 'url(/dot-top.png)' }}></span>
            </div>
            <div className='p-3 md:p-6  rounded-b-xl border border-d-60'>
              <div className='rounded-xl flex flex-col gap-5 border h-full border-d-60 p-4 md:p-10 !pl-0'>
                <div className='flex text-w-50 gap-1 items-start'><i className='w-1/12 flex justify-end'><BsDot /></i>
                  <p className='w-11/12'>
                    The Employee Referral Program is open to all current DigitX employees.
                  </p>
                </div>
                <div className='flex text-w-50 gap-1 items-start'><i className='w-1/12 flex justify-end'><BsDot /></i>
                  <p className='w-11/12'>
                    Referred candidates must not have previously applied for a position at DigitX within the last six months.
                  </p>
                </div>
                <div className='flex text-w-50 gap-1 items-start'><i className='w-1/12 flex justify-end'><BsDot /></i>
                  <p className='w-11/12'>
                    The referred candidate must not be an existing or former employee of DigitX.
                  </p>
                </div>
                <div className='flex text-w-50 gap-1 items-start'><i className='w-1/12 flex justify-end'><BsDot /></i>
                  <p className='w-11/12'>
                    To be eligible for the reward, the referred candidate must successfully complete the probationary period.
                  </p>
                </div>
                <div className='flex text-w-50 gap-1 items-start'><i className='w-1/12 flex justify-end'><BsDot /></i>
                  <p className='w-11/12'>
                    In the event that multiple employees refer the same candidate, the referral reward will be given to the first referrer mentioned by the candidate during the application process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
