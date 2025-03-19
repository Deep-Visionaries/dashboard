import React from 'react';
import { Video, Image, Type } from 'lucide-react';

interface ContentPreviewProps {
  type: 'shorts' | 'ads';
}

export function ContentPreview({ type }: ContentPreviewProps) {
  if (type === 'shorts') {
    return (
      <div className="w-full max-w-5xl">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Video className="w-5 h-5" />
            YouTube Shorts Preview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-[9/16] bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Short preview #1</p>
            </div>
            <div className="aspect-[9/16] bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Short preview #2</p>
            </div>
            <div className="aspect-[9/16] bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Short preview #3</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Image className="w-5 h-5" />
          Google Ads Creatives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Headlines</label>
              <div className="space-y-2">
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <p className="text-gray-600 font-medium">Transform Your Business Today</p>
                </div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <p className="text-gray-600 font-medium">Unlock Growth Potential</p>
                </div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <p className="text-gray-600 font-medium">Drive Better Results</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Descriptions</label>
              <div className="space-y-2">
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <p className="text-gray-600">Expert solutions tailored to your needs. Start your journey to success today.</p>
                </div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <p className="text-gray-600">Proven strategies that deliver results. Join industry leaders who trust our expertise.</p>
                </div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <p className="text-gray-600">Transform your approach with data-driven insights. Book a consultation now.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}