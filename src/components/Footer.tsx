import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <p className="text-gray-600 flex items-center justify-center space-x-2">
            <span>Created with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by Vedha</span>
          </p>
        </div>
      </div>
    </footer>
  );
}