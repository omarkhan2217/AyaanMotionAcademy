import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageWrapper } from ".";

// Lazy loading pages
const HomePage = React.lazy(() => import("./pages/homePage"));
const OurAchievers = React.lazy(() => import("./pages/ourAchievers"));
const OurFaculty = React.lazy(() => import("./pages/ourFaculty"));
const PrivacyPolicy = React.lazy(() => import("./pages/privacyPolicy"));
const TermsAndPolicy = React.lazy(() => import("./pages/termsAndPolicy"));
const ContactUs = React.lazy(() => import("./pages/contactUs"));
const AboutUs = React.lazy(() => import("./pages/aboutUs"));
const CareerGuidance = React.lazy(() => import("./pages/careerGuidance"));
const OurBatches = React.lazy(() => import("./pages/ourBatches"));
const FoundationBatch = React.lazy(() => import("./pages/allBatchesPage/foundationBatch"));
const StarBatch = React.lazy(() => import("./pages/allBatchesPage/starBatch"));
const LakshyaBatch = React.lazy(() => import("./pages/allBatchesPage/lakshyaBatch"));
const ScholarBatch = React.lazy(() => import("./pages/allBatchesPage/scholarBatch"));
const TargetBatch = React.lazy(() => import("./pages/allBatchesPage/targetBatch"));
const RankersBatch = React.lazy(() => import("./pages/allBatchesPage/rankersBatch"));

// Component to scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App = () => {
  const location = useLocation(); // This is necessary to trigger animations on route changes

  return (
    <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <HomePage />
                </PageWrapper>
              }
            />
            <Route
              path="/our-achievers"
              element={
                <PageWrapper>
                  <OurAchievers />
                </PageWrapper>
              }
            />
            <Route
              path="/our-faculty"
              element={
                <PageWrapper>
                  <OurFaculty />
                </PageWrapper>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <PageWrapper>
                  <PrivacyPolicy />
                </PageWrapper>
              }
            />
            <Route
              path="/terms-and-policy"
              element={
                <PageWrapper>
                  <TermsAndPolicy />
                </PageWrapper>
              }
            />
            <Route
              path="/contact-us"
              element={
                <PageWrapper>
                  <ContactUs />
                </PageWrapper>
              }
            />
            <Route
              path="/about-us"
              element={
                <PageWrapper>
                  <AboutUs />
                </PageWrapper>
              }
            />
            <Route
              path="/career-guidance"
              element={
                <PageWrapper>
                  <CareerGuidance />
                </PageWrapper>
              }
            />
            <Route
              path="/our-batches"
              element={
                <PageWrapper>
                  <OurBatches />
                </PageWrapper>
              }
            />
            <Route
              path="/our-batches/foundation-batch"
              element={
                <PageWrapper>
                  <FoundationBatch />
                </PageWrapper>
              }
            />
            <Route
              path="/our-batches/star-batch"
              element={
                <PageWrapper>
                  <StarBatch />
                </PageWrapper>
              }
            />
            <Route
              path="/our-batches/lakshya-batch"
              element={
                <PageWrapper>
                  <LakshyaBatch />
                </PageWrapper>
              }
            />
            <Route
              path="/our-batches/scholar-batch"
              element={
                <PageWrapper>
                  <ScholarBatch />
                </PageWrapper>
              }
            />
            <Route
              path="/our-batches/target-batch"
              element={
                <PageWrapper>
                  <TargetBatch />
                </PageWrapper>
              }
            />
            <Route
              path="/our-batches/rankers-batch"
              element={
                <PageWrapper>
                  <RankersBatch />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </div>
  );
};
