import { useTranslations } from 'next-intl';
import { CONTACT_US_EMAIL } from '@/lib/env';

export default function AboutUsPage() {
  const t = useTranslations('AboutUs');

  return (
    <main className="min-h-screen bg-[#0F0E12] text-gray-300 py-16 px-6 lg:px-0">
      <div className="mx-auto max-w-3xl">

        {/* 页面大标题 */}
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4 lg:text-4xl">
          About Us
        </h1>

        <div className="space-y-8 text-sm leading-relaxed lg:text-base">

          {/* 第一部分：网站使命 */}
          <section className="space-y-3">
            <p>
              Welcome to our platform! We are a premium online destination dedicated to exploring, reviewing, and recommending the latest digital products, AI tools, and innovative consumer technologies.
            </p>
            <p>
              Our mission is to bridge the gap between world-class brands and global consumers by providing insightful product evaluations, detailed user guides, and independent shopping recommendations.
            </p>
          </section>

          {/* 第二部分：公司主体身份 */}
          <section className="space-y-3 bg-[#15141A] p-6 rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold text-white">Our Business Identity</h2>
            <p>
              This website is fully owned and operated by <strong className="text-white">【换成你营业执照上的英文或拼音公司全称】</strong> Co., Ltd., a legally registered digital marketing and technology enterprise.
            </p>
            <p>
              We possess a complete, legitimate business infrastructure and compliance framework to conduct professional global performance marketing and digital advertising campaigns.
            </p>
          </section>

          {/* 第三部分：业务模式与联盟免责声明 */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Our Business Model & Affiliate Disclosure</h2>
            <p>
              We operate strictly as an independent digital publisher and performance marketing partner. To sustain our daily operations and continue delivering high-quality, free content to our global audience, we participate in legitimate third-party sub-affiliate marketing networks (such as PartnerBoost, Amazon Associates, etc.).
            </p>
            <p>
              When users click on certain product links on our website and make a purchase on external marketplaces, we may earn a small referral commission from the platforms. Please be assured that our reviews are based on objective analysis, and we always strive to guide our users to safe, verified, and authorized official brand stores.
            </p>
          </section>

          {/* 第四部分：联系信息 */}
          <section className="space-y-3 border-t border-gray-800 pt-6">
            <h2 className="text-xl font-semibold text-white">Corporate Contact Information</h2>
            <ul className="space-y-2 text-gray-400">
              <li>
                <strong className="text-gray-300">Company Name:</strong> 【Wulucai Trading Co., Ltd.,Huli District, Xiamen City
】
              </li>
              <li>
                <strong className="text-gray-300">Corporate Address:</strong> 【Area 01, Room 702, 77 Lingxia South Road, Huli District, Xiamen City】
              </li>
              <li>
                <strong className="text-gray-300">Business Inquiry Email:</strong>{' '}
                <a href={`mailto:${CONTACT_US_EMAIL}`} className="text-blue-400 hover:underline">
                  {CONTACT_US_EMAIL}
                </a>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}
