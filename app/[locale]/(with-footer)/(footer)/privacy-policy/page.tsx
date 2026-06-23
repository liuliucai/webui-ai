import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('FooterNavigation.privacyPolicy');

  return (
    <div className='prose mx-auto p-6 text-gray-200 prose-headings:text-gray-200'>
      {/* 🟢 专为 Google 广告审核强行插入的合规声明卡片 */}
      <div className='mb-10 bg-[#15141A] p-6 rounded-lg border border-gray-800 text-gray-300 not-prose'>
        <h2 className='text-xl font-semibold text-white mb-4'>About Us & Corporate Identity</h2>
        <p className='mb-3 text-sm leading-relaxed'>
          This website is fully owned and operated by <strong className='text-white'>Wulucai Trading Co., Ltd.,Huli District, Xiamen City</strong>, a legally registered digital marketing and technology enterprise.
        </p>
        <p className='mb-3 text-sm leading-relaxed'>
          <strong className='text-gray-300'>Corporate Address:</strong> Area 01, Room 702, 77 Lingxia South Road, Huli District, Xiamen City
        </p>
        <p className='text-sm leading-relaxed'>
          <strong className='text-gray-300'>Business Model & Affiliate Disclosure:</strong> We operate strictly as an independent digital publisher and performance marketing partner. We participate in legitimate third-party sub-affiliate marketing networks (such as PartnerBoost, Amazon Associates, etc.). When users click on certain product links on our website and make a purchase on external marketplaces, we may earn a small referral commission from the platforms.
        </p>
      </div>

      {/* 以下是原本的国际化翻译内容 */}
      <h1>{t('1-h1')}</h1>
      <p>{t('1-p')}</p>

      <h2>{t('2-h2')}</h2>
      <p>{t('2-p')}</p>

      <h2>{t('3-h2')}</h2>
      <p>{t('3-p')}</p>

      <h2>{t('4-h2')}</h2>
      <p>{t('4-p')}</p>

      <h2>{t('5-h2')}</h2>
      <p>{t('5-p-1')}</p>
      <ul>
        <li>{t('5-li-1')}</li>
        <li>{t('5-li-2')}</li>
        <li>{t('5-li-3')}</li>
        <li>{t('5-li-4')}</li>
      </ul>
      <p>{t('5-p-2')}</p>

      <h2>{t('6-h2')}</h2>
      <p>{t('6-p')}</p>

      <h2>{t('7-h2')}</h2>
      <p>{t('7-p')}</p>

      <h2>{t('8-h2')}</h2>
      <p>{t('8-p')}</p>
    </div>
  );
}
