'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { FloatingInput, FloatingSelect, FloatingTextarea } from '@/components/ui/form-elements';

export function JoinSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    subject: '',
    gradeLevel: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          subject: '',
          gradeLevel: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join-section" className="join-section py-24 bg-[#F8F6EE]">
      <Container>
        <div className="mx-auto">
          {/* Main Card Container */}
          <div className="bg-white rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Illustration */}
              <div className="p-12 md:pl-0 flex items-center">
                <div className="w-100 aspect-square">
                  <img 
                    src="/images/image-join.svg" 
                    alt="Join Gradebox illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="p-12 md:pl-0">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">
                      Get Early Access
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Join our waitlist and be among the first to experience the future of grading.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <FloatingInput
                          id="firstName"
                          label="First Name"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                        />
                      </div>
                      <div>
                        <FloatingInput
                          id="lastName"
                          label="Last Name"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Work Email and Phone Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <FloatingInput
                          id="email"
                          label="Work Email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                      <div>
                        <FloatingInput
                          id="phone"
                          label="Phone Number"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Position, Subject, Grade Level Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <FloatingSelect
                          value={formData.position}
                          onValueChange={(value) => handleInputChange('position', value)}
                          label="Position"
                        >
                          <option value="educator">Educator</option>
                          <option value="teacher">Teacher</option>
                          <option value="administrator">Administrator</option>
                          <option value="principal">Principal</option>
                          <option value="other">Other</option>
                        </FloatingSelect>
                      </div>
                      <div>
                        <FloatingSelect
                          value={formData.subject}
                          onValueChange={(value) => handleInputChange('subject', value)}
                          label="Subject"
                        >
                          <option value="math">Math</option>
                          <option value="science">Science</option>
                          <option value="english">English</option>
                          <option value="history">History</option>
                          <option value="other">Other</option>
                        </FloatingSelect>
                      </div>
                      <div>
                        <FloatingSelect
                          value={formData.gradeLevel}
                          onValueChange={(value) => handleInputChange('gradeLevel', value)}
                          label="Grade Level"
                        >
                          <option value="elementary">Elementary (K-5)</option>
                          <option value="middle">Middle School (6-8)</option>
                          <option value="high">High School (9-12)</option>
                          <option value="college">College/University</option>
                          <option value="other">Other</option>
                        </FloatingSelect>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <FloatingTextarea
                        id="message"
                        label="Message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your grading challenges..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full text-lg px-12 py-8 bg-[#054BC1] font-bold text-white font-semibold rounded-full transform hover:scale-105 hover:bg-[#054BC1]/90 transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Submitting...
                          </>
                        ) : (
                          'Join the waitlist'
                        )}
                      </Button>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-800 font-medium">
                          🎉 Thanks for joining! We'll be in touch soon.
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800 font-medium">
                          ❌ Something went wrong. Please try again.
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
