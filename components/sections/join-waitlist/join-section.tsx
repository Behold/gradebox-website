'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="join-section py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Container>
        <div className="text-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              Join the Waitlist
            </h2>
            <p className="text-md sm:text-lg lg:text-[18px] text-gray-600 dark:text-gray-300 max-w-[75vw] mx-auto leading-tight sm:leading-relaxed lg:leading-relaxed">
              Be among the first to experience Gradebox when we launch. Sign up below to get early access and exclusive updates.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-base font-medium text-gray-700 dark:text-gray-300">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-base font-medium text-gray-700 dark:text-gray-300">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-base font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-base font-medium text-gray-700 dark:text-gray-300">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>

            {/* Position, Subject, Grade Level Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="position" className="text-base font-medium text-gray-700 dark:text-gray-300">
                  Position
                </Label>
                <Select value={formData.position} onValueChange={(value) => handleInputChange('position', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="administrator">Administrator</SelectItem>
                    <SelectItem value="counselor">Counselor</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="subject" className="text-base font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </Label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Math</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="social-studies">Social Studies</SelectItem>
                    <SelectItem value="arts">Arts</SelectItem>
                    <SelectItem value="physical-education">Physical Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="gradeLevel" className="text-base font-medium text-gray-700 dark:text-gray-300">
                  Grade Level
                </Label>
                <Select value={formData.gradeLevel} onValueChange={(value) => handleInputChange('gradeLevel', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="elementary">Elementary (K-5)</SelectItem>
                    <SelectItem value="middle">Middle School (6-8)</SelectItem>
                    <SelectItem value="high">High School (9-12)</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="text-base font-medium text-gray-700 dark:text-gray-300">
                Additional Message (Optional)
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us more about your interest in Gradebox..."
                className="mt-2 min-h-[120px]"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button 
                type="submit" 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Waitlist
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
