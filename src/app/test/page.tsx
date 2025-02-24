"use client";

import React from 'react';
import RabetIcon from '@/components/RabetIcon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface WalletConnectionHandler {
  (publicKey: string | null): void;
}

const TestComponent: React.FC = () => {
  const handleWalletConnection: WalletConnectionHandler = (publicKey) => {
    if (publicKey) {
      console.log('Wallet connected:', publicKey);
    } else {
      console.log('Wallet disconnected');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <RabetIcon onConnected={handleWalletConnection} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default TestComponent;