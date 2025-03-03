import React from 'react';
import SectionTitle from '../components/SectionTitle';
import BenefitCard from '../components/BenefitCard';
import Testimonial from '../components/Testimonial';
import Step from '../components/Step';
import Checklist from '../components/Checklist';
import Card from '../components/Card';
import TabContainer from '../components/TabContainer';

const EmailContent: React.FC = () => {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Cold Email Works So Well" 
            subtitle="There are few growth levers that could allow a single person to grow a startup from $0 to $1M ARR in a matter of months"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
            <BenefitCard 
              title="Direct Access" 
              description="Email is where important conversations happen. It's a direct line into the inbox of the person you want to sell to."
            />
            <BenefitCard 
              title="Low Barrier to Reply" 
              description="When someone sees an interesting cold email, they don't need multiple steps to respond - all they need to do is reply."
            />
            <BenefitCard 
              title="High ROI" 
              description="Cold outbound can be done with nothing but an internet connection and a laptop—and virtually no budget."
            />
            <BenefitCard 
              title="Scalable Results" 
              description="With the right approach, one or two smart growth people can drive sales like they were a team of 50 SDRs."
            />
          </div>
          
          <Testimonial 
            quote="Within seconds of this very moment, you could send an email to your dream investor. Or a potential customer. Or Patrick Collison. A few minutes from now, that person could reply. And a week from now, you could be on the phone having a conversation that will change the course of your company and your life."
            author="Matt Redler, Founder of Aurora"
          />
        </div>
      </section>
      
      <section id="infrastructure" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="The Infrastructure" 
            subtitle="Setting up the foundation for effective cold outbound campaigns"
          />
          
          <p className="mb-8 max-w-4xl mx-auto">
            If the world's best cold email is sent but it never reaches the recipient's primary inbox, the email is worthless. Infrastructure is a prerequisite for good outbound - you might succeed with mediocre emails and great infrastructure, but you'll never succeed with great emails if your infrastructure doesn't work.
          </p>
          
          <ol className="list-none p-0 counter-reset-step">
            <Step 
              number={1} 
              title="Buy and Set Up Adjacent Domains" 
              description="Purchase domains similar to your company's main domain to ensure deliverability at scale"
            >
              <Checklist items={[
                "Buy domains that are similar to your company's main domain (e.g., getcompany.com, withcompany.com)",
                "Redirect these domains to your main website",
                "Calculate how many domains you need based on your desired email volume",
                "Use the formula: Adjacent Domains = (Desired Daily Volume / 60) x 1.1"
              ]} />
            </Step>
            
            <Step 
              number={2} 
              title="Optimize Your Domains for Deliverability" 
              description="Set up authentication records to boost your domain authority with email service providers"
            >
              <Checklist items={[
                "Set up SPF records to specify which mail servers can send email on behalf of your domain",
                "Configure DKIM to add a digital signature that verifies your emails haven't been tampered with",
                "Implement DMARC to tell receiving servers how to handle authentication failures",
                "These steps boost your authenticity in the eyes of email service providers like Gmail"
              ]} />
            </Step>
            
            <Step 
              number={3} 
              title="Create Email Inboxes on Your Domains" 
              description="Set up the right infrastructure for sending emails from your domains"
            >
              <Checklist items={[
                "Set up 3 inboxes per domain to reduce risk and diversify sending",
                "Use Google Workspace or Microsoft 365 (avoid private IP solutions)",
                "Create separate Google Workspace accounts for different domains (2 domains per account max)",
                "Use VPNs and antidetect browsers when setting up multiple accounts",
                "Use real human names for your email accounts, preferably company leaders"
              ]} />
            </Step>
            
            <Step 
              number={4} 
              title="Warm Up Your Email Inboxes" 
              description="Establish a positive reputation for your new email accounts before sending outbound"
            >
              <Checklist items={[
                "Send emails from your accounts to other email accounts that engage positively",
                "Create a profile of activity matching what a normal good email inbox looks like",
                "Warm from the same IP you'll be sending outbound from",
                "Start with lower volume and gradually increase over several weeks",
                "Continue warming activities even after you start sending cold outbound"
              ]} />
            </Step>
          </ol>
          
          <Card title="Why Skip This At Your Peril" className="mt-12">
            <p className="mb-4">Many outbound campaigns fail at the infrastructure stage. Most companies use a single inbox per person approach, which is inefficient and risky:</p>
            <Checklist items={[
              "ESPs want to see human-like volume from email accounts (not hundreds of identical emails)",
              "Sending from your main domain puts your entire company's email reputation at risk",
              "Without proper authentication records, your emails are more likely to be flagged as spam",
              "When you're sending at scale, diversifying across domains protects your deliverability"
            ]} />
          </Card>
        </div>
      </section>
      
      {/* Additional sections would go here */}
    </>
  );
};

const PhoneContent: React.FC = () => {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Cold Calling Works for B2B SaaS" 
            subtitle="A powerful channel that cuts through digital noise and creates real-time connections with prospects"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
            <BenefitCard 
              title="Real-Time Dialogue" 
              description="Cold calling enables a two-way conversation that builds rapport and uncovers needs much faster than email exchanges."
            />
            <BenefitCard 
              title="Higher Executive Reach" 
              description="57% of C-level executives prefer phone outreach over other channels - making calls effective for reaching decision-makers."
            />
            <BenefitCard 
              title="Door Opener" 
              description="82% of buyers have accepted meetings with sellers who proactively reached out by phone, even from previously unknown companies."
            />
            <BenefitCard 
              title="Complements Other Channels" 
              description="When combined with email and LinkedIn outreach, phone calls create a multi-channel approach that significantly boosts response rates."
            />
          </div>
          
          <Testimonial 
            quote="While many claimed cold calling was dead, we found it to be our most effective channel for booking demos with enterprise clients. The key was having a consultative approach rather than pushing for a sale immediately. Our call-to-meeting conversion rate is 3x higher than our email-to-meeting rate."
            author="Samantha Wright, VP of Sales at EnterpriseStack"
          />
        </div>
      </section>
      
      {/* Additional phone content sections would go here */}
    </>
  );
};

const ColdOutboundPage: React.FC = () => {
  return (
    <div>
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Cold Outbound Strategies for B2B SaaS</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Master email and phone outreach to effectively connect with prospects and drive qualified leads
          </p>
          
          <TabContainer 
            tabs={[
              { id: 'email', label: 'Email Outreach', content: <EmailContent /> },
              { id: 'phone', label: 'Phone Outreach', content: <PhoneContent /> }
            ]}
            defaultActiveTab="email"
            className="mt-8"
          />
        </div>
      </section>
      
      <section className="bg-primary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Master Cold Outbound?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Follow this playbook to create personalized outreach campaigns, run them at scale, and generate qualified leads
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button 
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
              onClick={() => document.getElementById('email')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start with Email
            </button>
            <button 
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
              onClick={() => document.getElementById('phone')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start with Phone
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Frequently Asked Questions" />
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Should I start with email or phone for cold outreach?",
                answer: "Both channels have their strengths, and the most effective approach is often using them in combination. Email works well for initial contact at scale, while phone calls excel at creating real-time conversations. Consider your specific situation: For reaching executives, phones might work better (57% of C-level execs prefer calls). For technical audiences who prefer written information, email might be better to start. The ideal approach is a coordinated multi-channel strategy where emails and calls reinforce each other - for example, sending an email followed by a call reference the email, or calling first and then sending a follow-up email with promised information."
              },
              {
                question: "How many emails should I send per day?",
                answer: "It depends on your infrastructure setup. With the approach described in this handbook, we recommend sending about 20 emails per day per inbox. With 3 inboxes per domain, that's 60 emails per domain per day. Scale your operation by adding more domains rather than increasing the send rate per inbox. This approach mimics natural human sending patterns and reduces the risk of being flagged as spam."
              },
              {
                question: "How many calls should I make per day?",
                answer: "For B2B SaaS outreach, a typical SDR should aim for 40-60 calls per day, resulting in roughly 8-12 meaningful conversations. This volume allows for quality conversations while maintaining sufficient activity levels. However, the number can vary based on your target audience, the complexity of your offering, and how much research is needed before each call. Quality always trumps quantity - 30 well-researched, highly targeted calls will yield better results than 100 generic ones. Many successful teams organize calling into \"power hour\" blocks of focused activity rather than spreading calls throughout the day."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColdOutboundPage; 