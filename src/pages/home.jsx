import React from 'react'
import MainLayout from '../layout/mainLayout';
import HomeBannerSection from '../components/homeBannerSection';
import HomeVarificationSection from '../components/homeVarificationSection';
import HomeAboutUsSection from '../components/homeAboutUsSection';
import SecurityAndVerificationSection from '../components/securityAndVerificationSection';
import FAQSection from '../components/faqSection';
import GetInTouchSection from '../components/getInTouchSection';

export default function Home() {
    return (
        <MainLayout>
            <div className="bg-[#1D1D21] relative z-10 md:mb-[276px] lg:mb-[283px] overflow-hidden">
                <HomeBannerSection />
                <HomeVarificationSection />
                <HomeAboutUsSection />
                <SecurityAndVerificationSection />
                <FAQSection />
                <GetInTouchSection />
            </div>
        </MainLayout>
    )
}
