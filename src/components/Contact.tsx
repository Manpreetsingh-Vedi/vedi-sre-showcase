import React, { useState } from 'react';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Your message has been received. We'll get back to you soon.",
        });
        
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container-wrapper">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold text-navy mb-4">Contact Information</h3>
            <p className="text-slate mb-6">
              I'm currently open to new opportunities and challenges. Feel free to reach out 
              for collaborations or just a friendly chat about technology.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-teal bg-opacity-10 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-teal" />
                </div>
                <div>
                  <h4 className="text-navy font-medium">Email</h4>
                  <p className="text-slate">manpreet.vedi@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal bg-opacity-10 p-3 rounded-full mr-4">
                  <MessageSquare size={20} className="text-teal" />
                </div>
                <div>
                  <h4 className="text-navy font-medium">LinkedIn</h4>
                  <p className="text-slate">linkedin.com/in/manpreet-vedi</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-navy font-medium mb-2">Availability</h4>
              <p className="text-slate">
                Currently working full-time at JLL on Google projects, but I'm available for freelance 
                consulting on SRE, cloud architecture, and DevOps implementations.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-6">Send Me a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-navy block mb-1">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={16} className="text-slate" />
                    </div>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="Your name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-navy block mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={16} className="text-slate" />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-navy block mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="h-32"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-navy hover:bg-navy/90 text-teal flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={16} />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
