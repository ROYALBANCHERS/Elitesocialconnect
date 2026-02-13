import React from 'react';
import { SectionTitle } from '../components/SectionTitle';

export const Legal: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
            <SectionTitle title="Legal" subtitle="Terms & Privacy" />
            <div className="prose prose-lg">
                <h3>Privacy Policy</h3>
                <p>At EliteSocialConnect, we value your privacy. This is a generic placeholder for the privacy policy. In a real application, this would contain detailed legal information regarding data collection, cookies, and user rights.</p>
                <br />
                <h3>Terms of Service</h3>
                <p>By using our website, you agree to these terms. This is a generic placeholder for terms of service.</p>
            </div>
        </div>
    </div>
  );
};